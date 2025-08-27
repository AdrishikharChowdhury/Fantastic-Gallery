import React from 'react'
import { faCamera } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <nav className='lg:h-25 h-20 text-black bg-slate-200 w-full flex lg:p-4 p-2 lg:text-4xl sm:text-xl text-md text-center font-light justify-center items-center lg:gap-10 gap-5'>
        <FontAwesomeIcon icon={faCamera} />
        <p>Fantastic Pictures & Here To Find Them</p>
    </nav>
  )
}

export default Navbar