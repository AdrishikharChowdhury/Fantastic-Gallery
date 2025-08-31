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
        className='border-4 p-4 rounded-full text-2xl bg-white lg:w-1/2 w-3/4 focus:outline-none focus:border focus:border-black focus:shadow-[-5px_-5px_0px_black]  border-black transition'/>
        <button 
        onClick={generateImages} 
        className='bg-emerald-400 p-4 text-xl text-white font-bold rounded-full lg:w-1/7 w-3/4 cursor-pointer transition duration-200 ease-in-out shadow hover:shadow-[0px_15px_20px_rgba(46,229,157,0.4)] hover:bg-[#23c1c4] hover:text-white hover:-translate-y-1.5 active:-translate-y-0.5 transform'
        >
          {limit}x Clicks
        </button>
    </form>
      <Gallery data={data} />
    </>
  )
}

export default App