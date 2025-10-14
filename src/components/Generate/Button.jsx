import React from 'react'

const Button = ({ onClick,limit }) => {
  return (
    <button
        onClick={onClick}
        className='bg-emerald-400 p-4 text-xl text-white font-bold rounded-full lg:w-1/7 w-3/4 cursor-pointer transition duration-200 ease-in-out shadow hover:shadow-[0px_15px_20px_rgba(46,229,157,0.4)] hover:bg-[#23c1c4] hover:text-white hover:-translate-y-1.5 active:-translate-y-0.5 transform'
    >
        {limit}x Clicks
    </button>
  )
}

export default Button