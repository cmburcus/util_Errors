'use strict';

const chai = require('chai');
const InvalidTokenError = require('../errors/InvalidTokenError');

const expect = chai.expect;

describe('TESTING: InvalidTokenError', () => {
  it('it should create a new object', () => {
    const name = 'ErrorName';
    const message = 'My message';

    const error = new InvalidTokenError(name, message);

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('name')
      .equal(name);
    expect(error)
      .to.have.property('type')
      .equal('InvalidTokenError');
    expect(error)
      .to.have.property('statusCode')
      .equal(401);
    expect(error)
      .to.have.property('message')
      .equal(message);
  });
});
