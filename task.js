var Task = function(name, description, difficulty, urgency, reward){
  this.name = name;
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completedStatus = false;
}

module.exports = Task;