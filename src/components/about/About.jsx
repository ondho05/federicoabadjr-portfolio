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
            <p className="about__description">I'm Federico Abad Jr. a passionate and driven entry-level software developer eager to embark on a journey of continuous learning and growth in the dynamic world of technology. With a solid foundation in programming languages such as HTML, CSS, Php, and JavaScript, coupled with hands-on experience in building projects during my education, I am excited to apply my skills to real-world challenges.</p> 
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