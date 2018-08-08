'use strict';

const chai = require('chai');
const InvalidArgumentError = require('../errors/InvalidArgumentError');

const expect = chai.expect;

describe('TESTING: InvalidArgumentError', () => {
  it('it should create a new object', () => {
    const error = new InvalidArgumentError();

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('name')
      .equal('InvalidArgumentError');
    expect(error)
      .to.have.property('type')
      .equal('InvalidArgumentError');
    expect(error)
      .to.have.property('statusCode')
      .equal(400);
  });
});
