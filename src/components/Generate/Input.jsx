import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const Input = ({ limit, setLimit,onChange }) => {

    const increment=()=>{
        setLimit(limit=>Number(limit)+1);
    }

    const decrement=()=>{
        setLimit(limit=>limit-1);
    }

    const reset=()=>{
        setLimit(1);
    }

  return (
    <div className="sm:w-100 w-50 flex flex-col p-auto h-auto">
        <div className="flex justify-center items-center">
            <button 
            onClick={increment}
            className='cursor-pointer rounded-tl-2xl p-2 bg-gray-800 text-white w-1/4 hover:bg-gray-900 transition-all duration-100 disabled:bg-gray-500 active:scale-90'
            disabled={limit>=100}
            ><FontAwesomeIcon icon={faPlus} /></button>
            <input 
            type="number"
            value={limit}
            onChange={onChange}
            className="
                no-arrows
                w-full
                text-center
                p-2
                bg-gray-700
                text-white
                focus:outline-none
                focus:border-none
                border-none
                outline-none
            "
            min="1"
            />
            <button 
            onClick={decrement}
            disabled={limit<=1}
            className='w-1/4 cursor-pointer rounded-tr-2xl p-2 bg-gray-800 text-white hover:bg-gray-900 transition-all duration-100 disabled:bg-gray-500 active:scale-90'>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>
        <button 
        onClick={reset}
        disabled={limit==1}
        className='cursor-pointer p-2 rounded-b-2xl shadow-2xl bg-gray-800 text-white hover:bg-gray-900 transition-all duration-100 disabled:bg-gray-500 active:scale-90'>
            <FontAwesomeIcon icon={faArrowsRotate} /></button>
    </div>
  )
}

export default Input