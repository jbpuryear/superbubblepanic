module.exports = PlayerSounds


function PlayerSounds(state) {
    return {
        death: state.add.sound('death'),
        jetpack: state.add.sound('jetpack'),
        land: state.add.sound('land'),
        step: state.add.sound('step')
    }
}
