import React from "react";


const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/sun-z/" 
            className="home__social-icon" target="__blank">
            <i className = "uil uil-linkedin"></i>
            </a>

            <a href="https://www.instagram.com/zsunny._/" 
            className="home__social-icon" target="__blank">
            <i className = "uil uil-instagram"></i>
            </a>

            <a href="https://github.com/sunnyz2004/" 
            className="home__social-icon" target="__blank">
            <i className = "uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social;