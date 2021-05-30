import React, { useContext, useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

import { PhotoContext} from 'contexts/Home';
import 'styles/carousel.css';

const Carousel = () => {
  const photos = useContext(PhotoContext);
  const [current, setCurrent] = useState(0);

  const length = photos ? photos.length : 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }

  return (
    <section className='carousel'>
      <BsFillCaretLeftFill className='left-arrow' onClick={prevSlide} />
      <BsFillCaretRightFill className='right-arrow' onClick={nextSlide} />
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
    </section>
  );
};

export default Carousel;
