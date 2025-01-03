import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500'>165, Katiyawa RD, <br/> Eppawala <br/> Anuradhapura, Sri Lanka</p>
          <p className='text-gray-500'>Tel: (94) 738-234 5674 <br/> Email: ecommers@gmail.com</p>
          <p className='text-xl font-semibold text-gray-600'>Careers at E-Commerce</p>
          <p className='text-gray-500'>Learn more anout our teams and job openings</p>
          <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white'>Explore Jobs</button>
          <NewsLetterBox/>
        </div>
      </div>
    </div>
  )
}

export default Contact
