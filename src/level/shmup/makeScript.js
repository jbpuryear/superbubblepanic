var Script = require('./Script.js')

var Curtain = Script.Curtain
// dir, type, count, rate, width, velx, vely, offset, span
var Spawn = Script.Spawn
// dir, type, x, y, width, velx, vely
var Wait = Script.Wait
// time
var Multi = Script.Multi
// dir, children

function Pair(dir, x, width) {
  return new Multi(dir, [
    new Spawn(dir, null, x+width/4, null, width/2),
    new Spawn(dir, null, x+width*3/4, null, width/2)
  ])
}


module.exports = function makeScript(dir) {
  var sweep = new Curtain(dir, null, 6, 100, 40, null, null, -10, 160)
  var rSweep = new Curtain(dir, null, 6, 100, 40, null, null, 266, -160)

  var weave = new Script(dir, [
    new Spawn(dir, null, 210, null, 200),
    new Wait(500),
    new Spawn(dir, null, 15, null, 160),
  ])
  var rWeave = new Script(dir, weave.actions.slice().reverse())

  var alleyR = new Script(dir, [
    new Curtain(dir, null, 2, null, 210),
    new Wait(800),
    new Curtain(dir, null, 2, null, 210, null, null, 256/6),
    new Wait(800),
    new Curtain(dir, null, 2, null, 210, null, null, 2*256/6),
  ])
  var alleyL = new Script(dir, [
    new Curtain(dir, null, 2, null, 210),
    new Wait(800),
    new Curtain(dir, null, 2, null, 210, null, null, -256/6),
    new Wait(800),
    new Curtain(dir, null, 2, null, 210, null, null, -2*256/6),
  ])
  var rAlleyR = new Script(dir, alleyR.actions.slice().reverse())
  var rAlleyL = new Script(dir, alleyL.actions.slice().reverse())

  var bigBoi = new Spawn(dir, null, 128, null, 220)

  var gauntlet = new Script(dir, [
    alleyR,
    new Wait(800),
    rAlleyR,
    new Wait(800),
    alleyL,
    new Wait(800),
    rAlleyL
  ])

  var actions =
[

  new Wait(4000),
  new Spawn(dir, null, 200, null, 20),
  new Wait(3000),
  new Spawn(dir, null, 20, null, 20),
  new Wait(2000),
  new Spawn(dir, null, 128, null, 40),
  new Wait(1200),
  new Pair(dir, 40, 70),
  new Wait(400),
  new Spawn(dir, null, 32, null, 40),
  new Wait(600),
  new Pair(dir, 140, 100),
  new Wait(1500),
  new Spawn(dir, null, 75, null, 78),
  new Wait(1500),
  weave,
  new Wait(1000),
  sweep,
  new Wait(400),
  rSweep,
  new Wait(1000),
  weave,
  new Wait(2000),
  bigBoi,
  new Wait(1500),
  gauntlet,
  new Wait(1600),
  bigBoi,
  new Wait(1600),
  sweep,
  new Wait(800),
  rAlleyR
]
  return new Script(dir, actions)
}
