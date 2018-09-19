'use strict';

const chai = require('chai');
const SystemError = require('../errors/SystemError');
const getSystemError = require('../index').getSystemError;

const expect = chai.expect;

describe('TESTING: SystemError', () => {
  it('it should create a new object', () => {
    let systemError = null;

    try {
      willNotWork = 'test';
    } catch (error) {
      systemError = error;
    }

    const error = new SystemError(systemError);

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('SystemError');
    expect(error)
      .to.have.property('status')
      .equal(500);
    expect(error)
      .to.have.property('error')
      .equal(systemError);
  });
});

describe('TESTING: getSystemError', () => {
  it('it should be throwable', () => {
    let result = null;

    try {
      throw getSystemError();
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('type')
      .equal('SystemError');
    expect(result)
      .to.have.property('status')
      .equal(500);
  });
});
