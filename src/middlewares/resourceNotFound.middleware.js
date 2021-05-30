import { resourceNotFound } from 'models/response.model';

const resourceNotfoundMiddleware = () => async (_err, _req, res, _next) => res.status(404).json(resourceNotFound({ message }));

export default resourceNotfoundMiddleware;
