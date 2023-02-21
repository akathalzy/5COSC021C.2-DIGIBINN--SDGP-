import React from 'react'

const Button = () => {
  return (
    <button type='button' className={'py-2 px-8 bg-blue-500 hover:bg-blue-700 font-poppins font-medium text-[12px] text-white outline-none rounded-full ${styles} mt-8 mb-8'}>
      Get Started
    </button>
  )
}

export default Button