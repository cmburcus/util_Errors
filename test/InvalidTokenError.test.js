'use strict';

const chai = require('chai');
const InvalidTokenError = require('../errors/InvalidTokenError');
const getInvalidTokenError = require('../index').getInvalidTokenError;

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

  it('it should have the error as null if no error is passed', () => {
    const error = new InvalidTokenError();

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('InvalidTokenError');
    expect(error)
      .to.have.property('status')
      .equal(401);
    expect(error).to.have.property('error').be.null;
  });
});

describe('TESTING: getInvalidTokenError', () => {
  it('it should be throwable', () => {
    const tokenName = 'token';

    let result = null;

    try {
      throw getInvalidTokenError(tokenName);
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('type')
      .equal('InvalidTokenError');
    expect(result)
      .to.have.property('status')
      .equal(401);
    expect(result)
      .to.have.property('error')
      .equal(tokenName);
  });
});
