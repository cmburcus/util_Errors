'use strict';

const chai = require('chai');
const InvalidArgumentError = require('../errors/InvalidArgumentError');

const expect = chai.expect;

describe('TESTING: InvalidArgumentError', () => {
  it('it should create a new object', () => {
    const argument = 'variableName';
    const error = new InvalidArgumentError(argument);

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('InvalidArgumentError');
    expect(error)
      .to.have.property('status')
      .equal(400);
    expect(error)
      .to.have.property('error')
      .equal(argument);
  });
});
