import Navbar from "../layouts/Navbar.jsx"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import StarDisplay from "../components/StarDisplay"
import { useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri"

const ProductDetailPage = () => {
  const { id } = useParams();
  const[item, setItem] = useState({});
  const[reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState({});
  const [comments, setComments] = useState({}); // Comments will be an object where each key is a reviewId and the value is an array of comments
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState({});
  const [errors, setErrors] = useState({}); 
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

    const fetchItemReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3500/review/product/'+id)
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching items", error)
      }
    }

    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:3500/comment/product/'+id); // Assuming this endpoint returns comments for all reviews of a product
        setComments(response.data); // The response should be in the format {reviewId1: [comment1, comment2, ...], reviewId2: [...], ...}
      } catch (error) {
        console.error("Error fetching comments", error);
      }
    }

    const isReviewed = async () => {
      try {
          const response = await axios.get('http://localhost:3500/review/product/' + id)
          const user = JSON.parse(sessionStorage.getItem('user'));
          response.data.map((review) => {
              if(review.author._id === user._id) {
                console.log("setting to true")
                  setReviewed(true)
              }
          })
        } catch (error) {
          console.error("Error fetching items", error)
        }
    }

    isReviewed()
    fetchItem()
    fetchItemReviews()
    fetchComments()
  }, [id]);

  const handleReviewButton = () => {
    if(!reviewed) {
      if(sessionStorage.getItem("user")) {
        navigate(`/review/${id}`);
      } 
      else {
        navigate(`/login`);
      }
    }
  }

  const getUserImageURL = (review) => {
    return "/users/" +  review.author.image + ".svg"
  }

  const getProductImageURL = () => {
    return "/products/" +  id + ".jpg"
  }

  const handleLike = async (review) => {
    try {
      const user = sessionStorage.getItem('user');
      if(review.usersDisliked.includes(user)) {
        review.usersDisliked = review.usersDisliked.filter(u => u !== user);
        review.dislike--
        review.usersLiked.push(user)
        review.like++
        const response = await axios.put(`http://localhost:3500/review/${review._id}`, { 
          like: review.like,
          dislike: review.dislike,
          usersDisliked: review.usersDisliked,
          usersLiked: review.usersLiked
        });
        setReviews(reviews.map(r => r._id === review._id ? {...r, like: response.data.like, dislike: response.data.dislike, usersLiked: response.data.usersLiked, usersDisliked: response.data.usersDisliked} : r));
      } else {
        review.usersLiked.push(user)
        review.like++
        const response = await axios.put(`http://localhost:3500/review/${review._id}`, { 
          like: review.like,
          usersLiked: review.usersLiked
        });
        setReviews(reviews.map(r => r._id === review._id ? {...r, like: response.data.like, usersLiked: response.data.usersLiked} : r));
      }
    } catch (error) {
      console.error("Error liking review", error);
    }
  }
  
  const handleDislike = async (review) => {
    try {
      const user = sessionStorage.getItem('user');
      if(review.usersLiked.includes(user)) {
        review.usersLiked = review.usersLiked.filter(u => u !== user);
        review.like--
        review.usersDisliked.push(user)
        review.dislike++
        const response = await axios.put(`http://localhost:3500/review/${review._id}`, { 
          like: review.like,
          dislike: review.dislike,
          usersDisliked: review.usersDisliked,
          usersLiked: review.usersLiked
        });
        setReviews(reviews.map(r => r._id === review._id ? {...r, like: response.data.like, dislike: response.data.dislike, usersLiked: response.data.usersLiked, usersDisliked: response.data.usersDisliked} : r));
      } else {
        review.usersDisliked.push(user)
        review.dislike++
        const response = await axios.put(`http://localhost:3500/review/${review._id}`, { 
          dislike: review.dislike,
          usersDisliked: review.usersDisliked
        });
        setReviews(reviews.map(r => r._id === review._id ? {...r, dislike: response.data.dislike, usersDisliked: response.data.usersDisliked} : r));
      }
    } catch (error) {
      console.error("Error liking review", error);
    }
  }

  const handleCommentSubmit = async (reviewId, productId) => {
    try {
      setErrors({})
      const author = JSON.parse(sessionStorage.getItem('user'))
      const response = await axios.post('http://localhost:3500/comment', { 
        body: newComment[reviewId],
        author: author._id,
        review: reviewId,
        product: productId
      });
      if(response.data !== null) {
        setNewComment({...newComment, [reviewId]: ''});
      }
      window.location.reload()
      // fetchComments()
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        commentError: "Invalid comment",
      }));
      console.error("Error adding comment", error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-[20px] font-sans">
      <div className="flex mb-[20px] rounded-[10px] overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.1)] h-[50vh] w-auto">
        <div className="w-[40%] h-full">
          <img src={getProductImageURL()} className="object-cover w-auto h-full mx-auto p-5" />
        </div>
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
        <div className="flex flex-col gap-y-5 h-fit">
          {
            reviews.map(review => (
              // Container
              <div key={review._id} className="h-fit rounded-lg shadow-md">
                {/* Top Container */}
                <div className="h-[20vh] flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-x-5 h-[100px] w-full">
                    {/* Left Container */}
                    <div className="flex">
                      {/* User Container */}
                      <div className="flex flex-col h-[100px] w-[100px]">
                        {/* User Profile Picture */}
                        <a href={`/user/${review.author._id}`}>
                          <img src={getUserImageURL(review)} alt="" className="w-full h-full rounded-full" />
                        </a>
                      </div>
                    </div>

                    {/* Middle Container */}
                    <div className="flex-1 h-full">
                      <div className="flex flex-col gap-y-2 h-full">
                        {/* Username */}
                        <p className="font-semibold">{review.author.username}</p>

                        {/* Review Body */}
                        <p className="text-lg text-gray-700 flex-1">{review.body}</p>
                      </div>
                    </div>
        
                    {/* Right Container */}
                    <div className="flex flex-col items-start justify-between ml-4 h-full">
                      {/* Star Ratings */}
                      <div className="mb-2">
                        <StarDisplay rating={review.rating} />
                      </div>
        
                      {/* Button Container */}
                      <div className="flex space-x-2">
                        {/* Like */}
                        <button 
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                          onClick={() => handleLike(review)}
                          disabled={review.usersLiked.includes(sessionStorage.getItem('user')) || !sessionStorage.getItem('user')}
                        >
                          Like {review.likes}
                        </button>
                        <span className="px-3 py-1 text-blue-500 font-bold">{review.like}</span>
                        {/* Dislike */}
                        <button 
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                          onClick={() => handleDislike(review)}
                          disabled={review.usersDisliked.includes(sessionStorage.getItem('user')) || !sessionStorage.getItem('user')}
                        >
                          Dislike {review.dislikes}
                        </button>
                        <span className="px-3 py-1 text-red-500 font-bold">{review.dislike}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Container */}
                <div className="p-2">
                  {/* Comment Button Container*/}
                  <div className="flex flex-row items-center cursor-pointer" 
                      onClick={() =>
                        setShowComments((prevState) => ({
                          ...prevState,
                          [review._id]: !prevState[review._id],
                        }))
                      }
                  >
                    <p className="font-light">{showComments[review._id] ? "Hide Comments" : "View Comments"}</p>
                    <RiArrowDropDownLine className="my-auto"/>
                  </div>

                  <div className={showComments[review._id] ? "flex flex-col pt-2" : "hidden"}>
                    {/* Comment Body and Form Container */}
                    {sessionStorage.getItem("user") ? (
                      <div className="flex flex-row gap-x-2 items-center">
                        <input
                          className={
                            newComment[review._id] && newComment[review._id].trim().length <=250 ? (
                              "rounded-md border border-gray-300 p-2 bg-green-300"
                            ) : (
                              "rounded-md border border-gray-300 p-2 bg-base"
                            )
                          }
                          placeholder="Write a comment..."
                          value={newComment[review._id] || ""}
                          onChange={(event) =>
                            setNewComment({
                              ...newComment,
                              [review._id]: event.target.value,
                            })
                          }
                        />
                        <button
                          className="rounded-md bg-blue-500 text-white py-2 px-4 cursor-pointer"
                          onClick={() => handleCommentSubmit(review._id, review.product)}
                        >
                          Submit
                        </button>
                        {Object.keys(errors).map((key) => (
                          <p key={key} className="text-red-500">
                            {errors[key]}
                          </p>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    {comments[review._id] ? (
                      comments[review._id].map((comment, index) => (
                        <div
                          key={index}
                          className="border border-gray-300 rounded-md p-4 mt-4 flex flex-col"
                        >
                          <p className="mb-0">
                            <strong>{comment.author.username}</strong>
                          </p>
                          <p>{comment.body}</p>
                        </div>
                      ))
                    ) : (
                      <p>No comments yet</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetailPage;
