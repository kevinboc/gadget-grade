import Navbar from "../layouts/Navbar.jsx"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import StarRating from "../components/StarRating.jsx"

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

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-[20px] font-sans">
      <div className="flex mb-[20px] rounded-[10px] overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
        <img className="object-cover w-[40%]" />
        <div className="p-[20px] w-[60%]">
          <h2 className="mb-[15px]"></h2>
          <p className="font-bold text-2xl mb-[15px]">{item.name}</p>
          <p className="mb-[15px]">{item.description}</p>
        
          <button className="bg-[#007BFF] text-white border-none rounded py-[10px] px-[20px] w-full mt-[20px] cursor-pointer">Review Now</button>
        </div>
      </div>
      <div className="mt-[20px]">
        <h4>Reviews:</h4>
        <div className="h-[100px] overflow-y-auto">
          {reviews.map(review => (
            // Review
            <div key={review._id} className="flex flex-row justify-between h-[100px]">
              {/* Left Container */}
              <div className="flex flex-row">
                {/* User Container */}
                {/* User Profile Picture */}
                <img src={getImage(review.author)} alt="" className="w-[100px] h-[100px]"/>
                {/* Review Body */}
                <p>{review.body}</p>
              </div>
              {/* Right Container */}
              <div className="flex flex-col">
                {/* Star Ratings */}
                <StarRating rating={review.rating} />
                {/* Button Container */}
                <div className="flex flex-row">
                  {/* Like */}
                  Like
                  {/* Dislike */}
                  Dislike
                  {/* Comment */}
                  Comment
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
