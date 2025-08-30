import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import axios from 'axios'
import { motion } from 'motion/react'

const App = () => {

  const [limit, setlimit] = useState(1);
  const [data, setdata] = useState([])

  const submitHandler=(e)=>{
      e.preventDefault();
      console.log(limit);
      setlimit(1)
  }

  const generateImages= async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=2&limit=${limit}`)
    setdata(response.data);
    console.log(response.data);
  }
  

  return (
    <>
      <Navbar />
    <form onSubmit={(e)=>{
            submitHandler(e);
        }}
        className='flex justify-center items-center gap-6 w-full h-auto p-10 bg-slate-100 lg:flex-row flex-col'>
        <input onChange={(e)=>{
            if(Number(e.target.value)>100)
            {
              setlimit(100);
            }
            else{
              setlimit(e.target.value);
            }
        }} 
        type="number" name="" id="limit" 
        value={limit}
        min="1"
        className='border-4 p-4 rounded-full text-2xl bg-white lg:w-1/2 w-3/4'/>
        <motion.button 
        onClick={generateImages} 
        className='bg-emerald-400 p-4 text-xl text-white font-bold rounded-full lg:w-1/7 w-3/4 cursor-pointer'
        >
          {limit}x Clicks
        </motion.button>
    </form>
      <Gallery data={data} />
    </>
  )
}

export default App