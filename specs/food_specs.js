var assert = require('assert')
var Food = require('../food.js')

describe("Food Tests", function(){

  beforeEach(function() {
    this.food = new Food("Chicken", 10);
  });

  it("food has name", function(){
    assert.deepEqual("Chicken", this.food.name);
  })

  it("food has nutritionalValue", function(){
    assert.deepEqual(10, this.food.nutritionalValue);
  })


})