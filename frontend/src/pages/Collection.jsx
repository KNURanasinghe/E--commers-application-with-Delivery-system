import React, { useContext, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilters,setShowFilters] = useState(false);
  return (
    <div className='flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10'>
      
      {/* filters */}
      <div className='min-w-60'>
        <p  onClick={()=>setShowFilters(!showFilters)} className='flex items-center gap-2 my-2 text-xl cursor-pointer'>FILTERS</p>
        <img src={assets.dropdown_icon} className={`h-3 sm-hidden ${showFilters?'rotate-90': ''}`} alt="" />
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox"  value={'Men'}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Women'}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Kids'}/>Kids
            </p>
          </div>
        </div>
        {/* sub filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilters? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox"  value={'Topwear'}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Bottomwear'}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Winterwear'}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Collection
