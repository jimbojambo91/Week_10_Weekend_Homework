var Hero = require('./hero.js')
var Food = require('./food.js')
var Task = require('./task.js')
var Location = require('./location.js')
var Chicken = require('./chicken.js')
var Weapon = require('./weapon.js')
const readline = require('readline')

console.log("Welcome to Adventure Quest!!")


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("What is your name traveller? " , function(answer){

  console.log("Greeting's,",answer);

  rl.close()
})


