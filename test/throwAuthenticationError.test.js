'use strict';

const chai = require('chai');
const throwAuthenticationError = require('../index').throwAuthenticationError;

const expect = chai.expect;

describe('TESTING: throwAuthenticationError', () => {
  it('it should throw error', () => {
    let result = null;

    try {
      throwAuthenticationError();
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('name')
      .equal('AuthenticationError');
    expect(result)
      .to.have.property('type')
      .equal('AuthenticationError');
    expect(result)
      .to.have.property('statusCode')
      .equal(401);
  });
});
