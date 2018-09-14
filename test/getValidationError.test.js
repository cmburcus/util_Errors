'use strict';

const chai = require('chai');
const getValidationError = require('../index').getValidationError;

const expect = chai.expect;

describe('TESTING: getValidationError', () => {
  it('it should be throwable', () => {
    const errorObject = { key1: [ 'Some error message' ] };

    let result = null;

    try {
      throw getValidationError(errorObject);
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
