import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import { useAxios } from './hooks/useAxios';
import Footer from './components/Footer';

const App = () => {
  const [limit, setLimit] = useState(1);
  const [photosList, setphotosList] = useState([]);
  const { data }=useAxios("https://picsum.photos/v2/list?page=2&limit=100");
  const [isLoading, setisLoading] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
    setLimit(1);
  };

  const generateImages = () => {
    setisLoading(true);
    setphotosList(data.slice(0, limit))
  };

  const handleData = (e) => {
    if (Number(e.target.value) > 100) {
      setLimit(100);
    } else {
      setLimit(e.target.value);
    }
  };

  return (
    <div className='flex flex-col min-h-screen w-screen'>
      <Navbar />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className='flex justify-center items-center gap-6 w-full lg:p-10 p-5 bg-slate-100 lg:flex-row flex-col'
      >
        <input
          onChange={(e) => {
            handleData(e);
          }}
          type='number'
          name=''
          id='limit'
          value={limit}
          min='1'
          className='border-4 p-4 rounded-full text-2xl bg-white lg:w-1/2 w-full focus:outline-none focus:border focus:border-black focus:shadow-[-5px_-5px_0px_black]  border-black transition'
        />
        <button
          onClick={generateImages}
          className='bg-emerald-400 p-4 text-xl text-white font-bold rounded-full lg:w-1/7 w-3/4 cursor-pointer transition duration-200 ease-in-out shadow hover:shadow-[0px_15px_20px_rgba(46,229,157,0.4)] hover:bg-[#23c1c4] hover:text-white hover:-translate-y-1.5 active:-translate-y-0.5 transform'
        >
          {limit}x Clicks
        </button>
      </form>
      <Gallery data={photosList} isLoading={isLoading} setisLoading={setisLoading} />
      <Footer />
    </div>
  );
};

export default App;