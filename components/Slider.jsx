import Image from 'next/image'
import React from 'react'
import Slider from "react-slick"


const ComSlider = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        className: 'center',
        centerPadding: '20%',
        responsive: [
          {
              breakpoint: 766,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows: false
              }
          },
          {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
                centerPadding: '0px'
            }
        },
      ]
      }
      return (
        <Slider {...settings}>
          <div>
            <Image src={props.img1} />
          </div>
          <div>
            <Image src={props.img2} />
          </div>
          <div>
            <Image src={props.img3} />
          </div>
          <div>
            <Image src={props.img4} />
          </div>
          <div>
            <Image src={props.img5} />
          </div>
          <div>
            <Image src={props.img6} />
          </div>
          <div>
            <Image src={props.img7} />
          </div>
          <div>
            <Image src={props.img8} />
          </div>
          <div>
            <Image src={props.img9} />
          </div>
        </Slider>
      )
}

export default ComSlider