var Weapon = require('./weapon.js')

var WeaponFactory = function(){
  this.types = ["sword", "axe", "dagger", "long sword", "battle axe"]
  this.metals = ["iron", "steel", "dark", "elvish"]

  WeaponFactory.prototype = {
    randomiser: function(array){
      return array[Math.floor(Math.random()* (array.length))]
    },
    createRandomIron: function(){
      var type = this.randomiser(this.types);
      var metal = "Iron";
      switch (type){
        case "sword": 
          var damage = 10;
          var weight = 15;
          var value = 20;
        case "axe": 
          var damage = 15;
          var weight = 20;
          var value = 25;
        case "dagger": 
          var damage = 5;
          var weight = 5;
          var value = 10;
        case "long sword": 
          var damage = 20;
          var weight = 50;
          var value = 25;
        case "long sword": 
          var damage = 25;
          var weight = 70;
          var value = 25;
      }
      return new Weapon(type, metal, damage, weight, value);
    }
  }

  

}

module.exports = WeaponFactory;