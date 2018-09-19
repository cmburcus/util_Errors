'use strict';

const chai = require('chai');
const notFoundHandler = require('../index').notFoundHandler;

const expect = chai.expect;

describe('TESTING: notFoundHandler', () => {
  it('it should call the callback with a NotFoundError', async () => {
    let errorReturn = null;

    await notFoundHandler(null, null, function(error) {
      errorReturn = error;
    });

    expect(errorReturn).to.be.an('error');
    expect(errorReturn)
      .to.have.property('type')
      .equal('NotFoundError');
    expect(errorReturn)
      .to.have.property('status')
      .equal(404);
    expect(errorReturn)
      .to.have.property('error')
      .equal(null);
  });
});
