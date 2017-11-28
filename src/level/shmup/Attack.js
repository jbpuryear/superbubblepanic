module.exports = Attack


function Attack(dir, type, delay, x, y) {
  this.director = dir
  this.type = type || 'enemy'
  this.delay = delay || 0
  this.x = x || 0
  this.y = y || 0

  this.finished = false
  this.index = -1
  this.current = null
  this.children = []
}


Attack.prototype = {
  start: function(idx) {
    this.finished = false
    this.index = -1
    if (this.delay > 0) this.state.time.events.add(this.delay, this.init, this)
    else this.init()
  },


  update: function() {
    var cur = this.current
    while (cur && cur.finished) {
      this.advance()
      cur = this.current
    }
  },


  advance: function() {
    if (this.finished) return
    this.index++
    if (this.index >= this.children.length) {
      this.finished = true
      this.current = null
      return
    }
    this.current = this.children[this.index]
    this.current.start()
  },


  init: function() {
    this.advance()
  },
}


// [Single]


Attack.Single = function(dir, type, delay, x, y, width, velx, vely) {
  Attack.call(this, dir, type, delay, x, y)
  this.width = width ||  12
  this.velx = velx || 0
  this.vely = vely || 40
}


Attack.Single.prototype = Object.create(Attack.prototype)


Attack.Single.prototype.init =  function() {
  console.log('weh')
  this.director.spawn(this.type, this.x, this.y, this.width, this.velx, this.vely)
  Attack.prototype.init.call(this)
}

