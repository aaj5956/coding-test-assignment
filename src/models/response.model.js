import { BAD_REQUEST, UNAUTHORIZED, RESOURCE_NOT_FOUND, INTERNAL_SERVER_ERROR } from 'constants/error.types';

export const ResponseModel = ({ code, type, error }) => ({
  code,
  type,
  error,
});

export const BadRequest = ({
  code: inputCode,
  message = 'Bad request',
  extras,
}) => ResponseModel({ code: `error.bad-request.${inputCode}`, type: BAD_REQUEST, error: { message, ...extras } });

export const Unauthorized = ({
  message = 'Unauthorized',
  extras,
}) => ResponseModel({
  code: 'error.unauthorized',
  type: UNAUTHORIZED,
  error: { message, ...extras },
});

export const ResourceNotFound = ({
  message = 'Not found',
  extras,
}) => ResponseModel({
  code: 'error.resource-not-found',
  type: RESOURCE_NOT_FOUND,
  error: { message, ...extras },
});

export const InternalServerError = ({
  message = 'Internal server error',
  extras,
}) => ResponseModel({
  code: 'error.internal-server',
  type: INTERNAL_SERVER_ERROR,
  error: { message, ...extras },
});