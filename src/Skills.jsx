import React from 'react'
import Skillset from './Skillset'
import Last from './Last'
import Education from './Education'




export default function Skills() {
    
  return (
    <>
    <div className="developer-text">
        <br className="mobile-break" />
        <span className="italic-text" style={{color:'white',position:'relative', fontSize: '50px'}}>the Resume</span>
        <br className="mobile-break" />
        <span style={{color:'white',padding:'20px', fontSize:'30px'}}>
    I have been a front end developer for the past two years, working on various projects.
     I am currently adding MERN full stack skills to my toolkit and have completed several personal projects.
      Additionally, I have Python skills and aspire to pursue a career in data science
      </span>

      <br className="mobile-break" />
      <br className="mobile-break" />
      <h3  className='label' style={{color:'white',position:'relative', fontSize: '50px'}}><span className="italic-text" >my</span> Skills</h3>
      </div>
      <div>
        <Skillset/>
      </div>
      <br className="mobile-break" />
      <div  className='developer-text'>
      <h3  style={{color:'white',position:'relative', fontSize: '50px'}}><span className="italic-text" >my</span> Experience</h3>
      <span style={{color:'white',padding:'20px', fontSize:'30px'}}>
      With a robust two-year background in front-end development, I have successfully contributed to various projects, showcasing my expertise in creating dynamic and user-friendly web applications. My journey as a developer has been marked by a dedication to continuous learning and skill enhancement.
      </span>
      <div className='developer-text'>
      <h3  style={{color:'white',position:'relative', fontSize: '50px'}}><span className="italic-text" >my</span> Education</h3>
      <Education/>
      

      

      </div>
      <Last/>

      </div>
     
      </>
  )
}



 
