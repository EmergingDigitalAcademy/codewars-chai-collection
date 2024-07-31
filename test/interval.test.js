const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const sumIntervals = require('../interval');

describe('sumIntervals', function(){
  it('should return the correct sum for non overlapping intervals', function(){
    const test1 = [[1,5]];
    const test2 = [[1,5],[6,10]];
    assert.strictEqual(sumIntervals(test1), 4);
    assert.strictEqual(sumIntervals(test2), 8);
  });
  
  it('should return the correct sum for overlapping intervals', function(){
    const test1 = [[1,5],[1,5]];
    const test2 = [[1,4],[7, 10],[3, 5]];
    assert.strictEqual(sumIntervals(test1), 4);
    assert.strictEqual(sumIntervals(test2), 7);
  });
  
  it('should return the correct sum for large intervals', function(){
    let intervals = [
      {intervals: [[-1e4, 1e4]], sum: 2e4},
      // {intervals: [
      //   [0, 20],
      //   [-1e8, 10],
      //   [30, 40]
      // ], sum: 1e8 + 30}
    ];
    for(let i = 0; i < intervals.length; i++){
      assert.strictEqual(sumIntervals(intervals[i].intervals), intervals[i].sum); 
    }
  });
});