const k = kaboom();

k.loadSprite('bot', 'sprites/bot.png');
k.loadSprite('ground', './sprites/ground2.png');
k.loadSprite('enemy', './sprites/mee6.png');
const SPEED = 200;

k.kaboom({
    fullscreen: true,
    width: 1600,
    height: 900,
    scale: 2,
    startScene: "main",
    debug: true,
    clearColor: null,
    version: "0.5.1"
});

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
        "       ",
        "   @   ",
        "       ",
        "       ",
        "xxxxxxx",
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