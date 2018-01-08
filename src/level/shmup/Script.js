module.exports = Script


var DEFAULT_WIDTH = 12
var DEFAULT_VELY = 400


function Script(dir, actions) {
  this.next = 0
  this.current = null
  this.finished = false
  this.actions = actions || []
}


Script.prototype = {
  start: function(idx) {
    idx = idx || 0
    this.finished = false
    this.next = idx
    this.advance()
  },

  advance: function() {
    if (this.next === this.actions.length) {
      this.finished = true
      this.current = null
      return null
    }
    this.current = this.actions[this.next]
    this.current.start()
    this.next++
    return this.current
  },

  update: function(dt) {
    if (this.finished) { return }
    if (typeof this.current.update === 'function') { this.current.update(dt) }
    while(this.current && this.current.finished) {
      this.advance()
    }
  }
}


// [Wait]

Script.Wait = function(time) {
  this.delay = time
  this.timer = time
  this.finished = false
}

Script.Wait.prototype = {
  start: function() {
    this.timer = this.delay
    this.finished = false
  },

  update: function(dt) {
    this.timer -= dt
    if (this.timer <= 0) { this.finished = true }
  }
}


// [Spawn]


Script.Spawn = function(dir, type, x, y, width, velx, vely) {
  this.director = dir
  this.type = type || 'enemy'
  this.width = width ||  DEFAULT_WIDTH
  this.x = x || 0
  this.y = y || -width/2 - 2
  this.velx = velx || 0
  this.vely = vely || DEFAULT_VELY
}

Script.Spawn.prototype = {
  start: function() {
    this.director.spawn(this.type, this.x, this.y, this.width, this.velx, this.vely)
    this.finished = true
  },
}


// [Multi]

Script.Multi = function(dir, children) {
  this.dir = dir
  this.children = children || []
}

Script.Multi.prototype = {
  start: function() {
    for (var i = 0; i < this.children.length; ++i) {
      this.children[i].start()
    }
  },

  update: function(dt) {
    var finished = true
    for (var i = 0; i < this.children.length; ++i) {
      var child = this.children[i]
      if (typeof child.update === 'function') { child.update(dt) }
      if (!child.finished) { finished = false }
    }
    this.finished = finished
  }
}

// [Curtain]

Script.Curtain = function(dir, type, count, rate, width, velx, vely, offset, span) {
  rate = rate || 0
  offset = offset || 0
  span = span || dir.state.game.width

  var actions = []
  var dx = span / (count - 1)
  var y = -width/2 - 2
  for (var i = 0; i < count; ++i) {
    actions.push( new Script.Spawn(dir, type, dx*i+offset, y, width, velx, vely) )
    if (rate > 0 && i !== count-1) { actions.push( new Script.Wait(rate) ) }
  }
  Script.call(this, dir, actions)
}

Script.Curtain.prototype = Object.create(Script.prototype)

