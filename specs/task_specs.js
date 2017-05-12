var assert = require('assert')
var Task = require('../task.js')

describe("Task Tests", function(){

  beforeEach(function() {
    this.task = new Task();
  });

  it("task has name", function(){
    assert.deepEqual("Ser Baristan the Bold", this.hero.name);
  })