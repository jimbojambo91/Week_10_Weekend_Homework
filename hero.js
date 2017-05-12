var Hero = function(name, favFood){
  this.name = name;
  this.health = 100;
  this.favFood = favFood;
  this.level = 1;
  this.tasks = [];
  this.bag = [];
  this.journal = [];
  this.currentLocation = undefined;
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
  }
}

module.exports = Hero;