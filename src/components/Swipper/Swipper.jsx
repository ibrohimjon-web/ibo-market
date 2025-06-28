import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swipper.css';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpnMQ-aQyxLGD68dIAg-r2rtfsPAfUwjl2Q&s',
  'https://www.shutterstock.com/image-photo/man-selecting-fresh-vegetables-grocery-260nw-2521310723.jpg',
  'https://media.istockphoto.com/id/1157106624/photo/all-your-necessities-stored-in-one-place.jpg?s=612x612&w=0&k=20&c=fANV-CP9N_Dt5lVoKWiZdAch60-2IOeHEm_pnvgk348=',
  'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-2430285,resizemode-75,msid-99091239/industry/services/retail/mom-and-pop-store-day-why-kirana-will-survive-the-corporate-blitz.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSsNM_e61wZ9bCNh6l0UJAfdaw-zrAtm6ug&s',
  'https://plus.unsplash.com/premium_photo-1661407806034-4eaf2671322f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmclMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D',
];

const Swipper = () => {
  return (
    <div className='swipper-container'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{ enabled: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className='custom-swiper'
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className='swipper-image' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipper;
