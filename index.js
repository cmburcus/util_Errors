'use strict';

const AuthenticationError = require('./errors/AuthenticationError');
const InvalidTokenError = require('./errors/InvalidTokenError');
const InvalidArgumentError = require('./errors/InvalidArgumentError');
const ValidationError = require('./errors/ValidationError');
const SystemError = require('./errors/SystemError');
const NotFoundError = require('./errors/NotFoundError');

module.exports = {
  /**
   * Returns an authentication error
   */
  getAuthenticationError: (error) => new AuthenticationError(error),

  /**
   * Returns an invalid token error
   */
  getInvalidTokenError: (error) => new InvalidTokenError(error),

  /**
   * Returns an invalid argument error
   */
  getInvalidArgumentError: (error) => new InvalidArgumentError(error),

  /**
   * Returns a validation error
   */
  getValidationError: (error) => new ValidationError(error),

  /**
   * Returns a system error
   */
  getSystemError: (error) => new SystemError(error),

  /**
   * Returns a not found error
   */
  getNotFoundError: (error) => new NotFoundError(error),

  /**
   * Error handler middleware for routes that do not exist
   */
  notFoundHandler: (request, response, next) => {
    next(new NotFoundError());
  },

  /**
   * Error handler middleware that can be used to handle all route errors
   */
  errorHandler: (error, request, response, next) => {
    let errorObject = error;
    let errorResponse = null;

    if (typeof error.type === 'undefined' && request.app.get('env') === 'production') {
      // System error details will not be sent in production
      errorObject = new SystemError();
    } else if (typeof error.type === 'undefined') {
      // App errors are typed. If an error is not typed, it has to be a system error
      errorObject = new SystemError(error.stack);
    }

    errorResponse = {
      type: errorObject.type,
      status: errorObject.status,
      message: errorObject.message,
      error: errorObject.error,
    };

    response.status(errorResponse.status).json(errorResponse);
  },
};
