import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { BiFilter } from "react-icons/bi"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import Product from "../assets/IPhone_14_Pro.jpg"
import { useNavigate } from "react-router-dom"

const ProductListing = () => {

  const navigate = useNavigate()

  const navigateProduct = () => {
    navigate("/product")
  }

  return (
    <div className="mx-2 md:mx-5">
      <div className="flex flex-row justify-between items-center p-2 border-b-[1px] border-solid border-borderColor h-[7vh]">
        {/* Results */}
        <p className="font-sans text-sm text-center"># Results</p>
        {/* Right Container */}
        <div className="flex flex-row items-center gap-x-2">
          {/* Sort Button */}
          <div className="flex flex-row items-center">
            <AiOutlineArrowDown />
            <AiOutlineArrowUp />
            <p className="font-sans text-sm text-center">Sort</p>
          </div>
          {/* Filter Button */}
          <div className="flex flex-row items-center">
            <BiFilter />
            <p className="font-sans text-sm text-center">Filter</p>
          </div>
        </div>
      </div>

      {/* Product Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 h-fit gap-5 my-5">
        {/* Product */}
        <div className="border border-solid border-borderColor rounded-md" onClick={navigateProduct} >
          {/* Image */}
          <div className="border-b-[1px] border-solid border-borderColor p-2">
            <img src={Product} alt="" className="h-auto w-1/2 mx-auto" />
          </div>
          {/* Title */}
          <p className="text-center text-sm">Apple IPhone 14 Pro</p>
          {/* Average Rating + (# of ratings) */}
          <div className="flex flex-row items-center justify-center h-fit">
            <BsStarFill size={12} />
            <BsStarHalf size={12} />
            <div>
              <p className="text-sm">(1,000)</p>
            </div>
          </div>
        </div>

        {/* Test */}
        <div className="border border-solid border-borderColor rounded-md">
          {/* Image */}
          <div className="border-b-[1px] border-solid border-borderColor p-2">
            <img src={Product} alt="" className="h-auto w-1/2 mx-auto" />
          </div>
          {/* Title */}
          <p className="text-center text-sm">Apple IPhone 14 Pro</p>
          {/* Average Rating + (# of ratings) */}
          <div className="flex flex-row items-center justify-center h-fit">
            <BsStarFill size={12} />
            <BsStarHalf size={12} />
            <div>
              <p className="text-sm">(1,000)</p>
            </div>
          </div>
        </div>

        <div className="border border-solid border-borderColor rounded-md">
          {/* Image */}
          <div className="border-b-[1px] border-solid border-borderColor p-2">
            <img src={Product} alt="" className="h-auto w-1/2 mx-auto" />
          </div>
          {/* Title */}
          <p className="text-center text-sm">Apple IPhone 14 Pro</p>
          {/* Average Rating + (# of ratings) */}
          <div className="flex flex-row items-center justify-center h-fit">
            <BsStarFill size={12} />
            <BsStarHalf size={12} />
            <div>
              <p className="text-sm">(1,000)</p>
            </div>
          </div>
        </div>

        <div className="border border-solid border-borderColor rounded-md">
          {/* Image */}
          <div className="border-b-[1px] border-solid border-borderColor p-2">
            <img src={Product} alt="" className="h-auto w-1/2 mx-auto" />
          </div>
          {/* Title */}
          <p className="text-center text-sm">Apple IPhone 14 Pro</p>
          {/* Average Rating + (# of ratings) */}
          <div className="flex flex-row items-center justify-center h-fit">
            <BsStarFill size={12} />
            <BsStarHalf size={12} />
            <div>
              <p className="text-sm">(1,000)</p>
            </div>
          </div>
        </div>

        <div className="border border-solid border-borderColor rounded-md">
          {/* Image */}
          <div className="border-b-[1px] border-solid border-borderColor p-2">
            <img src={Product} alt="" className="h-auto w-1/2 mx-auto" />
          </div>
          {/* Title */}
          <p className="text-center text-sm">Apple IPhone 14 Pro</p>
          {/* Average Rating + (# of ratings) */}
          <div className="flex flex-row items-center justify-center h-fit">
            <BsStarFill size={12} />
            <BsStarHalf size={12} />
            <div>
              <p className="text-sm">(1,000)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductListing