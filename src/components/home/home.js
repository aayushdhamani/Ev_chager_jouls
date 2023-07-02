import React from 'react';
import "./home.css"
import threedvideo from "./esanimt.mp4"
import hometop from "./hometop.mp4"
import Pdf from '../document/home.pdf';
import {FaSolarPanel } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";

import { MdOutlineTimer } from "react-icons/md";
import { TbBatteryCharging2 } from "react-icons/tb";
 import { TbHourglassLow } from "react-icons/tb";
 import { BiSupport } from "react-icons/bi";
 import groupm from "./groupm.png"
 import playstore from "./playstore.png"
 import qrcode from "./qrcode.png"

function home() {
  return (
    <>
    <div  className="topbg">
    {/* <video autoPlay loop muted className="topbg"><source src={hometop} type="video/mp4" /> </video> */}

</div>

<div class="row" style={{}}>
<div className="container ">
    <div class="d-flex justify-content-center " style={{fontSize:"  14px"}}>
    <div class="text-center d-flex "> <h1 style={{fontWeight:"bolder",fontSize:"  60px", marginTop:'60px', fontFamily: 'Aleo'}}>Introducing <span style={{color:"#118615"}}> Eco</span>Spark </h1> 
    </div>
    </div>
    </div>
      <div class="col-md-6">
    
    <div class="d-flex justify-content-center " style={{fontSize:"  14px"}}>
    <div class="text-align flex-shrink-1 w-75 d-flex  "style={{fontSize:"  22px", marginTop:'130px'}}>Eco spark is an efficient & optimised EV charger used for residential and commercial application. It is designed in a way to provide great user experience and maximize the benefits for the user.
    
    </div>
    </div>
      <div class="container" style={{}}>
    <form className="d-flex" role="button" style={{ marginTop:'70px'}}>
             
    
              <a href = {Pdf} target = "_blank" button className="btn btn-outline-success " type="submit" style={{borderRadius:'35px', width:'160px',height:'40px',fontSize:'18px', marginLeft:'120px'}}>
                Brochure
              </a>

            
            </form>
    
  
    </div>
    </div>
      
      <div class="col-md-6">
    <div className="container">
    <div class="d-flex justify-content-center " style={{marginTop:"20px",fontSize:"  14px"}}>
   
     <video autoPlay loop muted className="bg-vid"><source src={threedvideo} type="video/mp4" /> </video>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container" style={{marginTop:'100px'}}>
      <p class="hd">What makes us better</p>
    <div class=" row no-gutters asda">
      
      
    <div class="col-md-6  align-self-start">

    <hv-charging-benefit class="">
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <TfiMobile style={{fontSize:'70px',color:''}}> </TfiMobile>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Connect Through</div>
                  <div class="bottom">Jouls Connect App</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">Connect EcoSpark through Jouls Connect App and control it remotely from anywhere in the world for seamless
                   experience at the ease of fingertips.</div>
                  </div>
                  </hv-charging-benefit>

                  <hv-charging-benefit class="">
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <TbBatteryCharging2 style={{fontSize:'70px'}}> </TbBatteryCharging2>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Dynamic Load Management</div>
                  <div class="bottom">With Balance Mode</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">EcoSpark features advanced power management, automatically adjusting the output power to optimize performance without risk of tripping the electrical system or battery damage.</div></div>
                  </hv-charging-benefit>

                  <hv-charging-benefit class="">
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <BiSupport style={{fontSize:'80px'}}> </BiSupport>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Resolve All Issue Quickly With </div>
                  <div class="bottom">10x Faster Tech Support</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">EcoSpark is consist of built in error and hardware failure detection system that notifies the user beforehand which results in faster error resolution.</div></div>
                  </hv-charging-benefit>
    </div>

    <div class="col-md-6  asda">

    <hv-charging-benefit>
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <MdOutlineTimer style={{fontSize:'80px'}}> </MdOutlineTimer>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Save More With Our</div>
                  <div class="bottom">Schedule mode</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">Save more by charging with TOD tariff, Just plug in the charger & schedule the time with schedule mode in the app and our charger will take care of charging at low cost tariff.</div>
                  </div>
                  </hv-charging-benefit>

                  <hv-charging-benefit>
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <TbHourglassLow style={{fontSize:'80px'}}> </TbHourglassLow>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Prolong Battery Life</div>
                  <div class="bottom">With Slow Mode</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">Our innovative slow mode is specifically engineered to take care of battery health. It intelligently adjust the charging power according to your battery.</div>
                  </div>
                  </hv-charging-benefit>

                  <hv-charging-benefit>
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <FaSolarPanel style={{fontSize:'80px'}}> </FaSolarPanel>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Solar Charging With</div>
                  <div class="bottom">Eco Mode</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">A step towards sustainable world, Charge you car with Solar power. EcoSpark is compatible for solar charging and can be easily integrated with all solar panels.</div>
                  </div>
                  </hv-charging-benefit>

      </div>
    </div>
    </div>


<div class='container  homebgdown'>
<div class="row" style={{marginTop:"100px", marginBottom:"100px"}}>
  <div class="col-md-5">
  <div className="container">
  <div class="d-flex justify-content-center " style={{fontSize:"  14px", marginTop:"85px"}}>
  <img src={groupm} alt="Bootstrap" width="80%" height="auto"/>
 
</div>
</div>
</div>
<div class="col-md-7">
<div className="container">

 
 <div class="d-flex justify-content-left allign-self-bottom " style={{  fontWeight:"bold",fontSize:"40px",marginTop:'90px', marginLeft:'20px',marginBottom:'30px', color:'#000' }}>
  
 <h1>Jouls Connect EV Charging App</h1>
 


</div>
<div class="d-flex justify-content-center " style={{  fontWeight:"bold",fontSize:"40px",marginTop:'30px', marginLeft:'10px',marginBottom:'40px', color:'#000' }}>
  <p  style={{fontSize:"17px", fontWeight:'lighter'}}>Introducing Jouls Connect, the state-of-the-art EV charging app designed to provide a seamless user experience with its exceptional user interface. Jouls Connect offers a host of features and functionalities that make it an ideal companion for electric vehicle owners.</p>
</div>
<div  class="d-flex justify-content-around">
  <img src={playstore} alt="" width="30%" height="25%" style={{marginTop:"30px"}} />
  <img src={qrcode} alt="" width="22%" height="22%" />
</div>
<div >
  
</div>

</div>
</div>
</div>
</div>
</>

)
}

export default home