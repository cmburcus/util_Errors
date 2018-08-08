'use strict';

const chai = require('chai');
const throwInvalidArgumentError = require('../index').throwInvalidArgumentError;

const expect = chai.expect;

describe('TESTING: throwInvalidArgumentError', () => {
  it('it should throw error', () => {
    let result = null;

    try {
      throwInvalidArgumentError();
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('name')
      .equal('InvalidArgumentError');
    expect(result)
      .to.have.property('type')
      .equal('InvalidArgumentError');
    expect(result)
      .to.have.property('statusCode')
      .equal(400);
  });
});
