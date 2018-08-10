const assert = require('chai').assert
const addNumbers = require('../add')

describe('add functionality', function() {
  context('add function', function(){
    it('it can add two numbers', function(){
      assert.equal(addNumbers(7,8), 15)
    })
  })
})
