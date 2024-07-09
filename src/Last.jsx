import React from 'react';
import './CSS/Footer.css'; // Assuming you have a CSS file for the footer styles


export default function Last() {
  return (
    <footer className="footer">
      <div className="container container-fluid">
        <div className="row footer__links">
          <div className="col footer__col">
          <h3  style={{color:'white',position:'relative', fontSize: '50px'}}><span className="italic-text" >my</span> Social Connects</h3>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a className="footer__link-item" href="https://www.linkedin.com/in/harshith-netha-68b33b261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="https://docs.google.com/forms/d/e/1FAIpQLSeUoipKJowEj0LeUlDb_7s_XgKuZn9yk4WRQy4F_iwCyrNcBg/viewform?usp=sf_link">Gmail</a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="https://github.com/harshithnetha1" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="https://www.instagram.com/harshithnetha/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  )
}

