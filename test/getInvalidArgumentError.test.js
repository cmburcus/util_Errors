'use strict';

const chai = require('chai');
const getInvalidArgumentError = require('../index').getInvalidArgumentError;

const expect = chai.expect;

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
