import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3'>
      <p className='text-gary-500'>{text1} <span className='font-medium text-gray-700'>{text2}</span></p>
      <p className='w-8 sm:w-12 h-[1pc] sm:h-[2px] bg-gray-700 '></p>
    </div>
  )
}

export default Title
