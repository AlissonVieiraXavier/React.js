import React, { useEffect } from "react"
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import './mainslider.css';


const sliderConfiguration= {
  gap: 0,
  perView: 1,
  startAt: 0,
  autoplay:true,
  animationDuration:6000,
  type: "carousel",

};

const MainSlider = () => {
  const slider = new Glide('.glide', sliderConfiguration);

  useEffect(() => {
    return () => slider.mount()
  }, [slider])

  return (
    <div className="container_slide">
      {" "}
      <div className='glide'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <li className='glide__slide slider'>
                  <div className="div_slide1"> 
                  waka waka
                  </div>
            </li>
            <li className='glide__slide slider'>
                  <div className="div_slide2">
                  </div>
            </li>
            <li className='glide__slide slider'>
                  <div className="div_slide3"> 
                  </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainSlider;