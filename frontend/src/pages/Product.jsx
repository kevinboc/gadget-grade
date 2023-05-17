import Navbar from "../layouts/Navbar.jsx"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import StarDisplay from "../components/StarDisplay"

const ProductDetailPage = () => {
  const { id } = useParams();
  const[item, setItem] = useState({});
  const[reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get('http://localhost:3500/product/'+id)
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching items", error)
      }
    }

    const fetchItemReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3500/review/product/'+id)
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching items", error)
      }
    }

    fetchItem()
    fetchItemReviews()
  }, []);

  const getImage = async (filename) => 
  {
    try {
      const image = await import("../assets/users/"+filename+".jpg")
      console.log
      return image.default
    } catch (error) {
      console.error(`Error loading image: ${filename}`, error);
    }
  };

  const handleReviewButton = () => {
    if(sessionStorage.getItem("user")) {
      window.location.href = `/review/${id}`;
    } else {
      window.location.href = `/login`;
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-[20px] font-sans">
      <div className="flex mb-[20px] rounded-[10px] overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
        <img className="object-cover w-[40%]" />
        <div className="p-[20px] w-[60%]">
          <h2 className="mb-[15px]"></h2>
          <p className="font-bold text-2xl mb-[15px]">{item.name}</p>
          <StarDisplay className="mb-[15px]" rating={item.rating}/>
          <p className="mb-[15px]">{item.description}</p>
        
          {sessionStorage.getItem("user") ? (
            <button className="bg-[#007BFF] text-white border-none rounded py-[10px] px-[20px] w-full mt-[20px] cursor-pointer" onClick={handleReviewButton}>Review Now</button>
          ) : (
            <button className="bg-[#007BFF] text-white border-none rounded py-[10px] px-[20px] w-full mt-[20px] cursor-pointer" onClick={handleReviewButton}>Log In To Review</button>
          )}
        </div>
      </div>
      <div className="mt-[20px]">
        <h4 className="font-bold">Reviews:</h4>
        <div className="h-[500px] overflow-y-auto">
          {reviews.map(review => (
            <div key={review._id} className="flex items-start justify-between bg-white p-6 rounded-lg shadow-md mb-4">
            {/* Left Container */}
            <div className="flex">
                {/* User Container */}
                {/* User Profile Picture */}
                <img src={getImage(review.author)} alt="" className="w-20 h-20 rounded-full mr-4"/>
                {/* Review Body */}
                <div>
                    <p className="text-lg text-gray-700">{review.body}</p>
                </div>
            </div>
        
            {/* Right Container */}
            <div className="flex flex-col items-start justify-between ml-4">
                {/* Star Ratings */}
                <div className="mb-2">
                    <StarDisplay rating={review.rating} />
                </div>
        
                {/* Button Container */}
                <div className="flex space-x-2">
                    {/* Like */}
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Like</button>
                    {/* Dislike */}
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Dislike</button>
                    {/* Comment */}
                    <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-700">Comment</button>
                </div>
            </div>
        </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetailPage;
