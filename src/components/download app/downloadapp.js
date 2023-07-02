import React from 'react'
import './downloadapp.css';
import { FcFlashOn } from "react-icons/fc";
import groupm from './groupm.png'
import mobile from './finalmockup.png'
import playstore from "./playstore.png"
import qrcode from "./qrcode.png"


const downloadapp = () => {
  return (
    <div class="bg">
    <div className="container  " >
          <div class="row">
      <div class="col-md-6">
      <div className="container">
    <div class="d-flex justify-content-center mainheading " >
   
    
     Enhance your charging experience with Jouls Connect mobile app

      </div>
      <div class="textbox " >
     
      <ul>
    <li>
      <p class="text font-weight-light" >
      <FcFlashOn class="thundericon" />
       Personalize your charger.
       </p>
       </li>

       <li>  <p  class="text font-weight-light">
      <FcFlashOn  class="thundericon" />
       Different charging modes available.
       </p>
       </li>

       <li>
       <p  class="text font-weight-light">
      <FcFlashOn  class="thundericon" />
       Check charging history and logs.
       </p>
       </li>

       <li>
       <p class="text font-weight-light">
      <FcFlashOn  class="thundericon" />
       Connect with multiple EV's.
       </p>
       </li>

       <li>
       <p class="text font-weight-light">
      <FcFlashOn class="thundericon" />
       Resolve technical issues within app with single click.
       </p>
       </li>
    </ul>

    
  </div>   
    
  


    </div>
      </div>
      <div class="col-md-6" style={{padding:'0px'}}>
    <div className="container">
    <div class="d-flex justify-content-center " style={{fontSize:"  14px", marginTop:"35px" }}>
     <img src={mobile} alt="Bootstrap" width="80%" height="auto"/>
    </div>
    {/* <img src={mission} style={{width:'70%'}} alt="" /> */}
    </div>
    </div>
    
    </div>
    <div class='container'>
    <div class="row" style={{marginTop:"180px", marginBottom:"100px"}}>
      <div class="col-md-6">
      <div className="container">
      <div class="d-flex justify-content-center " style={{fontSize:"  14px", marginTop:"0px"}}>
      <img src={groupm} alt="Bootstrap" width="90%" height="auto"/>
     
    </div>
    </div>
    </div>
    <div class="col-md-6" style={{marginTop:'30px'}}>
    <div className="container">
    
     
     <div class="d-flex justify-content-left " style={{  fontWeight:"bold",fontSize:"40px",marginTop:'00px', marginLeft:'20px',marginBottom:'30px', color:'#000' }}>
      
     <h1>Jouls Connect EV Charging App</h1>
     
   
    </div>
    <div class="d-flex justify-content-center " style={{  fontWeight:"bold",fontSize:"40px",marginTop:'30px', marginLeft:'10px',marginBottom:'40px', color:'#000' }}>
      <p  style={{fontSize:"17px", fontWeight:'lighter'}}>Introducing Jouls Connect, the state-of-the-art EV charging app designed to provide a seamless user experience with its exceptional user interface. Jouls Connect offers a host of features and functionalities that make it an ideal companion for electric vehicle owners.</p>
    </div>
    <div class="d-flex justify-content-around">
  <img src={playstore} alt="" width="30%" height="25%" style={{marginTop:"30px"}} />
  <img src={qrcode} alt="" width="25%" height="25%" />
</div>
   
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default downloadapp
