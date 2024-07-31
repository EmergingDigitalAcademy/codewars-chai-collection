function sumIntervals(intervals) {
   // first, make a place for us to hold our intervals
   const numbers = {};
   let sum = 0;
   for (const [first, last] of intervals) {
      for (let i = first; i < last; i++) {
         if (!numbers[i]) sum++;
         numbers[i] = 1;
      }
   }
   // return sum;
     return Object.values(numbers).reduce((a,b) => a+b, 0);
}

// Export the function for testing
module.exports = sumIntervals;