'use strict';

var _ = require('lodash');
var chai = require('chai');
var sinon = require('sinon');
var should = chai.should();

var Address = require('../../lib/model/address');

describe('Address', function() {
  it('should create livenet address', function() {
    var x = Address.create({
      address: '3Q7DLeQQNLVzMKRGctt1WHdR5nbp6gijxv',
      walletId: '123',
      isChange: false,
      path: 'm/0/1',
      publicKeys: ['123', '456'],
    });
    should.exist(x.createdOn);
    x.network.should.equal('livenet');
  });
  it('should create testnet address', function() {
    var x = Address.create({
      address: 'tGLmptjyyrvYRJmeC72ujHPAAaXwmQjvS8',
      walletId: '123',
      isChange: false,
      path: 'm/0/1',
      publicKeys: ['123', '456'],
    });
    x.network.should.equal('testnet');
  });
});
