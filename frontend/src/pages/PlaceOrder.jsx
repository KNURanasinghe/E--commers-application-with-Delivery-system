import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col justify-between min-h-0 gap-4 pt-5 sm:flex-row sm:pt-1[80vh] border-t'>
        {/* left side col */}
      <div className='flex flex-col w-full gap-4 sm:max-w-[480px]'>
        <div className='my-3 text-xl sm:text-2xl'>
        <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
        <input type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      <input type="email" placeholder='E-mail address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      <input type="text" placeholder='Steat' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      <div className='flex gap-3'>
        <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      <div className='flex gap-3'>
        <input type="number" placeholder='Zip code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      <input type="number" placeholder='Phone ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      {/* right side item */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 p-2 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400':''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>

            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 p-2 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400':''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>

            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 p-2 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400':''}`}></p>
              <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full mt-8 text-end'>
            <button onClick={()=>navigate('/orders')} className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
