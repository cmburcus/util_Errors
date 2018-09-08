'use strict';

const ObjectionValidationError = require('objection').ValidationError;
const AuthenticationError = require('./errors/AuthenticationError');
const InvalidTokenError = require('./errors/InvalidTokenError');
const InvalidArgumentError = require('./errors/InvalidArgumentError');
const ValidationError = require('./errors/ValidationError');

module.exports = {
  /**
   * Throws an objection validation error
   *
   * @param {string} column - Database column name
   * @param {string} message - The message to be displayed for the column
   */
  throwModelValidationError: (column, message) => {
    throw new ObjectionValidationError({
      type: 'ModelValidation',
      data: { [column]: [message] },
    });
  },

  /**
   * Throws an authentication error
   */
  throwAuthenticationError: (error) => {
    throw new AuthenticationError(error);
  },

  /**
   * Throws an invalid token error
   */
  throwInvalidTokenError: (error) => {
    throw new InvalidTokenError(error);
  },

  /**
   * Throws an invalid argument error
   */
  throwInvalidArgumentError: (error) => {
    throw new InvalidArgumentError(error);
  },

  /**
   * Throws a validation error
   */
  throwValidationError: (error) => {
    throw new ValidationError(error);
  },

  AuthenticationError: AuthenticationError,
  InvalidTokenError: InvalidTokenError,
  InvalidArgumentError: InvalidArgumentError,
  ValidationError: ValidationError,
};
