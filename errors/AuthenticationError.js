'use strict';

class AuthenticationError extends Error {
  constructor() {
    super('AuthenticationError');

    this.type = 'AuthenticationError';
    this.name = this.constructor.name;
    this.statusCode = 401;
  }
}

module.exports = AuthenticationError;
