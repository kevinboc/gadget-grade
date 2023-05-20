import { useState } from "react";
import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import StarRating from "../components/StarRating.jsx"
import axios from "axios";
import Navbar from "../layouts/Navbar.jsx"

const ReviewPage = () => {
    const { id } = useParams();
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const[item, setItem] = useState({});
    const [errors, setErrors] = useState({})
    const [reviewed, setReviewed] = useState(false)

    useEffect(() => {
        const fetchItem = async () => {
          try {
            const response = await axios.get('http://localhost:3500/product/'+id)
            setItem(response.data);
          } catch (error) {
            console.error("Error fetching items", error)
          }
        }

        const isReviewed = async () => {
            try {
                const response = await axios.get('http://localhost:3500/review/product/' + id)
                response.data.map((review) => {
                    if(review.author._id === sessionStorage.getItem('user')._id) {
                        setReviewed(true)
                    }
                })
              } catch (error) {
                console.error("Error fetching items", error)
              }
        }

        isReviewed()
        fetchItem()
      }, [id]);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleSubmit = async (e) => {
        setErrors({})
        e.preventDefault();
        const author = JSON.parse(sessionStorage.getItem('user'))
        let pass = true;

        // Validation 
        if (rating <= 0) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                ratingError: "Invalid rating.",
              }));
            pass = false;
        }
    
        if (title.trim().length === 0) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                titleError: "Invalid title.",
              }));
            pass = false;
        }
    
        if (review.trim().length === 0) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                bodyError: "Invalid body.",
              }));
            pass = false;
        }

       if(!pass) {
        return;
       }
    
        // Proceed with the post request
        try {
            await axios.post('http://localhost:3500/review', {
                rating: rating,
                title: title,
                body: review,
                author: author._id,
                product: id
            });
            window.location.href = "http://localhost:3000/product/" + id
        } catch (error) {
            alert("Error submitting review")
            console.error("Error submitting review", error)
        }
    };

    useEffect(() => {
    const user = sessionStorage.getItem('user');

    if (!user || reviewed) {
        window.location.href = "http://localhost:3000/login"
    }
    }, [reviewed]);

    const getProductImageURL = () => {
        return "/products/" +  id + ".jpg"
      }

  return (
    
    <div>
        <Navbar/>
        <div className="p-4 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Write a Review For The {item.name}</h2>
            <div className="overflow-hidden h-[50vh] w-auto pb-5">
                <img src={getProductImageURL()} alt="" className="h-full w-auto p-5 border border-solid border-borderColor rounded-md shadow-[0_0_10px_0_rgba(0,0,0,0.1)]" />
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Rating:</label>
                <StarRating rating={rating} onRatingChange={handleRatingChange} />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Review Title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Review title"
                    required
                    minLength={1}
                />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Review:</label>
                <textarea 
                    value={review}
                    onChange={handleReviewChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Write your review here"
                    rows="5"
                    required
                    minLength={1}
                    maxLength={500}
                />
                </div>
                {Object.keys(errors).map((key) => (
                    <p key={key} style={{ color: 'red', marginTop: '5px' }}>
                        {errors[key]}
                    </p>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
                </button>
            </form>
        </div>
    </div>
  );
};

export default ReviewPage;
