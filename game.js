const k = kaboom();

k.loadSprite("bot", './sprites/bot.png');
k.loadSprite("ground", './sprites/ground.png');
k.loadSprite("enemy", './sprites/mee6.png');

// define a scene
k.scene("main", () => {

    // k.add([
    //     k.sprite('bot'),
    //     // k.text("ohhimark", 32),
    //     k.pos(20, 20),
    //     k.scale(0.25),
    //     k.body()
    // ]);

    const char = k.add([
        k.sprite('bot'),
        // k.text("ohhimark", 32),
        k.pos(20, 20),
        k.scale(0.5),
        k.body(),
    ]);
    const map = k.addLevel([
        "      ",
        "  @   ",
        "      ",
        "xxxxxx",
    ], {
        width: 100,
        height: 100,
        "x": [k.sprite("ground"), k.solid(), k.scale(3.1)],
        "@": [k.sprite("enemy"), k.scale(0.1)]
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
});

// map.width();
// map.height();
// map.getPos(x, y);
// map.destroy();

k.start("main");