/**
 * FileName: app.js
 * 
 * @author Larissa Zocche
 * @date August 17, 2016
 * 
 * StudentID: 300870340
 * 
 * @description This file is the main javascript file for the web site
 */


var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    
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
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map