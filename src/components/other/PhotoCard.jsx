import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import PicLoader from '../Loaders/PicLoader';

const PhotoCard = ({ download_url, author, url, index }) => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsPhotoLoaded(true);
  };

  return (
    <Motion.div
      className='bg-white sm:p-6 p-3 flex flex-col justify-center items-center gap-5 shadow-2xl lg:mx-4 lg:my-2 mx-2 my-2 hover:border-2 cursor-pointer'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      {!isPhotoLoaded && <PicLoader />}
      <img
        className='sm:h-90 sm:w-80 h-50 w-50 flex justify-center items-center text-center text-xl font-extralight'
        src={download_url}
        alt={`Image Not loaded visit The Source.`}
        onLoad={handleImageLoad}
        style={{ display: isPhotoLoaded ? 'block' : 'none' }}
      />
      <p className='lg:text-xl sm:text-lg text-sm font-bold font-mono'>
        &copy;:{author}
      </p>
      <p className='lg:text-lg sm:text-sm text-xs font-light'>
        Source:{' '}
        <a
          href={url}
          className='hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Click Me
        </a>
      </p>
    </Motion.div>
  );
};

export default PhotoCard;