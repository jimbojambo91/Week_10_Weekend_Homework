var assert = require('assert')
var Chicken = require('../chicken.js')

describe("Chicken Tests", function(){

  beforeEach(function() {
    this.chicken = new Chicken();
  });

  it("chicken health starts at 100", function(){
    assert.deepEqual(100, this.chicken.health);
  })


})