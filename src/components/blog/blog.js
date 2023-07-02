import React from 'react'
import './blog.css'
import { BsArrowUpRight } from "react-icons/bs";
import { BsCircleHalf } from "react-icons/bs";
import Carousel from './Carousel.js';
import photo7 from './star.jpeg';
import { useNavigate } from "react-router-dom";
import burger from './bggone.jpeg';
import pasta from './bggtwo.jpeg';


// rafc  



const Blog = () => {
  const navigate = useNavigate();
  const sample=()=>{
    console.log("hehehe");
    navigate("/blogpage")
  }
  const sample1=()=>{
    console.log("hehehe");
    navigate("/blogpage1")
  }
  const sample2=()=>{
    console.log("hehehe");
    navigate("/blogpage2")
  }
  return (
    <>
    <div style={{backgroundColor:""}}>
    <div className='header align-item-center justify-content-center'>
        <div className='headerTitles'>
            <div className='headerTitleSm' style={{color:''}}>Uncover the world of EVs, sustainable mobility, and solar power <br />through our informative blogs. Stay updated on EV technology, charging <br />solutions and sustainability trends for a greener future.</div>
            <div className='headerTitleLg'>Discover the world of EVs</div>
        </div>

     
    </div>

  

     <div className='searchBox'>
      <input type="text" className="searchText" placeholder=' Search' />
      <a href="#" className='searchBtn'>
        <i className='fas fa-search  '></i>
      </a>

      <div class=" dropdown">
  <button class="ass  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div> 

<div className='container d-flex justify-content-between '>
      {/* <div class=" dsa shadow card " style={{width: "75rem"}} onClick={sample}>
  <img src={photo7} class="card-img-top" alt="..."/>
  <div class=" card-body ">
    <h5 class="card-title d-flex justify-content-between">Card title <BsArrowUpRight /></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text d-flex justify-content-start "><BsCircleHalf fontSize={"30px"}/> <div className='container'>aayush gupta </div></p>
  </div>
</div> */}
{/* <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class=" dsa shadow card " style={{width: "40rem"}} onClick={sample}>
  <img src={photo7} class="card-img-top" alt="..."/>
  <div class=" card-body ">
    <h5 class="card-title d-flex justify-content-between">Card title <BsArrowUpRight /></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text d-flex justify-content-start "><BsCircleHalf fontSize={"30px"}/> <div className='container'>aayush gupta </div></p>
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class=" dsa shadow card " style={{width: "40rem"}} onClick={sample}>
  <img src={photo7} class="card-img-top" alt="..."/>
  <div class=" card-body ">
    <h5 class="card-title d-flex justify-content-between">Card title <BsArrowUpRight /></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text d-flex justify-content-start "><BsCircleHalf fontSize={"30px"}/> <div className='container'> </div></p>
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class=" dsa shadow card " style={{width: "40rem"}} onClick={sample}>
  <img src={photo7} class="card-img-top" alt="..."/>
  <div class=" card-body ">
    <h5 class="card-title d-flex justify-content-between">Card title <BsArrowUpRight /></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text d-flex justify-content-start "><BsCircleHalf fontSize={"30px"}/> <div className='container'>aayush gupta </div></p>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
<Carousel/>
<div className="container  justify-content-between">
<div class=" joji shadow card mb-3 " style={{maxWidth: "540px"}} >
  <div class="row g-0" >
    <div class="col-md-4" style={{height:'280px'}}>
      <img src={burger} class="img-fluid rounded-start" alt="..." style={{height:'100%',padding:'0px'}}/>
    </div>
    <div class="  col-md-8">
      <div class=" card-body" style={{}}>
        <h5 class="card-title d-flex justify-content-between">Making India EV ready</h5>
        <p class="card-text">EESL recently announced ramping up EV charging infrastructure in the country by setting up 2,000 EV charging facilities by March 2021. </p>
        <a href="https://etn.news/interviews/making-india-ev-ready-1-1">Read more</a>
        {/* <p class="card-text d-flex justify-content-start "><BsCircleHalf fontSize={"30px"}/> <div className='container'>aayush gupta </div></p> */}
        <p class="card-text"><small class="text-body-secondary"></small></p>
      </div>
    </div>
  </div>
</div>
<div class=" joji1 shadow card mb-3 " style={{maxWidth: "540px"}} >
  <div class="row g-0">
    <div class="col-md-4"  style={{height:'290px'}}>
      <img src={pasta} class="img-fluid rounded-start" alt="..." style={{height:'85%',padding:'18px'}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between">Electric four-wheelers: Steering into the next phase of sustainable transportation</h5>
        <p class="card-text">The global automotive industry is on the edge of disruption. Four technology-driven trends — electrification, shared mobility, connectivity, and autonomous driving—are leading the automotive industry to this disruption.</p>
        <a href="https://etn.news/e-mobility-blogs/electric-four-wheelers-steering-into-the-next-phase-of-sustainable-transportation">Read more</a>
        {/* <p class="card-text d-flex justify-content-start "><BsCircleHalf fontSize={"30px"}/> <div className='container'>aayush gupta </div></p> */}
        <p class="card-text"><small class="text-body-secondary"></small></p>
      </div>
    </div>
  </div>
</div>
</div>


   
</div>










</div>


</>

   
  
    
  
  
   
   
   
   
   
)
}

   
      
 

      
export default Blog