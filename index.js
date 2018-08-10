'use strict';

const ValidationError = require('objection').ValidationError;
const AuthenticationError = require('./errors/AuthenticationError');
const InvalidTokenError = require('./errors/InvalidTokenError');
const InvalidArgumentError = require('./errors/InvalidArgumentError');

module.exports = {
  /**
   * Throws an objection validation error
   *
   * @param {string} column - Database column name
   * @param {string} message - The message to be displayed for the column
   */
  throwModelValidationError: (column, message) => {
    throw new ValidationError({
      type: 'ModelValidation',
      data: { [column]: [message] },
    });
  },

  /**
   * Throws an authentication error
   */
  throwAuthenticationError: () => {
    throw new AuthenticationError();
  },

  /**
   * Throws an invalid token error
   */
  throwInvalidTokenError: (name, message) => {
    throw new InvalidTokenError(name, message);
  },

  /**
   * Throws an invalid argument error
   */
  throwInvalidArgumentError: () => {
    throw new InvalidArgumentError();
  },
};
