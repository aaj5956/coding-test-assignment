import shuffle from 'fisher-yates-shuffle';
import { catsList, sharksList } from 'constants/photos';

const getPhotos = async (id) => {
  const mappings = {
    '1': catsList,
    '2': sharksList,
    '3': shuffle([...catsList, ...sharksList])
  };

  return mappings[id];
};

export default getPhotos;