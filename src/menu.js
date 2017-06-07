module.exports = Menu


function Menu() {
    return this
}


Menu.prototype = {
    create: function() {
        this.state.start('Arcade', true, false, '_arcade')
    }, 
}
