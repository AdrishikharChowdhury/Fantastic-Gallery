import React from 'react'

const PicLoader = () => {
  return (
    <div className="flex flex-row gap-2 px-10 py-20 justify-center items-center">
        <div className="size-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="size-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="size-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  )
}

export default PicLoader