'use strict';

const chai = require('chai');
const ValidationError = require('../errors/ValidationError');

const expect = chai.expect;

describe('TESTING: ValidationError', () => {
  it('it should create a new object', () => {
    const errorObject = { key1: [ 'Some error message' ] };
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
});
