import Slider from "react-slick";
import style from './style.module.css';
import Image from 'next/image';

const Reviews = () => {
    const title = "Что о нас думают люди";
    const imgs = [
        [
            "/reviews/2gis/1.png"
        ],
        [
            "/reviews/2gis/2.png"
        ],
        [
            "/reviews/2gis/3.png"
        ],
        [
            "/reviews/2gis/4.png"
        ],
        [
            "/reviews/2gis/5.png"
        ],
        [
            "/reviews/2gis/6.png"
        ],
        [
            "/reviews/2gis/7.png"
        ],
        [
            "/reviews/2gis/8.png"
        ],
        [
            "/reviews/2gis/9.png"
        ],
        [
            "/reviews/2gis/10.png"
        ],
        [
            "/reviews/2gis/11.png"
        ],
        [
            "/reviews/2gis/12.png"
        ],
        [
            "/reviews/2gis/13.png"
        ],
        [
            "/reviews/yandex/1.png"
        ],
        [
            "/reviews/yandex/2.png"
        ],
        [
            "/reviews/yandex/3.png"
        ],
        [
            "/reviews/yandex/4.png"
        ],
        [
            "/reviews/yandex/5.png"
        ],
        [
            "/reviews/yandex/6.png"
        ],
        [
            "/reviews/yandex/7.png"
        ],
        [
            "/reviews/yandex/8.png"
        ],
        [
            "/reviews/yandex/9.png"
        ],
        [
            "/reviews/yandex/10.png"
        ],
        [
            "/reviews/yandex/11.png"
        ],
        [
            "/reviews/yandex/12.png"
        ],
        [
            "/reviews/yandex/13.png"
        ],
        [
            "/reviews/yandex/14.png"
        ],
        [
            "/reviews/yandex/15.png"
        ],
        [
            "/reviews/yandex/16.png"
        ],
        [
            "/reviews/yandex/17.png"
        ],
        [
            "/reviews/yandex/18.png"
        ],
        [
            "/reviews/yandex/19.png"
        ],
        [
            "/reviews/yandex/20.png"
        ],
        [
            "/reviews/yandex/21.png"
        ],
        [
            "/reviews/yandex/22.png"
        ],
        [
            "/reviews/yandex/23.png"
        ],
        [
            "/reviews/yandex/24.png"
        ],
        [
            "/reviews/yandex/25.png"
        ],
        [
            "/reviews/yandex/26.png"
        ],
        [
            "/reviews/yandex/27.png"
        ],
        [
            "/reviews/yandex/28.png"
        ],
        [
            "/reviews/yandex/29.png"
        ],
        [
            "/reviews/yandex/30.png"
        ],
        [
            "/reviews/yandex/31.png"
        ],
        [
            "/reviews/yandex/32.png"
        ],
        [
            "/reviews/yandex/33.png"
        ],
        [
            "/reviews/yandex/34.png"
        ],
        [
            "/reviews/yandex/35.png"
        ],
        [
            "/reviews/yandex/36.png"
        ],
        [
            "/reviews/yandex/37.png"
        ],
        [
            "/reviews/yandex/38.png"
        ],
        [
            "/reviews/yandex/39.png"
        ],
        [
            "/reviews/yandex/40.png"
        ],
        [
            "/reviews/yandex/41.png"
        ],
        [
            "/reviews/yandex/42.png"
        ],
        [
            "/reviews/yandex/43.png"
        ],
        [
            "/reviews/yandex/44.png"
        ],
        [
            "/reviews/yandex/45.png"
        ],
        [
            "/reviews/yandex/46.png"
        ],
        [
            "/reviews/yandex/47.png"
        ],
        [
            "/reviews/yandex/48.png"
        ],
        [
            "/reviews/yandex/49.png"
        ],
        [
            "/reviews/yandex/50.png"
        ],
        [
            "/reviews/yandex/51.png"
        ],
        [
            "/reviews/yandex/52.png"
        ],
        [
            "/reviews/yandex/53.png"
        ],
        [
            "/reviews/yandex/54.png"
        ],
        [
            "/reviews/yandex/55.png"
        ],
        [
            "/reviews/yandex/56.png"
        ],
        [
            "/reviews/yandex/57.png"
        ],
        [
            "/reviews/yandex/58.png"
        ],
        [
            "/reviews/yandex/59.png"
        ],
        [
            "/reviews/yandex/60.png"
        ],
        [
            "/reviews/yandex/61.png"
        ],
        [
            "/reviews/yandex/62.png"
        ],
        [
            "/reviews/yandex/63.png"
        ],
        [
            "/reviews/yandex/64.png"
        ],
        [
            "/reviews/yandex/65.png"
        ],
        [
            "/reviews/yandex/66.png"
        ],
        [
            "/reviews/yandex/67.png"
        ],
        [
            "/reviews/yandex/68.png"
        ],
        [
            "/reviews/yandex/69.png"
        ],
        [
            "/reviews/yandex/70.png"
        ],
        [
            "/reviews/yandex/71.png"
        ],
        [
            "/reviews/yandex/72.png"
        ],
        [
            "/reviews/yandex/73.png"
        ],
        [
            "/reviews/yandex/74.png"
        ],
        [
            "/reviews/yandex/75.png"
        ],
    ];

    const settings = {
        // dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        className: "center",
        centerPadding: "20px",
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // infinite: true,
                    // dots: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: true,
                    // dots: true,
                    arrows: true,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <div id="reviews">
            <div className="container photos-block">
                <div className="h2">Что думают о нас люди</div>
            
                <div className="reviews_items">
                    {/* <div className="reviews_gradient"></div> */}
                    <Slider {...settings}>
                        {
                            imgs.map((img) => (
                                <div className="reviews__item">
                                    <img src={img} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;