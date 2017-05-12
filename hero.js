var Hero = function(name, favFood){
  this.name = name;
  this.health = 100;
  this.favFood = favFood;
  this.level = 1;
  this.tasks = [];
  this.bag = [];
  this.journal = [];
}

Hero.prototype = {
  talk: function(){
    return this.name
  }
}

module.exports = Hero;