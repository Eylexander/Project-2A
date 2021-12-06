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

k.loadSprite('bot', 'sprites/bot.png');
k.loadSprite('ground', './sprites/ground2.png');
k.loadSprite('enemy', './sprites/mee6.png');
const SPEED = 200;

// define a scene
k.scene("main", () => {
    k.addLevel([
        "       ",
        "   @   ",
        "       ",
        "       ",
        "       ",
        "xxxxxxx",
    ], {
        width: 32,
        height: 32,
        "x": () => [
            k.sprite("ground"),
            k.solid(),
            k.area()
        ],
        "@": () => [
            k.sprite("enemy"),
            k.area(),
            "danger",
        ]
    });

    // const char = k.add([
    //     k.sprite('bot'),
    //     // k.text("ohhimark", 32),
    //     k.pos(20, 20),
    //     k.scale(0.5),
    //     k.area(),
    //     k.body(),
    // ]);

    // k.keyDown('right' , () => {
    //     char.move(SPEED, 0)
    // })

    // k.keyDown('left' , () => {
    //     char.move(-SPEED, 0)
    // })

    // k.keyDown('space' , () => {
    //     char.move(0, -(2*SPEED))
    // })

    // k.KeyPress("f", (c) => {
    //     fullscreen(!isFullscreen())
    // })

    // char.collides('danger', () => {
    //     k.destroy(char)
    // });
});