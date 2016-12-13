import { fv } from '../src/utils/utils';
import assert from 'assert';

describe('paragraphText', function() {
  it('should return the FV in a string based on a given .', function() {
    assert.equal(4, sum(0, 4));
    assert.equal(4, sum(1, 3));
    assert.equal(4, sum(2, 2));
    assert.equal(4, sum(3, 1));
    assert.equal(4, sum(4, 0));
  });
});
