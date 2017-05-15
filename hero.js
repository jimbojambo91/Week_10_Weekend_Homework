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
    },
    weapons : {
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
    var leftHandDamage = 0;
    var rightHandDamage = 0;
    if(this.leftHand === undefined && this.rightHand === undefined){
      var damage = this.skills.strength.level * 5
      target.updateHealth(damage);
      this.updateToSkillLvl(5, "strength");
    } else {
      if(this.leftHand !== undefined && this.leftHand.damage !== undefined){
        leftHandDamage = this.leftHand.damage;
      }
      if(this.rightHand !== undefined && this.rightHand.damage !== undefined){
        rightHandDamage = this.rightHand.damage;
      }
      damage = (this.skills.weapons.level + leftHandDamage + rightHandDamage) * 5
      target.updateHealth(damage);
      this.updateToSkillLvl(5, "weapons");
    }
  },
  equipLeft: function(weapon){
    if(weapon.damage !== undefined){
      switch (this.leftHand){
        case undefined: 
          if(this.rightHand === undefined){
            this.leftHand = weapon;
            break;
          }
          if(this.rightHand.type !== "Long Sword") {
            this.leftHand = weapon;
            break;
          } else {
              return "Hero must unequip Long Sword"
          }
        default:
          this.addToBag(this.leftHand);
          this.leftHand = weapon; 
      }
    } else {
      return "Only weapons can be equipped"
    }
    
  },
  equipRight: function(weapon){
    if(weapon.damage !== undefined){
      switch (this.rightHand){
        case undefined: 
          if(this.leftHand === undefined){
            this.rightHand = weapon;
            break;
          }
          if(this.leftHand.type !== "Long Sword") {
            this.rightHand = weapon;
            break;
          } else {
              return "Hero must unequip Long Sword"
          }
        case !undefined: 
          addToBag(getRightHand());
          this.rightHand = weapon; 
      }
    } else {
      return "Only weapons can be equipped"
    }
    
  },
  addToBag: function(item){
    this.bag.push(item);
  },
  getTotalCarryWeight: function(){
    var total = 0;
    this.bag.forEach(function(item){
      total += item.weight;
    })
    total += (this.leftHand !== undefined) ? this.leftHand.weight : 0;
    total += (this.rightHand !== undefined) ? this.rightHand.weight : 0;
    return total;
  },
  filterCompletedTasks: function(){
    return this.tasks.filter(function(task){
      return task.completedStatus === true;
    })
  },
  filterIncompleteTasks: function(){
    return this.tasks.filter(function(task){
      return task.completedStatus === false;
    })
  },

}

module.exports = Hero;