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
  var gWidth = dir.state.game.width
  var gHeight = dir.state.game.height
  var sweep = new Curtain(dir, null, 6, 100, 40, null, null, -10, 160)
  var rSweep = new Curtain(dir, null, 6, 100, 40, null, null, 266, -160)

  var weave = new Script(dir, [
    new Spawn(dir, null, 210, null, 200),
    new Wait(350),
    new Spawn(dir, null, 15, null, 160),
  ])
  var rWeave = new Script(dir, [
    new Spawn(dir, null, 42, null, 200),
    new Wait(350),
    new Spawn(dir, null, 241, null, 160),
  ])

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

  var width = 24
  var count = 10
  var speed = 50
  function sideRain() {
    var actions = []
    for (var i = count; i > 0; --i) {
      actions.push(new Spawn(dir, 'hex', -width/2, i*(gWidth+gHeight)/(count+1)-gWidth, width, speed*Math.SQRT2, speed*Math.SQRT2)) 
      actions.push(new Wait(400))
    }
    return new Script(dir, actions)
  }
  function sideRainL() {
    var actions = []
    for (var i = count; i > 0; --i) {
      actions.push(new Spawn(dir, 'hex', gWidth+width/2, i*(gWidth+gHeight)/(count+1)-gWidth, width, -speed*Math.SQRT2, speed*Math.SQRT2)) 
      actions.push(new Wait(400))
    }
    return new Script(dir, actions)
  }

  function storm() {
    return new Multi(dir, [
      sideRain(),
      new Script(dir, [
        new Wait(400),
        sideRainL()
      ])
    ])
  }

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
  new Wait(2500),
  new Spawn(dir, 'hex', -12, 25, 24, 100, 100),
  new Wait(500),
  new Spawn(dir, null, 20, null, 20),
  new Wait(2000),
  new Spawn(dir, null, 128, null, 40),
  new Wait(1200),
  new Pair(dir, 40, 70),
  new Wait(400),
  new Spawn(dir, null, 32, null, 40),
  new Wait(600),
  new Spawn(dir, 'hex', gWidth+12, 25, 24, -100, 100),
  new Wait(800),
  new Spawn(dir, null, 220, null, 50),
  new Wait(80),
  new Spawn(dir, null, 180, null, 50),
  new Wait(1500),
  sideRainL(),
  new Spawn(dir, null, 75, null, 78),
  new Wait(4500),
  weave,
  new Wait(1000),
  sweep,
  new Wait(400),
  rSweep,
  new Wait(1000),
  weave,
  new Wait(3000),
  new Curtain(dir, null, 2, null, 210),
  new Wait(1000),
  sweep,
  new Wait(3000),
  bigBoi,
  new Wait(3000),
  rSweep,
  new Wait(1000),
  new Curtain(dir, null, 2, null, 210),
  new Wait(3000),
  new Curtain(dir, null, 2, null, 210),
  new Wait(3000),
  new Curtain(dir, null, 2, null, 210, null, null, 2*256/6),
  new Wait(1000),
  new Curtain(dir, null, 2, null, 210),
  new Wait(3000),
  gauntlet,
  new Wait(4000),
  new Spawn(dir, 'hex', -12, 25, 24, 100, 100),
  new Wait(6000),
  new Spawn(dir, 'hex', gWidth+12, 25, 24, -100, 100),
  new Wait(4000),
  sideRain(),
  new Wait(1600),
  sideRainL(),
  new Wait(1600),
  new Multi(dir, [
    new Script(dir, [
      new Wait(9200),
      new Spawn(dir, null, 75, null, 20),
      new Wait(400),
      new Spawn(dir, null, 75, null, 78),
      new Wait(2800),
      new Spawn(dir, null, gWidth-75, null, 20),
      new Wait(400),
      new Spawn(dir, null, gWidth-75, null, 78)
    ]),
    storm(),
    new Script(dir, [
      new Wait(3200),
      storm()
    ]),
    new Script(dir, [
      new Wait(6400),
      storm()
    ]),
    new Script(dir, [
      new Wait(9600),
      storm()
    ]),
    new Script(dir, [
      new Wait(12800),
      storm()
    ]),
  ]),
  new Wait(1000),
  alleyR,
  new Wait(800),
  rAlleyR,
  new Wait(1600),
  new Curtain(dir, null, 2, null, 210),
  new Wait(3000),
  bigBoi,
  new Wait(3000),
  new Curtain(dir, null, 2, null, 210),
  new Wait(1600),
  weave,
  new Wait(800),
  rWeave,
  new Wait(1600),
  weave,
  new Wait(800),
  weave,
  new Wait(1600),
  sweep,
  new Wait(800),
  rAlleyR,
  new Wait(2000),
  new Spawn(dir, 'hex', -12, 25, 24, 100, 100),
  new Wait(500),
  new Spawn(dir, null, 20, null, 20),
  new Wait(2000),
  new Spawn(dir, null, 128, null, 40),
  new Wait(1200),
  new Pair(dir, 40, 70),
  new Wait(2500),
  new Spawn(dir, null, 200, null, 20),
  new Wait(5000)
]
  return new Script(dir, actions)
}
