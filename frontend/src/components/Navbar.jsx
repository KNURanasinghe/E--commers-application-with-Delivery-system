import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../assets/cart_icon.png'
import Logo from '../assets/logo.png'
import Profile from '../assets/profile_icon.png'
import Search from '../assets/search_icon.png'
import Menu from '../assets/menu_icon.png'
import DropDown from '../assets/dropdown_icon.png'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={Logo} className='w-10' alt="" />

      <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>

        <NavLink to='/'className='flex flex-col items-center gap-1'>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection'className='flex flex-col items-center gap-1'>
        <p>COLLECTION</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about'className='flex flex-col items-center gap-1'>
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact'className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img src={Search} alt="" className='w-5 cursor-pointer' />

        <div className='relative group'>
          <img className='w-5 cursor-pointer' src={Profile} alt="" />
          <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
            <div className='flex flex-col gap-2 px-5 py-3 rounded w-36 bg-slate-100 text-slate-500'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img className='w-5 min-w-5' src={Cart} alt="" />
          <p className='absolute right-[-6px] bottom-[-2px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img onClick={()=> setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={Menu} alt="" />
      </div>
      {/*side menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
          <img className='h-3 rotate-90' src={DropDown} alt="" />
          <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
