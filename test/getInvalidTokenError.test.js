'use strict';

const chai = require('chai');
const getInvalidTokenError = require('../index').getInvalidTokenError;

const expect = chai.expect;

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
