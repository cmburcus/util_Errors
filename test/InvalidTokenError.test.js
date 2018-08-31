'use strict';

const chai = require('chai');
const InvalidTokenError = require('../errors/InvalidTokenError');

const expect = chai.expect;

describe('TESTING: InvalidTokenError', () => {
  it('it should create a new object', () => {
    const tokenName = 'token';

    const error = new InvalidTokenError(tokenName);

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('InvalidTokenError');
    expect(error)
      .to.have.property('status')
      .equal(401);
    expect(error)
      .to.have.property('error')
      .equal(tokenName);
  });
});
