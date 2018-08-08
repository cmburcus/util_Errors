'use strict';

class InvalidArgumentError extends Error {
  constructor() {
    super('InvalidArgumentError');

    this.type = 'InvalidArgumentError';
    this.name = this.constructor.name;
    this.statusCode = 400;
  }
}

module.exports = InvalidArgumentError;
