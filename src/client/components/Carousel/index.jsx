import React, { useContext, useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import Typography from '@material-ui/core/Typography';

import { PhotoContext} from 'contexts/Home';
import 'styles/carousel.css';

const Carousel = () => {
  const photos = useContext(PhotoContext);
  const [current, setCurrent] = useState(0);

  const length = photos && photos !== 'error' ? photos.length : 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(photos) || photos.length <= 0) {
    return (
      <section className='error'>
        <div className='error-card' >
          <BiErrorCircle className='error-icon' />
          <Typography className='error-text' >
            {' '}Please select a valid option
          </Typography>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className='row'>
        <BsFillCaretLeftFill className='icon-button' onClick={prevSlide} />
        <div className=' image-wrapper'> 
          {photos.map((slide, index) => (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide} className='image' />
              )}
            </div>
          ))}
        </div>
        <BsFillCaretRightFill className='icon-button' onClick={nextSlide} />
      </div>
    </section>
  );
};

export default Carousel;
