var assert = require('assert')
var Hero = require('../hero.js')

describe("Hero Tests", function(){

  beforeEach(function() {
    this.hero = new Hero("Ser Baristan the Bold", "Chicken");
  });

  it("hero has name", function(){
    assert.deepEqual("Ser Baristan the Bold", this.hero.name);
  })

  it("hero has favourite food", function(){
    assert.deepEqual("Chicken", this.hero.favFood);
  })

  it("hero's health starts at 100", function(){
    assert.deepEqual(100, this.hero.health);
  })

  it("hero's level starts at 1", function(){
    assert.deepEqual(1, this.hero.level);
  })

  it("hero's tasks starts empty", function(){
    assert.deepEqual(0, this.hero.tasks.length);
  })

  it("hero's bag starts empty", function(){
    assert.deepEqual(0, this.hero.bag.length);
  })

  it("hero's journal starts empty", function(){
    assert.deepEqual(0, this.hero.journal.length);
  })

  it("hero can talk", function(){
    assert.deepEqual("Ser Baristan the Bold", this.hero.talk());
  })



})