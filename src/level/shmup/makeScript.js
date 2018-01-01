var Script = require('./Script.js')

var Curtain = Script.Curtain
// dir, type, count, rate, width, velx, vely, offset, span
var Spawn = Script.Spawn
// dir, type, x, y, width, velx, vely
var Wait = Script.Wait
// time




module.exports = function makeScript(dir) {
  var actions =
[

new Curtain(dir, null, 5, 100, 40, 40, null, 100, 200),
new Wait(4000)

]
  return new Script(dir, actions)
}
