import React from 'react'
import Slider from "react-slick"
import img1 from '../images/oculus.png'
import Image from 'next/image'


const SliderEquipment = (props) => {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
      return (
        <>
            <div className="slider-equip m-bottom">
                <Slider {...settings}>
                    <div>
                        <div className="container">
                            <div className="slider-equip__slide">
                                <div className="slider-equip__slide-cont">
                                    <div className="h2">
                                        Oculus Quest 2
                                    </div>
                                    <div className="slider-equip__slide-desc">
                                        Отличный шлем с плотностью пикселей 1832*1920 пикс. и частотой 90Гц. В комплекте идут удобные контролеры, без лишних проводов, позволяет свободно передвигаться.
                                    </div>
                                </div>
                                <div className="slider-equip__slide-img">
                                    <Image src={img1} quality={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="slider-equip__slide">
                                <div className="slider-equip__slide-cont">
                                    <div className="h2">
                                        Oculus Quest 2
                                    </div>
                                    <div className="slider-equip__slide-desc">
                                        Отличный шлем с плотностью пикселей 1832*1920 пикс. и частотой 90Гц. В комплекте идут удобные контролеры, без лишних проводов, позволяет свободно передвигаться.
                                    </div>
                                </div>
                                <div className="slider-equip__slide-img">
                                    <Image src={img1} quality={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                
            </div>
        </>
      )
}

export default SliderEquipment