var assert = require('assert')
var Chicken = require('../chicken.js')

describe("Chicken Tests", function(){

  beforeEach(function() {
    this.chicken = new Chicken();
  });

  it("chicken health starts at 20", function(){
    assert.deepEqual(20, this.chicken.health);
  })

  it("chicken health can be changed", function(){
    this.chicken.updateHealth(10);
    assert.deepEqual(10, this.chicken.health);
  })


})