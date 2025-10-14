import React from 'react'
import galleryPic from '../../assets/gallery.svg'

const Navbar = () => {
  return (
    <nav className='lg:h-25 h-20 text-white bg-gray-800 w-full flex lg:p-4 p-2 lg:text-2xl sm:text-xl text-md text-center font-light justify-center items-center lg:gap-5 gap-2'>
        <img src={galleryPic} alt="logo"
        className='lg:size-20 size-10' />
        <p className='font-semibold italic'>Fantastic Pictures & Here To Find Them</p>
    </nav>
  )
}

export default Navbar