import React from "react";
import "./testimonial.css";
import { Data } from "./data.jsx"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <section className="testimonial container section" id="testimonials"> 
      <h2 className="section__title"> What others have said</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper 
      className="testimonial__container"
      slidesPerView={1}
      grabCursor = {true}
      spaceBetween={24}
      pagination={{ 
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
 
      }}
      modules={[Pagination]}
      >
        {Data.map(({id, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key = {id}>
              <h3 className="testimonial__name"> {title}</h3>
              <p className="testimonial__description"> {description} </p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial;