module core {
    "use strict";

    let canvas: HTMLElement;
    let stage: createjs.Stage;
    let rollButton;


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

    function main(): void {
        //roll button object
       rollButton = new createjs.Bitmap ("Assets/images/rollButton.png");
      
       rollButton.x = 330;
       rollButton.y = 240;
       stage.addChild(rollButton);

    }

    window.addEventListener("load", init);

}