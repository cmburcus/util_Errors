'use strict';

const chai = require('chai');
const throwModelValidationError = require('../index').throwModelValidationError;

const expect = chai.expect;

describe('TESTING: throwModelValidationError', () => {
  it('it should throw error if column and message are passed as params', () => {
    const column = 'columnName';
    const message = 'Error message';

    let result = null;

    try {
      throwModelValidationError(column, message);
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('name')
      .equal('ValidationError');
    expect(result)
      .to.have.property('type')
      .equal('ModelValidation');
    expect(result)
      .to.have.property('statusCode')
      .equal(400);
    expect(result)
      .to.have.property('data')
      .be.an('object');
    expect(result)
      .to.have.nested.property(`data.${column}`)
      .be.an('array');
  });

  it('it should fail if column and message are not provided', () => {
    let result = null;

    try {
      throwModelValidationError();
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('name')
      .equal('TypeError');
  });
});
