import Hero from "../assets/hero.jpg"
import Navbar from "../layouts/Navbar.jsx"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import StarDisplay from "../components/StarDisplay";

const UserProfile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState({});
    const [reviews, setReviews] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await axios.get('http://localhost:3500/user/'+id)
            setProfile(response.data);
            setNewDescription(response.data.description);
          } catch (error) {
            console.error("Error fetching profile", error)
          }
        }

        const fetchUserReviews = async () => {
            console.log('test')
            try {
              const response = await axios.get('http://localhost:3500/review/user/'+id)
              setReviews(response.data);
            } catch (error) {
              console.error("Error fetching items", error)
            }
        }
    
        fetchProfile()
        fetchUserReviews()
      }, []);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
        setError(null);
    }

    const handleDescriptionChange = (e) => {
        setNewDescription(e.target.value);
    }

    const handleDescriptionUpdate = async () => {
        if (!newDescription.trim()) {
            setError('Description cannot be empty');
            return;
        }
        if (newDescription.length > 500) {
            setError('Description cannot exceed 500 characters');
            return;
        }
        try {
            const response = await axios.put(`http://localhost:3500/user/${id}`, { description: newDescription });
            setProfile(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating description", error);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="flex h-screen ml-[1%]">
            <div className ="ml-[2%] mt-[2%] flex-col w-1/4 mr-[3%]">
                <div className="">
                    <img src={Hero} alt="Hero Image" className="min-w-full " />
                </div>

                <div className="mt-[2%] flex bg-gray-200 rounded-lg shadow-md p-2">
                    <h1 className="font-bold w-1/2">Reviews: {profile.reviews}</h1>
                    <h1 className="font-bold">Verified: </h1>
                </div>

                <div className=" flex-col mt-[3%] bg-gray-200 bg-opacity-50 h-auto p-2 rounded-lg shadow-md">

                    <div className="flex ">
                        <div className="w-1/2">
                            <h1 className="font-bold mt-1">First Name: </h1>
                            <p className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md w-3/4">{profile.firstName}</p>
                        </div>
                    
                        <div className="flex-col w-1/2">
                            <h1 className="font-bold mt-1">Last Name: </h1>
                            <p className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md w-3/4">{profile.lastName}</p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-col w-1/2">
                            <h1 className="font-bold mt-2">Location: </h1>
                            <p className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md w-3/4">{profile.location}</p>
                        </div>

                        <div className="flex-col w-1/2">
                            <h1 className="font-bold mt-2">Account Created: </h1>
                            <p className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md w-3/4">{new Date(profile.timeStamp).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
                        </div>
                    </div>

                    <div className="flex-col mt-[2%] h-3/5">
                        <h1 className="font-bold mt-2">User Description:</h1>
                        {isEditing ? (
                            <div>
                                <textarea
                                    className="bg-gray-100 mt-1 p-2 rounded-lg shadow-md h-full w-full break-words whitespace-pre-wrap overflow-auto"
                                    value={newDescription}
                                    onChange={handleDescriptionChange}
                                />
                                {error && <p className="text-red-500">{error}</p>}
                                <button 
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                                    onClick={handleDescriptionUpdate}
                                >
                                    Update
                                </button>
                                <button 
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2"
                                    onClick={handleEditClick}
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p className="bg-gray-100 mt-1 p-2 rounded-lg shadow-md h-full w-full break-words whitespace-pre-wrap overflow-auto">{profile.description}</p>
                                <button 
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-2 "
                                    onClick={handleEditClick}
                                >
                                    Edit
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-2/3 h-4/5 bg-gray-200 p-3 rounded-lg shadow-md mt-[2%] mr-[2%]">
                <div className="flex-col">
                    <h1 className="font-bold text-lg mb-4">Recent Activity:</h1>
                    {reviews.map(review => (
                        <div key={review._id} className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-xl font-bold">{review.title}</h2>
                                <div>
                                    <StarDisplay rating={review.rating}/>
                                </div>
                            </div>
                            <p className="mb-3 text-gray-700">{review.body}</p>
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <span className="mr-2">Likes: {review.like}</span>
                                    <span>Dislikes: {review.dislike}</span>
                                </div>
                                <small className="text-gray-500">{new Date(review.timeStamp).toLocaleString()}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserProfile