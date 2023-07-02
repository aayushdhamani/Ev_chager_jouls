import React, { useState, useEffect } from "react";
import photo7 from "./star.jpeg";
import photo8 from "./dust.jpeg";
import { BsArrowUpRight } from "react-icons/bs";
import { BsCircleHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import pizza from './highway.jpeg';

const Carousel = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prevCard) => (prevCard + 1) % 3); // Assuming there are 3 cards
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const sample = () => {
    console.log("hehehe");
    navigate("/blogpage");
  };
  const sample1 = () => {
    console.log("hehehe");
    navigate("/blogpage1");
  };
  const sample2 = () => {
    console.log("hehehe");
    navigate("/blogpage2");
  };
  return (
    <div
      id="carouselExample "
      className="carousel slide  "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className={activeCard === 0 ? "active" : ""}
          aria-current="true"
          aria-label="Slide 1"
          style={{ backgroundColor: "black" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          className={activeCard === 1 ? "active" : ""}
          aria-label="Slide 2"
          style={{ backgroundColor: "black" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          className={activeCard === 2 ? "active" : ""}
          aria-label="Slide 3"
          style={{ backgroundColor: "black" }}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item   ${activeCard === 0 ? "active" : ""}`}>
          <div class=" dsa shadow card " style={{ width: "40rem" }}>
           
            <img src={pizza} class="card-img-top" alt="..." />
            <div class=" card-body ">
              <h5 class="card-title d-flex justify-content-between">
              Electric vehicles: An on-ramp to sustainable mobility
              </h5>
          
              <p class="card-text">
              Zero-emissions goals and technology advancements drive automakers and consumers to accelerate the shift to EVs.
              </p>
              <a href="https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/sustainable-mobility">Read more</a>
              {/* <p class="card-text d-flex justify-content-start ">
                <BsCircleHalf fontSize={"30px"} />{" "}
                <div className="container">aayush gupta </div>
              </p> */}
            </div>
          </div>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${activeCard === 1 ? "active" : ""}`}>
            <div class=" dsa shadow card " style={{ width: "40rem" }}>
              <img src={photo8} class="card-img-top" alt="..." />
              <div class=" card-body ">
                <h5 class="card-title d-flex justify-content-between">
                Electric vehicles: Powering the future of sustainable mobility in India’s business ecosystem
                </h5>
                <p class="card-text">
                The world is getting urbanised at a rampant pace, with the global urban population estimated to grow by 65 million annually. 
                </p>
                <a href="
                  https://timesofindia.indiatimes.com/blogs/voices/electric-vehicles-powering-the-future-of-sustainable-mobility-in-indias-business-ecosystem/">Read more</a>
                {/* <p class="card-text d-flex justify-content-start ">
                  <BsCircleHalf fontSize={"30px"} />{" "}
                  <div className="container"> </div>
                </p> */}
              </div>
            </div>
          </div>
          <div className="carousel-inner">
          <div className={`carousel-item ${activeCard === 2 ? "active" : ""}`}>
            <div class=" dsa shadow card " style={{ width: "40rem" }}>
              <img src={photo7} class="card-img-top" alt="..." />
              <div class=" card-body ">
                <h5 class="card-title d-flex justify-content-between">
                Role of EVs in India’s Sustainable Mobility Journey
                </h5>
                <p class="card-text">
                Over the last 2 years, the sale of electric vehicles has picked up pace in India, with this year’s sale already surpassing that of last year’s by over 80%. 
                </p>
                <a href="https://www.financialexpress.com/express-mobility/role-of-evs-in-indias-sustainable-mobility-journey/2661369/">Read more</a>
                {/* <p class="card-text d-flex justify-content-start ">
                  <BsCircleHalf fontSize={"30px"} />{" "}
                  <div className="container">aayush gupta </div>
                </p> */}
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button> */}
        {/* <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span               
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;