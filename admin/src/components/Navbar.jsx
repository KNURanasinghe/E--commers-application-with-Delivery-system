import React from 'react'
import { assets } from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <img className='w-[max(5%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='px-5 py-2 text-xs text-white bg-gray-600 rounded-full sm:px-7 sm:py-2 sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
