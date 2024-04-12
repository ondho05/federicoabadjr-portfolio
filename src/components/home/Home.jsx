import React from 'react';
import "./home.css";
import Me from "../../assets/grad.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home"> 
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Federico Ortiz Abad Jr.</h1>
        <span className="home__education">I'm an Entry Level - Junior Web  Developer</span>

        <HeaderSocials />

        <a href="#contact" className='btn'>Hire Me</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home