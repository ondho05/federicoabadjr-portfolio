import React from 'react';

const AboutBox = () => {
  return (
    <div className="about__boxes grid"> 
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">2</h3>
                <span className="about__subtitle">Project Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">3671</h3>
                <span className="about__subtitle">Cup of Coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">2</h3>
                <span className="about__subtitle">Satisfied Clients</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">1</h3>
                <span className="about__subtitle">Certification</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox