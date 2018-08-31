'use strict';

const chai = require('chai');
const AuthenticationError = require('../errors/AuthenticationError');

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
});
