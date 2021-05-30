import {Router} from 'express';
import photosController from 'controllers';
import { BAD_REQUEST } from 'constants/error.types';

const photosRouter = Router();

photosRouter.get('/', async (req, res) => {
  const { query: { id }} = req;

  try {
    const list = await photosController(id);
    return res.json({ data: list});
  } catch(error) {
    if(error.type === BAD_REQUEST)
      return res.status(400).json(error);
    
    throw new error;
  }
});

export default photosRouter;