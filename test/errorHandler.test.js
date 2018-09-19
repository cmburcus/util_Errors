'use strict';

const chai = require('chai');
const errorHandler = require('../index').errorHandler;
const InvalidArgumentError = require('../errors/InvalidArgumentError');

const expect = chai.expect;

const request = {
  env: 'testing',
  app: {
    get: (variable) => request[variable],
  },
};

const response = {
  statusCode: undefined,
  jsonObject: undefined,
  status: (code) => {
    response.statusCode = code;

    return response;
  },
  json: (object) => {
    response.jsonObject = JSON.stringify(object);

    return response;
  },
};

describe('TESTING: errorHandler', () => {
  beforeEach(async () => {
    request.env = 'testing';

    response.statusCode = 'undefined';
    response.jsonObject = 'undefined';
  });

  it('it should handle system errors', async () => {
    let systemError = null;

    try {
      thisWillFail = null;
    } catch (error) {
      systemError = error;
    }

    await errorHandler(systemError, request, response, null);

    expect(response)
      .to.have.property('statusCode')
      .be.a('number')
      .and.equal(500);
    expect(response)
      .to.have.property('jsonObject')
      .be.a('string');

    const jsonObject = JSON.parse(response.jsonObject);

    expect(jsonObject)
      .to.have.property('type')
      .be.a('string')
      .and.equal('SystemError');
    expect(jsonObject)
      .to.have.property('status')
      .be.a('number')
      .and.equal(500);
    expect(jsonObject)
      .to.have.property('message')
      .be.a('string')
      .and.equal('Internal server error');
    expect(jsonObject)
      .to.have.property('error')
      .be.a('string')
      .and.equal(systemError.stack);
  });

  it('it should handle system errors but not return the full error in production', async () => {
    request.env = 'production';

    let systemError = null;

    try {
      thisWillFail = null;
    } catch (error) {
      systemError = error;
    }

    await errorHandler(systemError, request, response, null);

    expect(response)
      .to.have.property('statusCode')
      .be.a('number')
      .and.equal(500);
    expect(response)
      .to.have.property('jsonObject')
      .be.a('string');

    const jsonObject = JSON.parse(response.jsonObject);

    expect(jsonObject)
      .to.have.property('type')
      .be.a('string')
      .and.equal('SystemError');
    expect(jsonObject)
      .to.have.property('status')
      .be.a('number')
      .and.equal(500);
    expect(jsonObject)
      .to.have.property('message')
      .be.a('string')
      .and.equal('Internal server error');
    expect(jsonObject).to.have.property('error').be.null;
  });

  it('it should handle errors thrown on purpose', async () => {
    let error = new InvalidArgumentError();

    await errorHandler(error, request, response, null);

    expect(response)
      .to.have.property('statusCode')
      .be.a('number')
      .and.equal(400);
    expect(response)
      .to.have.property('jsonObject')
      .be.a('string');

    const jsonObject = JSON.parse(response.jsonObject);

    expect(jsonObject)
      .to.have.property('type')
      .be.a('string')
      .and.equal('InvalidArgumentError');
    expect(jsonObject)
      .to.have.property('status')
      .be.a('number')
      .and.equal(400);
    expect(jsonObject)
      .to.have.property('message')
      .be.a('string')
      .and.equal('Invalid argument');
    expect(jsonObject).to.have.property('error').be.null;
  });
});
