import React from "react";
import "./about.css";

const About = () => {
    const observer = new IntersectionObserver ((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
            else {
                entry.target.classList.remove('show')
            }

        })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))

    return (
        <section className="about section" id="about"> 
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">你好, Welcome!</span>
            <div className="about__img"></div>
            <div className="about__container container grid">


                <div className="about__data">
                <div className="about__info grid">
            <div className="about__box ">
            <i class='bx bx-sun'> </i>
                <h3 className="about__title">Be optimistic</h3>
                <span className="about__subtitle"></span>
            </div>

            <div className="about__box">
            <i class='bx bx-key'></i>
                <h3 className="about__title">Resilience is key</h3>
                <span className="about__subtitle"></span>
            </div>

            <div className="about__box">
                <i class='bx bx-heart'></i>
                <h3 className="about__title">Embrace the journey</h3>
                <span className="about__subtitle"></span>
            </div>
        </div>
                    <p className="about__description"> 
                    Hey there, seems like you've stumbled upon my little corner of the web. I'm glad you're here! My name is Sunny, a UI/UX designer intern and QA Manager intern in parallel in Toronto. 
                    This is my personal site, a creative outlet that is all me - simple, organic, raw 
                    and unadulterated illustration of myself, my published works and achievements composed over the years. Go ahead. Explore around, break a few things while you're at it and hopefully in the process get learn a little bit more about me.
                    </p>


                </div>
            </div>
        </section>
    )
 }

 export default About;