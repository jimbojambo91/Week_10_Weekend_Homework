var assert = require('assert')
var Location = require('../location.js')

describe("Location Tests", function(){

  beforeEach(function() {
    this.location = new Location("River Bank");
    this.location2 = new Location("Skurdurf");
  });

  it("location has name", function(){
    assert.deepEqual("River Bank", this.location.name);
  })

  it("can add linked location", function(){
    this.location.addlinkedLocations(this.location2)
    assert.deepEqual(1, this.location.linkedLocations.length);
  })

})
