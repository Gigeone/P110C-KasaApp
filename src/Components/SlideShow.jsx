import React ,{useState} from 'react'
import './SlideShow.scss'

const SlideShow = ({pictures}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };
  
    const goToPrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
    };
  
    return (
        <div className='slideshow-container'>
        {pictures.length > 1 && (
          <div className='carousel-arrows'>
            <button onClick={goToPrevSlide}>&#10094;</button>
            <button onClick={goToNextSlide}>&#10095;</button>
          </div>
        )}
        <div className='carousel'>
          {pictures.map((picture, index) => (
            <div
              key={index}
              style={{  display: index === currentSlide ? 'block' : 'none' }}
              onClick={() => goToSlide(index)}
            >
              <img src={picture} alt={`Photo ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        {pictures.length > 1 && (
          <div>
            {pictures.map((_, index) => (
              <span
                key={index}
                style={{ cursor: 'pointer', margin: '0 5px', backgroundColor: index === currentSlide ? 'black' : 'transparent', borderRadius: '50%', width: '10px', height: '10px', display: 'inline-block' }}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
        <div className="counter">{currentSlide + 1}/{pictures.length}</div>
      </div>
      
    );
}

export default SlideShow