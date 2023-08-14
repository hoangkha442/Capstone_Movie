import React, { useState } from 'react'
import Search from '../Search/Search'
import { useEffect } from 'react'
import { movieService } from '../../services/movieService'
import { Card } from 'antd';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { NavLink } from 'react-router-dom'

export default function BannerDesktop() {
    const [movieArr, setMovieArr] = useState([])
    useEffect(() => { 
    movieService
    .getBanner()
    .then((res) => { 
      // console.log('res: ', res);
      setMovieArr(res.data.content)
    })
    .catch((err) => { 
        console.log('err: ', err);
    })
  }, [])
  return (
    <section className='bg-banner bg-center bg-cover bg-no-repeat pb-10'>
        <div className="container-80">
          <Search/>
          <div id="banner" className='pt-16 overflow-hidden'>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            breakpoints={{
                400:{
                  slidesPerView:1,
                },
                639: {
                  slidesPerView: 2,
                },
                865:{
                  slidesPerView:3
                },
                1000:{
                  slidesPerView:4
                }
              }}
            navigation
            autoplay
            pagination={{ clickable: true }}
          >
            {movieArr.map((item,index) => { 
            return(
              <SwiperSlide key={index}>
                <NavLink to={`/detail/${item.maPhim}`}>
                <figure className='banner-item hover:before:left-[125%] relative overflow-hidden cursor-pointer'>
                    <img className='h-[400px] object-cover rounded' src={item.hinhAnh} alt={item.tenPhim} />
                    <figcaption className='overlay absolute left-0 bottom-0 w-full h-[100%] opacity-0 bg-overlay hover:opacity-100 transition-all'>
                      <div className='figcaption-text w-[80%] h-[30%]'>
                        <p className='text-[#dcf836] font-[600] text-lg uppercase'>{item.tenPhim}</p>
                        <p className='mt-2 font-bold'>⭐{item.danhGia} <span className='text-sm font-[500]'>/ 10</span></p>
                      </div>
                    </figcaption>
                </figure>
                </NavLink>
              </SwiperSlide>
            )
           })}
          </Swiper>
          </div>
        </div>
    </section>
  )
}
