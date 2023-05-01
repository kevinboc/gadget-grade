import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import {ReactComponent as Logo} from '../assets/logo.svg'

const Header = () => {
    return (
    <div className=''>
      <header className='bg-background h-[10vh] flex flex-row justify-between items-start px-2 md:px-5'>
        <AiOutlineMenu className="text-white h-[25px] w-auto mt-auto mb-auto pr-2 flex md:hidden" />
        <Logo className='h-[25px] md:h-[40px] w-auto mt-auto mb-auto' />
        <input type='text' placeholder='Search Gadget' key='' className='flex-auto mt-auto mb-auto mx-4 px-4 h-[25px] md:h-[40px] hidden md:flex' />
        <div className='flex mt-auto mb-auto'>
          <AiOutlineSearch className='text-white h-[25px] md:h-[40px] w-auto pr-2'/>
          <button className='font-sans font-bold text-white mt-auto mb-auto px-2 hidden md:flex'>LOG IN</button>
          <button className='font-sans font-bold text-white mt-auto mb-auto pl-2 hidden md:flex'>SIGN UP</button>
        </div>
      </header>
    </div>
  )
}

export default Header