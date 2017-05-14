var Chicken = function(){
  this.health = 20
}

Chicken.prototype = {
  updateHealth: function(damage){
    this.health -= damage;
  }
}

module.exports = Chicken;