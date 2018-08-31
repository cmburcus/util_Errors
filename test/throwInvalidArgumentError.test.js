'use strict';

const chai = require('chai');
const throwInvalidArgumentError = require('../index').throwInvalidArgumentError;

const expect = chai.expect;

describe('TESTING: throwInvalidArgumentError', () => {
  it('it should throw error', () => {
    const argument = 'variableName';

    let result = null;

    try {
      throwInvalidArgumentError(argument);
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
