var Weapon = function(type, metal, damage, weight, value){
  this.name = metal + " " + type
  this.type = type
  this.metal = metal
  this.damage = damage
  this.weight = weight
  this.value = value
}

module.exports = Weapon;