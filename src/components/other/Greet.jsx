import React from 'react';
import styled from 'styled-components';
import cardPic from '../../assets/cardpic.jpg'

const Greet = () => {
  return (
    <StyledWrapper className='w-full items-center flex justify-center'>
      <div className="card">
        <img src={cardPic} alt=""  className='h-full w-full'/>
        <div className="card__content flex flex-col justify-center gap-5 p-15">
          <p className="card__title text-[#333] text-3xl">Fantastic Gallery</p>
          <p className="card__description text-[#777] text-xl">A website to generate and display a dynamic gallery of random images fetched from the Picsum Photos API.</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 500px;
    height: 400px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .card {
      width: 90%;
      height: auto;
    }

    .card__content {
      padding: 10px;
    }

    .card__title {
      font-size: 1.5rem;
    }

    .card__description {
      font-size: 1rem;
    }
  }
`;

export default Greet;
