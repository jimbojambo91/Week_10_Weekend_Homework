var assert = require('assert')
var Task = require('../task.js')

describe("Task Tests", function(){

  beforeEach(function() {
    this.task = new Task("Locate Zsolt the Barbarian", "Travel to Skurdurf and find the barbarian zsolt. I heard he may have quests available for travellers. Often times he can be found in the local pub - the Python Pit", "Easy", "Low", "Nothing");
  });

  it("task has name", function(){
    assert.deepEqual("Locate Zsolt the Barbarian", this.task.name);
  })

  it("task has description", function(){
    assert.deepEqual("Travel to Skurdurf and find the barbarian zsolt. I heard he may have quests available for travellers. Often times he can be found in the local pub - the Python Pit", this.task.description);
  })

  it("task has difficulty", function(){
    assert.deepEqual("Easy", this.task.difficulty);
  })

  it("task has urgency", function(){
    assert.deepEqual("Low", this.task.urgency);
  })

  it("task has reward", function(){
    assert.deepEqual("Nothing", this.task.reward);
  })

})