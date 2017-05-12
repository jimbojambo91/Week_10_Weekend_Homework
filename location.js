var Location = function(name){
  this.name = name;
  this.linkedLocations = [];
  this.inhabitants = [];
}

Location.prototype = {
  addlinkedLocations: function(location){
    this.linkedLocations.push(location);
  }
}

module.exports = Location;