import ComSlider from './Slider';
import img1 from '../images/our_photos/1.webp'
import img2 from '../images/our_photos/2.webp'
import img3 from '../images/our_photos/3.webp'
import img4 from '../images/our_photos/4.webp'
import img5 from '../images/our_photos/5.webp'
import img6 from '../images/our_photos/6.webp'
import img7 from '../images/our_photos/7.webp'
import img8 from '../images/our_photos/8.webp'
import img9 from '../images/our_photos/9.webp'

// * TODO: Зарефакторить код в цикл
const Photos = () => {
  return (
    <>
      <div id="photos">
      <div className="container photos-block">
            <div className="h2">Наши фотографии</div>
        </div>
        <ComSlider img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} img7={img7} img8={img8} img9={img9} />
      </div>
    </>
  )
}

export default Photos