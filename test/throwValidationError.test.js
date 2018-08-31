'use strict';

const chai = require('chai');
const throwValidationError = require('../index').throwValidationError;

const expect = chai.expect;

describe('TESTING: throwValidationError', () => {
  it('it should throw error', () => {
    const errorObject = { key1: [ 'Some error message' ] };

    let result = null;

    try {
      throwValidationError(errorObject);
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('type')
      .equal('ValidationError');
    expect(result)
      .to.have.property('status')
      .equal(400);
    expect(result)
      .to.have.property('error')
      .equal(errorObject);
  });
});
