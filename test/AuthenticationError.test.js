'use strict';

const chai = require('chai');
const AuthenticationError = require('../errors/AuthenticationError');
const getAuthenticationError = require('../index').getAuthenticationError;

const expect = chai.expect;

describe('TESTING: AuthenticationError', () => {
  it('it should create a new object', () => {
    const authenticationError = {
      email: ['invalid email'],
    };

    const error = new AuthenticationError(authenticationError);

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('AuthenticationError');
    expect(error)
      .to.have.property('status')
      .equal(401);
    expect(error)
      .to.have.property('error')
      .equal(authenticationError);
  });

  it('it should have the error as null if no error is passed', () => {
    const error = new AuthenticationError();

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('AuthenticationError');
    expect(error)
      .to.have.property('status')
      .equal(401);
    expect(error).to.have.property('error').be.null;
  });
});

describe('TESTING: getAuthenticationError', () => {
  it('it should be throwable', () => {
    const authenticationError = {
      email: ['invalid email'],
    };

    let result = null;

    try {
      throw getAuthenticationError(authenticationError);
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('type')
      .equal('AuthenticationError');
    expect(result)
      .to.have.property('status')
      .equal(401);
    expect(result)
      .to.have.property('error')
      .equal(authenticationError);
  });
});
