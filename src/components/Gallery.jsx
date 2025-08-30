import React from 'react'
import { motion } from 'motion/react'

const Gallery = (props) => {
  
  return (
    <div className='bg-slate-50 w-full min-h-screen h-max flex flex-wrap justify-center items-start lg:gap-5 gap-1 lg:py-10 py-5'>
        {props.data.map((elem,idx)=>{
          return <motion.div 
          key={idx} 
          className='bg-white sm:p-6 p-3 flex flex-col justify-center items-center gap-5 shadow-2xl lg:mx-4 lg:my-2 mx-2 my-2 hover:border-2'
          whileHover={{
            y:-10
          }}
          whileTap={{
            scale: 0.9
          }}>
            <img className='sm:h-90 sm:w-80 h-50 w-50 flex justify-center items-center text-center text-xl font-extralight' src={elem.download_url} alt={`Image Not loaded visit The Source.`} />
            <p className='lg:text-xl sm:text-lg text-sm font-bold font-mono'>
              &copy;:{elem.author}</p>
            <p className="lg:text-lg sm:text-sm text-xs font-light">Source: <a href={elem.url} className='hover:underline' target="_blank" rel="noopener noreferrer">Click Me</a></p>
          </motion.div>
        })}
    </div>
  )
}

export default Gallery