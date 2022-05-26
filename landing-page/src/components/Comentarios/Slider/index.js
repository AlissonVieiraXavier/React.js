import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from './index.module.css';
import {FaQuoteLeft} from 'react-icons/fa';
import {FaQuoteRight} from 'react-icons/fa';

export default function SimpleSlider(){
    
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
          <div className={styles.div}>
            <p className={styles.p}><i className={styles.i_left}><FaQuoteLeft/></i>Lorem ining essentially <br></br>
            unchanged.
            the release of Letraset sheets containing <br></br>Lorem Ipsum passages <i className={styles.i_right}><FaQuoteRight/></i></p>
          </div>
          <div className={styles.div} >
          <p className={styles.p}><i className={styles.i_left}><FaQuoteLeft/></i>Lorem ining essentially <br></br>
            unchanged. 
            the release of Letraset sheets containing <br></br>Lorem Ipsum passages <i className={styles.i_right}><FaQuoteRight/></i></p>
          </div>
          <div className={styles.div}>
          <p className={styles.p}><i className={styles.i_left}><FaQuoteLeft/></i>Lorem ining essentially <br></br>
            unchanged.
            the release of Letraset sheets containing <br></br>Lorem Ipsum passages <i className={styles.i_right}><FaQuoteRight/></i></p>
          </div>
        </Slider>
      </div>
    )
}