import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import infra1 from '../assets/images/infra1.webp';
import infra2 from '../assets/images/infra2.webp';
import infra3 from '../assets/images/infra3.webp';
import infra4 from '../assets/images/infra4.webp';
import infra5 from '../assets/images/infra5.webp';
import Carousel from '../components/Carousel';

const images = [infra1, infra2, infra3, infra4, infra5];

const cardContent = [
  {
    heading: '13',
    text: 'Board rooms for Placement Interviews',
  },
  {
    heading: '3',
    text: 'Committee Room',
  },
  {
    heading: '1',
    text: 'Video Conference Room',
  },
  {
    heading: '150 Persons',
    text: 'Seminar Hall Capacity',
  },
  {
    heading: '250 Persons',
    text: 'Senate Hall Capacity',
  },
  {
    heading: '250 Persons',
    text: 'Bose Auditorium Capacity',
  },
  {
    heading: '3000 Persons',
    text: 'Convocation Hall Capacity',
  },
];

const Infrastructure = () => {
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    const imageHeight = carouselContainerRef.current.firstChild.offsetHeight;
    carouselContainerRef.current.style.height = `${imageHeight}px`;
  }, []);

  return (
    <>
      <Header bgOn={true} />
      <h3 className="heading">Infrastructure</h3>
      <div className="w-4/5 mx-auto relative mb-10 text-sm text-justify sm:text-xl py-4 font-sans">
        {/* <img src={infra1} alt=" infrastructure image 1  " className='mb-10' /> */}
        <div className=" mb-4" ref={carouselContainerRef}>
          <Carousel images={images} interval={3000} />
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-5 gap-4">
          {cardContent.map((curr, index) => (
            <div key={index} className="bg-Department-card-bg rounded-xl p-4 max-w-300px h-40 flex flex-col justify-center items-center">
              <h4 className="text-orange font-bold mb-3">{curr.heading}</h4>
              <p className="text-sm text-center">{curr.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
