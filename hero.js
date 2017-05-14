var Hero = function(name, favFood){
  this.name = name;
  this.health = 100;
  this.favFood = favFood;
  this.level = 1;
  this.toLvl = 100;
  this.tasks = [];
  this.bag = [];
  this.journal = [];
  this.currentLocation = undefined;
  this.leftHand = undefined;
  this.rightHand = undefined;
  this.skills = {
    strength : {
      level: 1, 
      toLvl: 100
    }
  }
}

Hero.prototype = {
  talk: function(){
    return this.name
  },
  eat: function(food){
    if(food.nutritionalValue !== undefined){
      if(this.favFood === food.name){
        this.health += (food.nutritionalValue * 2)
      } else {
        this.health += food.nutritionalValue;
      }
    }
  },
  addTask: function(task){
    this.tasks.push(task);
  },
  travel: function(location){
    if(this.currentLocation.linkedLocations.includes(location)){
      this.currentLocation = location;
      return this.name + " travelled to " + location.name;
    } else{
      return "You cannot travel there at this moment in time"
    }
  },
  updateToSkillLvl: function(num, toChange){
    this.skills[toChange].toLvl -= num;
    if(this.skills[toChange].toLvl <= 0){
      this.skills[toChange].level++;
      this.setToSkillLvl(this.skills[toChange].toLvl, toChange);
    }
  },
  setToSkillLvl: function(num, toChange){
    this.skills[toChange].toLvl = (this.skills[toChange].level * 100) + num;
  },
  updateToLvl: function(num, toChange){
    this.toLvl -= num;
    if(this.toLvl <= 0){
      this.level++;
      this.setToLvl(this.toLvl);
    }
  },
  setToLvl: function(num){
    this.toLvl = (this.level * 100) + num;
  },
  attack: function(target){
    if(this.leftHand === undefined && this.rightHand === undefined){
      var damage = this.skills.strength.level * 5
      target.updateHealth(damage);
      this.updateToSkillLvl(5, "strength");
    }
  }
}

module.exports = Hero;