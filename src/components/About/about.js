import React from 'react'
import './about.css'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import img from './group1.jpeg'
import rrecl from './rrecl.jpeg'
import msme from './msme.jpeg'
import patentimage from './patentimage.jpeg'
import prto from './prto.jpeg'
import vector from './Vector.png'
import mission from './mission1.png'
import techkriti from './techkriti.jpg'
import Model3 from './Model3';
const about = () => {
  return (
    <> 

    <div >
    <img src={img} style={{width:'100%', marginBottom:"100px", marginTop:"0px"}} alt="" />
    </div>
    <div className="container">
    <div class="d-flex justify-content-center" style={{fontSize:"  14px"}}>
    <div class="p-2  p-3 d-flex "style={{fontSize:"  16px"}}>Welcome to Jouls, where we are dedicated to developing and innovating cutting-edge Eco-smart technology to promote sustainable living. Our primary focus is on designing and manufacturing highly efficient and optimized Electric Vehicle (EV) chargers specifically tailored for residential use. Through continuous innovation, our ultimate goal is to enhance the EV charging experience for our users while encouraging sustainable practices.
    
    </div>
        {/* <p></p> */}
    </div>
    </div>
     <div className="container">
    <div class="d-flex justify-content-center" style={{fontSize:"  14px"}}>
    <div class="p-2  p-3 d-flex "style={{fontSize:"  16px"}}>At our core, we are driven by a passion for creating innovative solutions that inspire individuals to embrace sustainability. We firmly believe that by providing a user-friendly and versatile EV charger, we can offer a sustainable lifestyle solution that aligns with our company's values.
    
    </div>
        {/* <p></p> */}
    </div>
    </div>
    <div className="container">
    <div class="d-flex justify-content-center" style={{fontSize:"  14px", marginBottom:"80px"}}>
    <div class="p-2  p-3 d-flex "style={{fontSize:"  16px"}}>Our technology is meticulously crafted to deliver an exceptional charging experience for EV users. Not only does our charger optimize energy usage, but it also collects valuable data that can be utilized by energy entities to establish a robust infrastructure for EV charging. By contributing to the development of such infrastructure, we aim to accelerate the transition to electric vehicles and drive positive change in the transportation sector.
    
    </div>
        {/* <p></p> */}
    </div>
    
    {/* <img src={cover} alt="Bootstrap" width="100%" height="auto"/> */}


    </div>
   
    <div class="container" >
   
    
    <div class="cont">
    <div class="row">
      <div class="col-md-6">
      <div className="container" style={{marginTop:"40px"}}>
    <div class="" style={{fontSize:"  14px"}}>
    <div class="p-2  p-3  "style={{fontSize:"  50px",fontWeight:"bold",marginLeft:'0px'}}>Our Mission
    
    </div>
    
        
    </div>
    
  


    </div>
      <div className="container" style={{paddingLeft:'20px'}}>
    <div class="d-flex justify-content-center " style={{fontSize:"  14px"}}>
    <div class="p-2   d-flex "style={{fontSize:"  18px", marginTop:'50px'}}>Our mission is to make sustainable transportation a reality by offering efficient and optimized EV chargers. We're dedicated to speeding up the transition towards electric vehicles, making it easier for everyone to embrace greener transportation options. Through innovation and advanced technology, we strive to create a sustainable future for generations to come.
    
    
    </div>
      
    </div>
    
  


    </div>
      </div>
      <div class="col-md-6">
    <div className="container">
    <div class="d-flex justify-content-center " style={{fontSize:"  14px"}}>
     <img src={mission} alt="Bootstrap" width="90%" height="auto" style={{paddingTop:'20%'}}/>
    </div>
    </div>
    </div>
    
    </div>
    <div class="row" >
      <div class="col-md-3">
    <div className="container"  >
    <div class="d-flex  justify-content-center "></div>
    </div>
 
    </div>
    <div class="col-md-9">
    <div className="container" >
    <div class="d-flex justify-content-center " style={{fontSize:"  14px"}}>
    <div class="p-2  p-3 d-flex  "style={{fontSize:"  18px", marginTop:'25px'}}>
      
      
      Join us on this exciting journey as we shape the future of sustainable living through cutting-edge technology. Together, we can make a significant impact on the environment and inspire a sustainable mindset in individuals and communities around the world.
    </div>
      
      </div>
    
    </div>
        
    </div>
    
  


    </div>

    </div>

    </div>












    <div className="container" style={{paddingTop:'100px'}}>
    <div class="" style={{fontSize:"  14px"}}>
    <div class="p-2  p-3 d-flex text-center"style={{fontSize:"  50px",fontWeight:"bold",
  }}>Our Journey...
    
    </div>
        {/* <p></p> */}
    </div>
    
  


    </div>
    

<Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="25 August 2022"
    style={{ color: '#e86971' }}
  >
    <h3></h3>
    <h4>Foundation</h4>
    <p>
      With a mission in mind to accelerate sustainable transportation, foster an eco-friendly lifestyle, and make electric vehicle charging efficient and optimized, "Jouls Ecotech" was founded on August 25th, 2022.
    </p>
  
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="26 November 2022"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}></h3>
    <h4 style={{ color: '#61b8ff' }}>RRECL</h4>
    <p>
     Won hackathon organised by RRECL. 
    </p>
    <img src={rrecl} alt="Bootstrap" width="350px" height="220" />
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="8 December 2022"
    dateInnerStyle={{ background: 'rgb(150, 150, 150)' , color: '#000' }}
    
  >
    <h3></h3>
    <h4>MSME</h4>
    <p>
      Exhibited in MSME VDP, Gurugram.

    </p>
    <img src={msme} alt="Bootstrap" width="350px" height="220" />
   
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="24 February 2023"
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3></h3>
    <h4>PATENT</h4>
    <p>
      Patent for design and trademark filed.
    </p>
    <img src={patentimage} alt="Bootstrap" width="350px" height="220" />
  </TimelineItem>

  <TimelineItem
    key="002"
    dateText="13 March 2023"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}></h3>
    <h4 style={{ color: '#61b8ff' }}>PROTOTYPE</h4>
    <p>
    First working prototype developed.
    </p>
    <img src={prto} alt="Bootstrap" width="320px" height="220" />
  </TimelineItem>

  <TimelineItem
    key="001"
    dateText="26 March 2023"
    style={{ color: '#e86971' }}
  > 
    <h3></h3>
    <h4>TECH KRITI</h4>
    <p>
    Second position in Pitch Premier League, Tech Kriti, IIT KANPUR. 
    </p>
    <img src={techkriti} alt="Bootstrap" width="320px" height="220" />
  </TimelineItem>
</Timeline>
<Model3/>
    

    
</>
  )
}

export default about
