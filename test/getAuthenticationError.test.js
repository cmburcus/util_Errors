'use strict';

const chai = require('chai');
const getAuthenticationError = require('../index').getAuthenticationError;

const expect = chai.expect;

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
