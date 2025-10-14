import React, { useState } from 'react';
import Navbar from './Navbar';
import Gallery from './Gallery';
import { useAxios } from '../../hooks/useAxios';
import Footer from './Footer';
import Button from '../Generate/Button';
import Generate from '../Generate/Generate';

const Home = () => {
  const [limit, setLimit] = useState(1);
  const [photosList, setphotosList] = useState([]);
  const { data }=useAxios("https://picsum.photos/v2/list?page=2&limit=100");
  const [isLoading, setisLoading] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
  };

  const generateImages = () => {
    setisLoading(true);
    setphotosList(data.slice(0, limit))
    setLimit(1);
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
      <Generate 
      onSubmit={(e) => {
          submitHandler(e);
      }}  
      onChange={(e) => {
          handleData(e);
      }}
      limit={limit}
      generateImages={generateImages}
      setLimit={setLimit}
      />
      <Gallery data={photosList} isLoading={isLoading} setisLoading={setisLoading} />
      <Footer />
    </div>
  );
};

export default Home;