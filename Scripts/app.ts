module core {
    "use strict";

    let canvas: HTMLElement;
    let stage: createjs.Stage;
    let rollButton;
    let blank;
    let die1;
    let die2;
    let die1result;
    let die2result;


    // app entry function
    function init(): void {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); 
        createjs.Ticker.framerate = 60; 
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
 
    function gameLoop(): void {

        stage.update(); 
    }


function rollButton_clicked():void {
       die1 = Math.floor((Math.random() * 6) + 1);
       console.log (die1);
    }


    function main(): void {
        //dice images
        blank = new createjs.Bitmap ("Assets/images/blank.png");

        //roll button object
       rollButton = new createjs.Bitmap ("Assets/images/rollButton.png");
       rollButton.x = 330;
       rollButton.y = 240;
       stage.addChild(blank);
       stage.addChild(rollButton);
       die1 = new createjs.Text (die1);
       stage.addChild(die1);
       
       rollButton.on("click", rollButton_clicked);
       

    }

    window.addEventListener("load", init);

}