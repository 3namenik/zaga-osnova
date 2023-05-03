import  Youtube  from 'react-lazyload-youtube'
import Slider from "react-slick"

const VideoBlock = () => {
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
          arrows: false,
          centerMode: false,
          centerPadding: 0,
        }
      },
  ]}

    // const onPlayerReady = (event) => {
    //   // access to player in all event handlers via event.target
    //   event.target.pauseVideo();
    // }
  
    // const opts = {
    //   height: '474px',
    //   width: '100%',
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 0,
    //   },
    // };


  return (
    <>
      <div id="videoReviews" className="sliderNew">
        <div className="container">
          <div className="h2">Отзывы наших партнеров</div>
        </div>
        {/* <YouTube videoId="uBQMH3vyvRM" opts={opts} onReady={onPlayerReady} /> */}
        <Slider {...settings}>
          <div className='video-block'>
            <Youtube width="100%" height="474px" imgSize="maxresdefault" videoId="5lAK8bgGkaE"/>
          </div>
          <div className='video-block'>
            <Youtube width="100%" height="474px" imgSize="maxresdefault" videoId="uBQMH3vyvRM"/>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default VideoBlock