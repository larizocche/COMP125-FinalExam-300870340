var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var rollButton;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update();
    }
    function main() {
        //roll button object
        rollButton = new createjs.Bitmap("Assets/images/rollButton.png");
        rollButton.x = 330;
        rollButton.y = 240;
        stage.addChild(rollButton);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map