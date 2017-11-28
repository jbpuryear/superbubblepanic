module.exports = Script


var Attack = require('./Attack.js')


function Script(dir) {
  Attack.call(this, dir)
  this.children = [
    new Attack.Single(dir, null, null, 10, null, null, 000)
  ]
}


Script.prototype = Object.create(Attack.prototype)

