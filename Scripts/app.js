var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var rollButton;
    var blank;
    var die1;
    var die2;
    var number1;
    var number2;
    var number3;
    var number4;
    var number5;
    var number6;
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
        if (die1 == 1) {
            number1 = new createjs.Bitmap("Assets/images/1.png");
            stage.addChild(number1);
        }
        if (die1 == 2) {
            number2 = new createjs.Bitmap("Assets/images/2.png");
            stage.addChild(number2);
        }
        if (die1 == 3) {
            number3 = new createjs.Bitmap("Assets/images/3.png");
            stage.addChild(number3);
        }
        if (die1 == 4) {
            number4 = new createjs.Bitmap("Assets/images/4.png");
            stage.addChild(number4);
        }
        if (die1 == 5) {
            number5 = new createjs.Bitmap("Assets/images/5.png");
            stage.addChild(number5);
        }
        if (die1 == 6) {
            number6 = new createjs.Bitmap("Assets/images/6.png");
            stage.addChild(number6);
        }
        stage.update();
    }
    function rollButton_clicked() {
        die1 = Math.floor((Math.random() * 6) + 1);
        console.log(die1);
        die2 = Math.floor((Math.random() * 6) + 1);
        console.log(die2);
    }
    function main() {
        //dice images
        blank = new createjs.Bitmap("Assets/images/blank.png");
        //roll button object
        rollButton = new createjs.Bitmap("Assets/images/rollButton.png");
        rollButton.x = 330;
        rollButton.y = 240;
        stage.addChild(blank);
        stage.addChild(rollButton);
        rollButton.on("click", rollButton_clicked);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map