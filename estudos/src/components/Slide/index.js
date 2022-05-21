import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from './index.module.css'
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      arrows:false,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3><img  className={styles.img}  src={img1} alt="imagde"/></h3>
          </div>
          <div>
            <h3><img  className={styles.img}  src={img2} alt="imagde"/></h3>
          </div>
          <div>
            <h3><img  className={styles.img}  src={img3} alt="imagde"/></h3>
          </div>
          <div>
            <h3><img  className={styles.img}  src={img1} alt="imagde"/></h3>
          </div>
          <div>
            <h3><img  className={styles.img}  src={img2} alt="imagde"/></h3>
          </div>
        </Slider>
      </div>
    );
  }
}