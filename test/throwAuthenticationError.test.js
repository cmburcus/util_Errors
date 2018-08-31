'use strict';

const chai = require('chai');
const throwAuthenticationError = require('../index').throwAuthenticationError;

const expect = chai.expect;

describe('TESTING: throwAuthenticationError', () => {
  it('it should throw error', () => {
    const authenticationError = {
      email: ['invalid email'],
    };

    let result = null;

    try {
      throwAuthenticationError(authenticationError);
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
