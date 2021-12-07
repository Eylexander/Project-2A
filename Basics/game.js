const k = kaboom({
    // width: 420,
    // height: 340,
    scale: 1,
    startScene: "main",
    debug: true,
    fullscreen: false,
    // clearColor: null,
    // version: "0.5.1"
    background: [ 255, 127, 0, ],
});

k.loadSprite('bot', 'sprites/bookshelf.png');
k.loadSprite('ground', './sprites/jukebox_side.png');
k.loadSprite('enemy', './sprites/tnt_side.png');
var SPEED = 200;

// define a level
k.addLevel([
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                                         x",
    "x                                         x",
    "x                                 @       x",
    "x             @                           x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                         @               x",
    "x                                         x",
    "x   @                                     x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    ], {
        width: 32,
        height: 32,
        "x": () => [
            k.sprite("ground"),
            k.solid(),
            k.area(),
            k.scale(2)
        ],
        "@": () => [
            k.sprite("enemy"),
            k.area(),
            k.scale(2),
            "danger",
        ],
        "c": () => [
            k.sprite("bot"),
            k.area(),
            k.scale(2),
            k.body()
        ]
    });

const char = k.add([
    k.sprite('bot'),
    k.pos(10, 10),
    k.scale(2),
    k.area(),
    k.body(),
]);

k.onKeyDown('d' , () => {
    char.move(SPEED, 0)
})

k.onKeyDown('q' , () => {
    char.move(-SPEED, 0)
})

k.onKeyDown('z' , () => {
    char.jump()
})
// k.onKeyPress("f", (c) => {
//     k.fullscreen(!k.isFullscreen())
// })

char.collides('danger', () => {
    k.destroy(char)
});