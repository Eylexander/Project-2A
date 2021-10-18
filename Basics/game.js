const k = kaboom();

k.loadSprite('bot', 'sprites/bot.png');
k.loadSprite('ground', './sprites/ground2.png');
k.loadSprite('enemy', './sprites/mee6.png');
const SPEED = 200;

// k.kaboom({
//     global: true, // import all kaboom functions to global namespace
//     width: 1600, // width of canvas
//     height: 900, // height of canvas
//     canvas: document.getElementById("game"), // use custom canvas
//     scale: 2, // pixel size (for pixelated games you might want small canvas + scale)
//     clearColor: [0, 0, 1, 1], // background color (default black [0, 0, 0, 1])
//     fullscreen: true, // if fullscreen
//     crisp: true, // if pixel crisp (for sharp pixelated games)
//     debug: false, // debug mode
//     plugins: [ asepritePlugin, ], // load plugins
// });

// define a scene
k.scene("main", () => {
    const char = k.add([
        k.sprite('bot'),
        // k.text("ohhimark", 32),
        k.pos(20, 20),
        k.scale(0.5),
        k.body(),
    ]);

    k.keyDown('right' , () => {
        char.move(SPEED, 0)
    })

    k.keyDown('left' , () => {
        char.move(-SPEED, 0)
    })

    k.keyDown('space' , () => {
        char.move(0, -(2*SPEED))
    })

    const map = k.addLevel([
        "      ",
        "   @  ",
        "      ",
        "      ",
        "xxxxxx",
    ], {
        width: 100,
        height: 100,
        "x": [k.sprite("ground"), k.solid(), k.scale(0.25)],
        "@": [k.sprite("enemy"), k.scale(0.1),
        // k.body(), 
        'danger',
        ]
        // any(ch) {
        //     if(char[ch]) {
        //         sprite(char.sprite),
        //         solid(),
        //         "char",
        //         {
        //             msg: char[ch]
        //         }
        //     }
        // }
    });

    char.collides('danger', () => {
        k.destroy(char)
    });
});

// map.width();
// map.height();
// map.getPos(x, y);
// map.destroy();

k.start("main");