import  Youtube  from 'react-lazyload-youtube'

const AboutVideo = () => {

  return (
    <div className="m-bottom">
        <div className='container video-block'>
            <Youtube width="100%" height="474px" imgSize="maxresdefault" videoId="5lAK8bgGkaE"/>
        </div>
    </div>
  )
}

export default AboutVideo