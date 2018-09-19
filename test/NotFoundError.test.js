'use strict';

const chai = require('chai');
const NotFoundError = require('../errors/NotFoundError');
const getNotFoundError = require('../index').getNotFoundError;

const expect = chai.expect;

describe('TESTING: AuthenticationError', () => {
  it('it should create a new object', () => {
    const notFoundError = 'entity not found';

    const error = new NotFoundError(notFoundError);

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('NotFoundError');
    expect(error)
      .to.have.property('status')
      .equal(404);
    expect(error)
      .to.have.property('error')
      .equal(notFoundError);
  });

  it('it should have the error as null if no error is passed', () => {
    const error = new NotFoundError();

    expect(error).to.be.an('error');
    expect(error)
      .to.have.property('type')
      .equal('NotFoundError');
    expect(error)
      .to.have.property('status')
      .equal(404);
    expect(error).to.have.property('error').be.null;
  });
});

describe('TESTING: getNotFoundError', () => {
  it('it should be throwable', () => {
    let result = null;

    try {
      throw getNotFoundError();
    } catch (error) {
      result = error;
    }

    expect(result).to.be.an('error');
    expect(result)
      .to.have.property('type')
      .equal('NotFoundError');
    expect(result)
      .to.have.property('status')
      .equal(404);
  });
});
