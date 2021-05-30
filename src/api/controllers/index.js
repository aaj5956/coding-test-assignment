import { BadRequest } from 'models/response.model';
import getPhotos from 'services';

const photosController = async (id) => {
  if(!['1','2','3'].includes(id))
    throw BadRequest({ code: 'invalid-photos-id', message: 'Invalid id for photos'});

  return getPhotos(id);
};

export default photosController;