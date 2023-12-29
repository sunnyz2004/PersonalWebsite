import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container"> 

        <div className="footer__social">
        <a href="https://www.linkedin.com/in/sun-z/" 
            className="footer__social-link" 
            target="__blank">
            <i className = "bx bxl-linkedin"></i>
            </a>

            <a href="https://www.instagram.com/zsunny._/" 
            className="footer__social-link" 
            target="__blank">
            <i className = "bx bxl-instagram"></i>
            </a>

            <a href="https://github.com/sunnyz2004/" 
            className="footer__social-link" 
            target="__blank">
            <i className = "bx bxl-github"></i>
            </a>
        </div>
        <span className="footer__copyright">
            &#169; Sunny Zhang, 2024
        </span>
            </div>
        </footer>
    )
}

export default  Footer