import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
  const {products, currency} = useContext(ShopContext);
  return (
    <div className='pt-16 border-t'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <div>
        {
          products.slice(1,4).map((item, index)=>(
            <div key={index} className='flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between'>
              <div className='flex items-start gap-6 text-sm'>
                
              </div>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
