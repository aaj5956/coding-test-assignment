import { BAD_REQUEST, UNAUTHORIZED, RESOURCE_NOT_FOUND, INTERNAL_SERVER_ERROR } from 'constants/error.types';

export const responseModel = ({ code, type, error }) => ({
  code,
  type,
  error,
});

export const badRequest = ({
  code: inputCode,
  message = 'Bad request',
  extras,
}) => responseModel({ code: `error.bad-request.${inputCode}`, type: BAD_REQUEST, error: { message, ...extras } });

export const unauthorized = ({
  message = 'Unauthorized',
  extras,
}) => responseModel({
  code: 'error.unauthorized',
  type: UNAUTHORIZED,
  error: { message, ...extras },
});

export const resourceNotFound = ({
  message = 'Not found',
  extras,
}) => responseModel({
  code: 'error.resource-not-found',
  type: RESOURCE_NOT_FOUND,
  error: { message, ...extras },
});

export const internalServerError = ({
  message = 'Internal server error',
  extras,
}) => responseModel({
  code: 'error.internal-server',
  type: INTERNAL_SERVER_ERROR,
  error: { message, ...extras },
});