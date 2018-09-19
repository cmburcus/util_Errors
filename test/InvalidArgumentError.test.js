'use strict';

const chai = require('chai');
const InvalidArgumentError = require('../errors/InvalidArgumentError');
const getInvalidArgumentError = require('../index').getInvalidArgumentError;

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

describe('TESTING: getInvalidArgumentError', () => {
  it('it should be throwable', () => {
    const argument = 'variableName';

    let result = null;

    try {
      throw getInvalidArgumentError(argument);
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('type')
      .equal('InvalidArgumentError');
    expect(result)
      .to.have.property('status')
      .equal(400);
    expect(result)
      .to.have.property('error')
      .equal(argument);
  });
});
