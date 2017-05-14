var assert = require('assert')
var Hero = require('../hero.js')
var Food = require('../food.js')
var Task = require('../task.js')
var Location = require('../location.js')
var Chicken = require('../chicken.js')
var Weapon = require('../weapon.js')

describe("Hero Tests", function(){

  beforeEach(function() {
    this.location = new Location("River Bank");
    this.location2 = new Location("Skurdurf");
    this.hero = new Hero("Ser Baristan the Bold", "Chicken");
    this.food = new Food("Chicken", 10);
    this.food2 = new Food("Rack of Ribs", 10);
    this.task = new Task("Locate Zsolt the Barbarian", "Travel to Skurdurf and find the barbarian Zsolt. I heard he may have quests available for travellers. Often times he can be found in the local pub - the Python Pit", "Easy", "Low", "Nothing");
    this.chicken = new Chicken();
    this.weapon = new Weapon("Sword", "Iron", 10, 15, 20.00 );
    this.weapon2 = new Weapon("Axe", "Iron", 10, 20, 20.00 );
    this.hero.currentLocation = this.location;
    this.location.addlinkedLocations(this.location2);
    this.location2.addlinkedLocations(this.location);
  });

  it("hero has name", function(){
    assert.deepEqual("Ser Baristan the Bold", this.hero.name);
  })

  it("hero has favourite food", function(){
    assert.deepEqual("Chicken", this.hero.favFood);
  })

  it("hero has current location", function(){
    assert.deepEqual("River Bank", this.hero.currentLocation.name);
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

  it("hero can eat food", function(){
    this.hero.health = 50;
    this.hero.eat(this.food2);
    assert.deepEqual(60 , this.hero.health);
  })

  it("favourite food is tastier", function(){
    this.hero.health = 50;
    this.hero.eat(this.food);
    assert.deepEqual(70 , this.hero.health);
  })

  it("hero can add task", function(){
    this.hero.addTask(this.task);
    assert.deepEqual(1, this.hero.tasks.length);
  })

  it("hero can travel", function(){
    this.hero.travel(this.location2);
    assert.deepEqual("Skurdurf", this.hero.currentLocation.name);
  })

  it("hero has toLvl", function(){
    assert.deepEqual(100, this.hero.toLvl);
  })

  it("hero can level up", function(){
    this.hero.updateToLvl(100);
    assert.deepEqual(200, this.hero.toLvl);
    assert.deepEqual(2, this.hero.level);
  })

  it("hero has SkilltoLvl", function(){
    assert.deepEqual(100, this.hero.skills.strength.toLvl);
  })

  it("hero has Skill Level", function(){
    assert.deepEqual(1, this.hero.skills.strength.level);
  })

  it("hero can level up skill", function(){
    this.hero.updateToSkillLvl(100, "strength");
    assert.deepEqual(200, this.hero.skills.strength.toLvl);
    assert.deepEqual(2, this.hero.skills.strength.level);
  })

  it("hero can attack chicken", function(){
    this.hero.attack(this.chicken);
    assert.deepEqual(95, this.hero.skills.strength.toLvl);
    assert.deepEqual(15, this.chicken.health);
  })

  it("hero can equip weapon", function(){
    this.hero.equipLeft(this.weapon);
    assert.deepEqual(this.weapon, this.hero.leftHand);
  })

  it("hero can dual-wield", function(){
    this.hero.equipLeft(this.weapon);
    this.hero.equipRight(this.weapon2);
    assert.deepEqual(this.weapon, this.hero.leftHand);
    assert.deepEqual(this.weapon2, this.hero.rightHand);
  })

  it("hero can cycle weapons", function(){
    this.hero.equipLeft(this.weapon);
    this.hero.equipLeft(this.weapon2);
    assert.deepEqual(this.weapon2, this.hero.leftHand);
    assert.deepEqual(this.weapon, this.hero.bag[0])
  })






})