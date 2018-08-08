'use strict';

const chai = require('chai');
const throwInvalidTokenError = require('../index').throwInvalidTokenError;

const expect = chai.expect;

describe('TESTING: throwInvalidTokenError', () => {
  it('it should throw error if name and message are passed as params', () => {
    const name = 'ErrorName';
    const message = 'My message';

    let result = null;

    try {
      throwInvalidTokenError(name, message);
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('name')
      .equal(name);
    expect(result)
      .to.have.property('type')
      .equal('InvalidTokenError');
    expect(result)
      .to.have.property('statusCode')
      .equal(401);
    expect(result)
      .to.have.property('message')
      .equal(message);
  });
});
