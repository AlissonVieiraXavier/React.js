import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import styles from './index.module.css'

export default function SimpleSlider({img1,img2,img3}){
    
    const settings = {
        infinite: true,
        speed: 1000,
        arrows:false,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <div>
        <Slider {...settings}>
          <div>
            <h3>Lorem</h3>
          </div>
          <div>
            <h3>Lorem</h3>
          </div>
          <div>
            <h3>Lorem</h3>
          </div>
          <div>
            <h3>Lorem</h3>
          </div>
          <div>
            <h3>Lorem</h3>
          </div>
        </Slider>
      </div>
    )
}