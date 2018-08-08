'use strict';

const chai = require('chai');
const AuthenticationError = require('../errors/AuthenticationError');

const expect = chai.expect;

describe('TESTING: AuthenticationError', () => {
  it('it should create a new object', () => {
    const error = new AuthenticationError();

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('name')
      .equal('AuthenticationError');
    expect(error)
      .to.have.property('type')
      .equal('AuthenticationError');
    expect(error)
      .to.have.property('statusCode')
      .equal(401);
  });
});
