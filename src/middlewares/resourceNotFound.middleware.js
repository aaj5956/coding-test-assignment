import { ResourceNotFound } from 'models/response.model';

const resourceNotfoundMiddleware = () => async (_err, _req, res, _next) => res.status(404).json(ResourceNotFound());

export default resourceNotfoundMiddleware;
