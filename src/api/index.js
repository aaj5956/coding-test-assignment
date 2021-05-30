import { Router } from 'express';
import photosRouter from 'routes';

const router = Router();

router.use('/photos', photosRouter);

export default router;