import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/caroro.png";
import Image3 from "../../assets/avatar-3.svg";

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image1,
    title: "Prof. Roseclaremath A. Caroro, DIT",
    subtitle: "MU CCS Faculty (College Dean)",
    contact: "+63 88 521 0367",
    comment:
      "is the College Dean of the College of Computer Studies and the Program Chairman of the Computer Science Program of Misamis University, Ozamiz City, Philippines. She handles information technology and computer science courses such as data structures, programming languages, software engineering, and discrete mathematics. She also works as a part-time professor in the university's Graduate School. Her research interests include data mining, NLP, and educational management.",
  },
  {
    id: 2,
    image: Image1,
    title: "Prof. Florence Jean B. Talirongan, DIT",
    subtitle: "MU CCS Faculty (OJT Coordinator)",
    contact: "+63 909 688 8590",
    comment:
      "is the College OJT Coordinator for College of Computer Studies.",
  },
  {
    id: 3,
    image: Image3,
    title: "3/Engr. Marlon Miguel T. Alforque ",
    subtitle: "MU Maritime Faculty (Laboratory In-Charge)",
    contact: "+63 948 341 8847",
    comment:
      "Good luck! to your journey 👍.",
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials container section"> 
      <h2 className="section_title">References</h2>

      <Swiper className="testimonials__container grid"
          modules={[ Pagination ]}
          spaceBetween={30} 
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}>
        {data.map(({id, image, title, subtitle, contact, comment}) => { return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className='testimonials__title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span> <br/>
              <span className='subtitle'>{contact}</span> 
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials