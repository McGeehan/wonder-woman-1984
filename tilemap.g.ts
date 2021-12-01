// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020101010401010401010101010101010000000000000500010500000000010101010104000101000100010100050401010101010001010001000101000001010500000400050004010001010500040100010104010100010100010100000101000500040000050000040101050004010001010001010101000101010001010100000004000500000400050004010101000101010101010100010100010101010000000400050005040101050101010100010101010100010101010400040101000500040005040101010101000101010001010001010000000500000401010100010104010101010101010101010101050000000005040504040504040403`, img`
2 . 2 2 2 . 2 2 . 2 2 2 2 2 2 2 
2 . . . . . . . . 2 . . . . . 2 
2 2 2 2 . . 2 2 . 2 . 2 2 . . . 
2 2 2 2 . . 2 2 . 2 . 2 2 . . 2 
2 . . . . . . . . 2 . 2 2 . . . 
2 . 2 2 . 2 2 . 2 2 . 2 2 . . 2 
2 . . . . . . . . . . 2 2 . . . 
2 . 2 2 . 2 2 2 2 . 2 2 2 . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . 2 2 . 2 2 2 2 . 2 2 . 2 2 2 
2 . . . . . . . . . 2 2 . 2 2 2 
2 . 2 2 . 2 2 . 2 2 2 2 . . . 2 
2 . . . . . . . 2 2 2 2 2 . 2 2 
2 . 2 2 . 2 2 . . . . . . . 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles8,myTiles.tile1,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
