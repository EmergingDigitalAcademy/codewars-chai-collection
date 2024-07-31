# Chai Tests for Codewars Demos

`npm test` will run all tests in the `test/` folder. We're using Chai v4 because v5 forcefully upgrades to `CommonJS` import/export system which adds some overhead (doesn't just work out of the box, `require/module.exports` doesn't work)