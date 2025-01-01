import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'

const Collection = () => {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilters,setShowFilters] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const[category, setCategory] = useState([]);
  const[subCategory, setSubCategory] = useState([]);
  const[sortType, setSortType] = useState([]);

  const toggleCategory = (e) =>{
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }
  const toggleSubCategory = (e) =>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter= ()=>{
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item=> subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProducts = () => {
    let filterCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterCopy.sort((a,b)=>(a.price - b.price)))
        break;
      case 'high-low':
        setFilterProducts(filterCopy.sort((a,b)=>(b.price - a.price)))
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProducts(); 
  },[sortType])
  
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
              <input className='w-3 ' type="checkbox"  value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/* sub filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilters? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox"  value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* page content */}
      <div className='flex-1'>
        <div className='flex justify-between mb-4 text-base sm:text-2xl'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* right sort opt */}
          <select onChange={(e)=>setSortType(e.target.value)} className='px-2 text-sm border-2 border-gray-300'>
            <option value="relevent">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* product maps */}
        <div className='grid gap-4 gtrid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {
            filterProducts.map((item, index)=>(
              <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
