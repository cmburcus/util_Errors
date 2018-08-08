'use strict';

class InvalidTokenError extends Error {
  constructor(name, message) {
    super('InvalidTokenError');

    this.type = 'InvalidTokenError';
    this.name = name;
    this.message = message;
    this.statusCode = 401;
  }
}

module.exports = InvalidTokenError;
