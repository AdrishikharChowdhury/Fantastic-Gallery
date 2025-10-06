import React, { useEffect } from 'react';
import PhotoCard from './PhotoCard';
import Greet from './Greet';
import Loader from './Loader';

const Gallery = ({ data,setisLoading,isLoading }) => {

  useEffect(() => {
    if (isLoading) 
    {
        const timeoutId = setTimeout(() => {
        setisLoading(false);
        }, 1500);
        return () => clearTimeout(timeoutId);
    }
    }, [isLoading, setisLoading]);

  return (
    <div className='flex-grow bg-slate-50 w-full flex flex-wrap justify-center items-center lg:gap-5 gap-1 lg:py-10 py-5'>
      {isLoading ? <Loader /> 
      : 
      (data.length > 0 ? (
        data.map((elem, idx) => (
          <PhotoCard
            key={idx}
            download_url={elem.download_url}
            author={elem.author}
            url={elem.url}
            index={idx}
          />
        ))
      ) : (
        <Greet />
      )
      )}
    </div>
  );
};

export default Gallery;