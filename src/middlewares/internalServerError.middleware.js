import isArray from 'lodash/isArray';
import { InternalServerError } from 'models/response.model';

const internalServerErrorMiddleware = () => async (err, _req, res, _next) => {
  let message = '';

  if (isArray(err.error)) {
    message = err.error.map((e) => `${e.param}: ${e.msg}`).toString();
  } else {
    message = !err.error
      ? err.message
      : `${err.error.message} ${err.error.detail || ''}`;
  }

  return res.status(500).json(InternalServerError({ message }));
};

export default internalServerErrorMiddleware;
