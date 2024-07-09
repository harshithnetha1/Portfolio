import React from 'react';
import Card from 'react-bootstrap/Card';
import './CSS/intro.css';

export default function Intro() {
  return (
    <Card className="inform-card">
      <Card.Body>
        <Card.Title className="inform-title">BASIC DETAILS</Card.Title>
        <Card.Text>
          Hi
          <br/>
          I am <span style={{ fontSize: '18px' }}> Harshith Netha M</span>, currently working at Tata Consultancy Services (TCS) with two years of professional experience as a Front-End Developer. During my tenure at TCS, I have honed my skills in creating dynamic and responsive web applications. My technical expertise includes HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.js.
          <br/>
          In addition to my core competencies, I have a strong understanding of modern web development practices and UI/UX principles. I am adept at using state management libraries such as Redux and have experience in integrating RESTful APIs. My background in agile methodologies ensures that I can effectively collaborate with cross-functional teams and deliver high-quality software on time.
          <br/>
          I am passionate about continuous learning and often engage with the latest trends and technologies in the web development landscape. I have a keen interest in performance optimization, responsive design, and accessibility, aiming to create user-friendly and efficient applications.
          <br/>
          Beyond my professional work, I am an active participant in the developer community, contributing to open-source projects and attending industry conferences and meetups. I am always eager to take on new challenges and expand my skill set further.
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
