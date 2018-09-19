'use strict';

const chai = require('chai');
const ValidationError = require('../errors/ValidationError');
const getValidationError = require('../index').getValidationError;

const expect = chai.expect;

describe('TESTING: ValidationError', () => {
  it('it should create a new object', () => {
    const errorObject = { key1: ['Some error message'] };
    const error = new ValidationError(errorObject);

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('ValidationError');
    expect(error)
      .to.have.property('status')
      .equal(400);
    expect(error)
      .to.have.property('error')
      .equal(errorObject);
  });

  it('it should have the error as null if no error is passed', () => {
    const error = new ValidationError();

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('ValidationError');
    expect(error)
      .to.have.property('status')
      .equal(400);
    expect(error).to.have.property('error').be.null;
  });
});

describe('TESTING: getValidationError', () => {
  it('it should be throwable', () => {
    const errorObject = { key1: ['Some error message'] };

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
