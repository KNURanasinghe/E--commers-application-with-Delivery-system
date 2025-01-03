import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='pt-8 text-2xl text-center border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero optio aliquam aspernatur. Rem error maiores aliquam natus commodi assumenda quod temporibus aliquid minima ipsum perspiciatis praesentium iste consectetur, dolores rerum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti vero ipsum eos voluptatibus ipsam tempora voluptate quidem explicabo dolor architecto, inventore nihil nulla recusandae sequi quod tenetur reprehenderit quos repellendus!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, cum eveniet pariatur laudantium maxime, porro asperiores officia ab expedita eos repudiandae dolorum commodi amet eum praesentium deserunt excepturi minus doloremque.</p>
        </div>
      </div>
      <div className='py-4 text-4xl'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 py-8 border px10 md:px-16 sm:py-20 '>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatum, molestias repellendus, </p>
        </div>
        <div className='flex flex-col gap-5 py-8 border px10 md:px-16 sm:py-20 '>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatum, molestias repellendus, </p>
        </div>
        <div className='flex flex-col gap-5 py-8 border px10 md:px-16 sm:py-20 '>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatum, molestias repellendus, </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
