import React from 'react'
import Button from './Button'
import Input from './Input'

const Generate = ({ onSubmit,onChange,limit,setLimit,generateImages }) => {
  return (
    <form
    onSubmit={onSubmit}
    className='flex justify-center items-center gap-6 w-full lg:p-10 p-5 lg:flex-row flex-col'
    >
    <Input limit={limit} onChange={onChange} setLimit={setLimit} />
    <Button onClick={generateImages} limit={limit} />
    </form>
  )
}

export default Generate