import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 m-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-25' alt="" />
                <p className='w-full text-gray-600 md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio recusandae incidunt nihil provident delectus praesentium, ape quos doloribus vitae?</p>
            </div>
            <div>
                <p className='mb-5 text-xl font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+94-132-465-789</li>
                    <li>contact@ecommerceweb.com</li>
                </ul>
            </div>
        </div>
    <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ e-commerceweb.com - All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer