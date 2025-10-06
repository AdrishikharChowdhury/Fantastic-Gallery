import React from 'react'

const Greet = () => {
  return (
      <div className="bg-white max-w-80 min-h-80 rounded-lg shadow-2xl border-2">
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className="card__content flex flex-col p-5 gap-5 justify-center items-center w-full h-80">
          <p className='text-2xl'>Fantastic Gallery</p>
          <p className='text-lg break-words text-center'>Generate Pictures in a Single Click</p>
        </div>
      </div>

  )
}

export default Greet