import Navbar from "../layouts/Navbar.jsx"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import StarDisplay from "../components/StarDisplay"
import { useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const[item, setItem] = useState({});
  const[reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState({});
  const [comments, setComments] = useState({}); // Comments will be an object where each key is a reviewId and the value is an array of comments
  const navigate = useNavigate();

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
        console.log(response)
        setComments(response.data); // The response should be in the format {reviewId1: [comment1, comment2, ...], reviewId2: [...], ...}
      } catch (error) {
        console.error("Error fetching comments", error);
      }
    }
  
    fetchItem()
    fetchItemReviews()
    fetchComments()
  }, [id]);

  const handleReviewButton = () => {
    if(sessionStorage.getItem("user")) {
      navigate(`/review/${id}`);
    } else {
      navigate(`/login`);
    }
  }

  const getUserImageURL = (review) => {
    return "/users/" +  review.author + ".jpg"
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
      console.log('test')
      const author = JSON.parse(sessionStorage.getItem('user'))
      console.log( newComment[reviewId])
      const response = await axios.post('http://localhost:3500/comment', { 
        body: newComment[reviewId],
        author: author._id,
        review: reviewId,
        product: productId
      });
      console.log(response)
      setNewComment({...newComment, [reviewId]: ''});
      fetchComments()
    } catch (error) {
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
        <div className="h-[500px] overflow-y-auto">
          {
            reviews.map(review => (
              <div key={review._id} className="flex items-start justify-between bg-white p-6 rounded-lg shadow-md mb-4">
                {/* Left Container */}
                <div className="flex">
                  {/* User Container */}
                  {/* User Profile Picture */}
                  <a href={`/user/${review.author}`}>
                    <img src={getUserImageURL(review)} alt="" className="w-20 h-20 rounded-full mr-4" />
                  </a>
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

                  <div>
                    <h4>Comments:</h4>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <input 
                        style={{borderRadius: '5px', borderColor: '#ddd', marginBottom: '10px'}} 
                        placeholder="Write a comment..."
                        value={newComment[review._id] || ''}
                        onChange={event => setNewComment({...newComment, [review._id]: event.target.value})}
                      />
                      <button 
                        style={{borderRadius: '5px', backgroundColor: '#007BFF', color: 'white', padding: '10px', cursor: 'pointer'}}
                        onClick={() => handleCommentSubmit(review._id, review.product)}
                      >
                        Submit
                      </button>
                    </div>
                    {
                      comments[review._id] ? comments[review._id].map((comment, index) => (
                        <div key={index} style={{border: '1px solid #ddd', borderRadius: '5px', padding: '10px', marginTop: '10px'}}>
                          <p style={{marginBottom: '0'}}><strong>{console.log(comment.author.name)}</strong></p>
                          <p>{comment.body}</p>
                        </div>
                      )) : "No comments yet"
                    }
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
