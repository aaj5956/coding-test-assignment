import React, { useEffect, useState } from 'react';

import Carousel from 'components/Carousel';
import Loading from 'components/Loading';
import Options from 'components/Options';
import { ChoiceContext, DelayContext, PhotoContext} from 'contexts/Home';

const Home = () => {
  const [choice, setChoice] = useState('1');
  const [delay, setDelay] = useState('0');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/photos?id=${choice}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(({ data }) => {
        setPhotos(data);
        setTimeout(() => {
          setLoading(false);
        }, delay);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [choice, delay]);

  return (
    <div>
      <ChoiceContext.Provider value={{ choice, setChoice }}>
        <DelayContext.Provider value={{ delay, setDelay }}>
          <Options />
        </DelayContext.Provider>
      </ChoiceContext.Provider>
      <PhotoContext.Provider value={photos}>
        {loading ? <Loading /> : <Carousel /> }
      </PhotoContext.Provider>
    </div>
  )
};

export default Home;
