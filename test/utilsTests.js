import { sum, tax, total } from '../src/utils/utils';
import assert from 'assert';

describe('sum', function() {
  it('should return the sum.', function() {
    assert.equal(4, sum(0, 4));
    assert.equal(4, sum(1, 3));
    assert.equal(4, sum(2, 2));
    assert.equal(4, sum(3, 1));
    assert.equal(4, sum(4, 0));
  });
});

describe('tax', function() {
  it('should return the tax.', function() {
    assert.equal(1, tax(100, 1));
    assert.equal(20, tax(200, 10));
    assert.equal(40, tax(400, 10));
    assert.equal(3, tax(3, 100));
    assert.equal(90, tax(9000, 1));
  });
});

describe('total', function() {
  it('should return the total.', function() {
    assert.equal(110, total(100, 10));
    assert.equal(225, total(200, 12.5));
    assert.equal(190, total(125, 52));
    assert.equal(270, total(250, 8));
    assert.equal(9090, total(9000, 1));
  });
});
