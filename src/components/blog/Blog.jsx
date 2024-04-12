import React from 'react';
import "./blog.css";
import Image1 from "../../assets/mr.png"; 
import Image2 from "../../assets/kyutiks.png"; 
import Image3 from "../../assets/aruba.png";

const Blog = () => {
  return (
        <section className="blog container section" id="blog"> 
          <h2 className="section__title">Projects</h2>

          <div className="blog__container grid">
            <div className="blog__card">
              <div className="blog__thumb">
                <a href="#"><span className="blog__category">Inventory</span></a> 
                <a href="https://305diner.shop/"><img src={Image1} alt="" className="blog__img" /></a>
              </div> 
              <div className="blog__details">
                <h3 className="blog__title">Mr. 305 Food Corner Inventory System</h3>
                  <div className="blog__meta">
                    <span>22 December, 2023</span>
                    <span className="blog__dot">.</span>
                    <span>Federico</span>
                  </div>
              </div>
            </div>
            
            <div className="blog__card">
              <div className="blog__thumb">
                <a href="#"><span className="blog__category">Business</span></a> 
                <a href="https://kyutiksnailandbeauty.com/"><img src={Image2} alt="" className="blog__img" /></a>
              </div>
              <div className="blog__details">
                <h3 className="blog__title">Kyutiks Nail and Beauty</h3>
                  <div className="blog__meta">
                    <span>01 December, 2023</span>
                    <span className="blog__dot">.</span>
                    <span>Federico</span>
                  </div>
              </div>
            </div>

            <div className="blog__card">
              <div className="blog__thumb">
                <a href="#"><span className="blog__category">Travel</span></a> 
                <a href="#"><img src={Image3} alt="" className="blog__img" /></a>
              </div> 
              <div className="blog__details">
                <h3 className="blog__title">Love for Aruba</h3>
                  <div className="blog__meta">
                    <span>22 May, 2023</span>
                    <span className="blog__dot">.</span>
                    <span>Federico</span>
                  </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Blog