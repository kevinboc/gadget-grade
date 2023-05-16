import Hero from "../assets/hero.jpg"
import Navbar from "../layouts/Navbar.jsx"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import StarRating from "../components/StarRating.jsx"
import { RiProfileLine } from "react-icons/ri";

const userProfile = () => {
    const { id } = useParams();
    const[profile, setProfile] = useState({});
    const[reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await axios.get('http://localhost:3500/user/'+id)
            setProfile(response.data);
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
    
    return (
        <div>
            <Navbar/>
            <div className="flex h-screen">
            <div className ="ml-[2%] mt-[2%] flex-col w-1/4 mr-[2%]">
                <div className="">
                    <img src={Hero} alt="Hero Image" className="min-w-full " />
                </div>

                <div className="mt-[2%] flex bg-gray-200 rounded-lg shadow-md p-2">
                    <h1 className="font-bold w-1/2">Reviews: {profile.reviews}</h1>
                    <h1 className="font-bold">Verified: </h1>
                </div>

                <div className=" flex-col mt-[3%] bg-blue-500 bg-opacity-50 h-1/2 p-2 rounded-lg shadow-md">

                    <div className="flex ">
                        <div className="w-1/2">
                            <h1 className="font-bold">First Name: </h1>
                            <p className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md w-3/4">{profile.firstName}</p>
                        </div>
                    
                        <div className="flex-col w-1/2">
                            <h1 className="font-bold">Last Name: </h1>
                            <p className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md w-3/4">{profile.lastName}</p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-col w-1/2">
                            <h1 className="font-bold">Location: </h1>
                            <p className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md w-3/4">{profile.location}</p>
                        </div>

                        <div className="flex-col w-1/2">
                            <h1 className="font-bold">Account Created: </h1>
                            <p className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md w-3/4">{new Date(profile.timeStamp).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
                        </div>
                    </div>

                    <div className="flex-col mt-[2%] h-3/5">
                        <h1 className="font-bold">User Description:</h1>
                        <p className="bg-gray-100 mt-1 p-2 rounded-lg shadow-md h-full w-full break-words whitespace-pre-wrap overflow-auto">{profile.description}</p>
                    </div>
                </div>
            </div>

            <div className="w-3/4 h-4/5 bg-gray-200 p-3 rounded-lg shadow-md mt-[2%] mr-[2%]">
                <div className="flex-col">
                    <h1 className="font-bold"> Recent Activity:</h1>
                    {reviews.map(review => (
                        <p key={review._id} className="bg-gray-100 mt-1 p-1 rounded-lg shadow-md">{review.body}</p>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default userProfile