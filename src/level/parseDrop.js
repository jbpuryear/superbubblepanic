/*
* The tiled representation of enemies have a recursive JSON list
* of what they drop. It looks like:
*      [
*          item_this_enemy_drops,
*          [
*              left_child's_list,
*              right_child's_list
*          ]
*      ]
* This function parses that list and creates the appropriate nested
* array of game entities.
*/
module.exports = function parseDrop(drop) {
    if (drop === '') return null

    if (Array.isArray(drop)) return drop.map(this.parseDrop, this)

    if (typeof drop === 'string') {
        // Hack. Only objects are valid JSON, so an
        // error lets us know we've hit an item name.
        try {
            var dropOb = JSON.parse(drop)
            return this.parseDrop(dropOb)
        } catch (e) {
            if (e instanceof SyntaxError) {
                console.log('Processing Tiled object drop, ' + drop + '...')
                var item = this.addEntity({x: 0, y: 0, type: drop})
                item.kill()
                return item
            } else {
                throw e
            }
        }
    }
    return null
}
