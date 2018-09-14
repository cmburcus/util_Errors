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
