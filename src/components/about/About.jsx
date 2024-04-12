import React from 'react';
import "./about.css";
import Image from "../../assets/abadvector.png";
import AboutBox from './AboutBox';
import ExampleDoc from "../../assets/Resume.pdf";

const About = () => {
  return (
    <section className="about container section" id='about'> 
      <h2 className="section__title">About Me</h2>
      
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Federico Abad Jr, a junior web developer from Ozamiz City, Misamis Occidental. I have 2 years of experience in web site design and building and customization, but I want to enhance my skill in this career path.</p> 
            <a href={ExampleDoc} className="btn" download="Federico_Resume" target='_blank'>
              Download CV
              </a>
          </div>

          <div className="about__skills grid"> 
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">65%</span> 
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">65%</span> 
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span> 
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About