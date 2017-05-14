var assert = require('assert')
var Weapon = require('../weapon.js')

describe("Weapon Tests", function(){

  beforeEach(function() {
    this.weapon = new Weapon("Sword", "Iron", 10, 15, 20.00 );
  });

  it("weapon has name", function(){
    assert.deepEqual("Iron Sword", this.weapon.name);
  })

  it("weapon has type", function(){
    assert.deepEqual("Sword", this.weapon.type);
  })

  it("weapon has metal", function(){
    assert.deepEqual("Iron", this.weapon.metal);
  })

  it("weapon has damage", function(){
    assert.deepEqual(10, this.weapon.damage);
  })

  it("weapon has weight", function(){
    assert.deepEqual(15, this.weapon.weight);
  })

  it("weapon has value", function(){
    assert.deepEqual(20.00, this.weapon.value);
  })

  


})