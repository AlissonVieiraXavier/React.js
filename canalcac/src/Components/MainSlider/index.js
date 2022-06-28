import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import './mainslider.css';
import Image from '../../assets/img/croche.jpg';

const MainSlider = ()=>{
// eslint-disable-next-line
const mainGlide = new Glide(".main__glide"); // default options

 useEffect(() => {
    mainGlide.mount({
        autoplay: true,
        animationDuration:3000,
    });
    return () => mainGlide.destroy();
  }, [mainGlide]);

return (
  <div className={"main__glide"}>
    <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
               <img src={Image} alt="img"/>
         </li>
         <li className="glide__slide">

               <img src={Image} alt="img"/>
         </li>
         <li className="glide__slide">
               <img src={Image} alt="img"/>
         </li>
         <li className="glide__slide">
               <img src={Image} alt="img"/>
         </li>
      </ul>
  </div>
</div>
)
}
export default MainSlider;