'use strict';

const AuthenticationError = require('./errors/AuthenticationError');
const InvalidTokenError = require('./errors/InvalidTokenError');
const InvalidArgumentError = require('./errors/InvalidArgumentError');
const ValidationError = require('./errors/ValidationError');

module.exports = {
  /**
   * Returns an authentication error
   */
  getAuthenticationError: (error) => (new AuthenticationError(error)),

  /**
   * Returns an invalid token error
   */
  getInvalidTokenError: (error) => (new InvalidTokenError(error)),

  /**
   * Returns an invalid argument error
   */
  getInvalidArgumentError: (error) => (new InvalidArgumentError(error)),

  /**
   * Returns a validation error
   */
  getValidationError: (error) => (new ValidationError(error)),
};
