// Modules
import React from 'react'
import Slider from "react-slick"
import Youtube  from 'react-lazyload-youtube';

// Styles
import style from './style.module.css';

const MassMedia = () => {
    const title = "Мы в СМИ";
    const videoData = [
        [
            'cdMjmja8XvE',
            'Интервью с владельцем арены ZAGA-GAME в г. Псков',
            ''
        ],
        [
            'uBpzZr63QZc',
            'Финал зимнего масштабного турнира ZAGA-LEAGUE',
            ''
        ],
        [
            'nuvmLNLkJfs',
            'ZAGA-GAME арена в г. Улан-Удэ',
            ''
        ],
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        className: 'game-lib-sl',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
    }


    return (
        <div id="mass_media">
            <div className='container'>
                <div className={style.mass_media_container}>
                    <div className={style.reviews_title}>
                        <div className='h2'>
                            { title }
                        </div>
                    </div>
                        <div className="gameLib-sliders">
                            <Slider {...settings}>

                                {
                                    videoData.map((videoCode) => (
                                        <div className={style.mass_media_item}>
                                            <div>
                                                <Youtube width="100%" height="280px" imgSize="maxresdefault" videoId={ videoCode[0] }/>
                                            </div>
                                            <div className={style.mass_media_text}>
                                                <div className={style.mass_media_text_title}>
                                                    { videoCode[1] }
                                                </div>
                                                <div className={style.mass_media_text_desc}>
                                                    { videoCode[2] }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </Slider>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default MassMedia;