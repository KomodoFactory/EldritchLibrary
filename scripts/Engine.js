var gamestate = new GameState();
var lastFrameTimeMs = 0;
var maxFPS = 60;
var timestep = 1000 / maxFPS;
var numUpdateSteps = 0;
var delta = 0;
var fps = 60;
var framesThisSecond = 0;
var lastFPSUpdate = 0;

function loadGameState() {
    //if(gamestateIsNotThere){
    gamestate = new GameState();
    /*
    }else{
    loadGamestate()
    }
    */
    return gamestate;
}


//TODO: This is pointless at the moment!
var runnning = false;
var started = false;


function start() {
    if (!started) { // don't request multiple frames
        started = true;
        // Dummy frame to get our timestamps and initial drawing right.
        // Track the frame ID so we can cancel it if we stop quickly.
        frameID = requestAnimationFrame(function(timestamp) {
            draw(1); // initial draw
            running = true;
            // reset some time tracking variables
            lastFrameTimeMs = timestamp;
            lastFpsUpdate = timestamp;
            framesThisSecond = 0;
            // actually start the main loop
            frameID = requestAnimationFrame(mainLoop);
        });
    }
}

function stop(){
	running = false;
	started = false;
	cancelAnimationFrame(frameID);
}
//---------------------------------//


function update(delta) {
    //TODO:
    //calculateIncomes();
    //addIncome();
    //checkUpgrade();
    //checkTitles();
    //checkStory();

    insanityIncome = 0.001 * delta;
    gamestate.gainInsanity(insanityIncome);
}

function draw() {
    document.getElementById("insanity_amount").innerHTML = Math.floor(gamestate.getInsanity());
    document.getElementById("fpsDisplay").innerHTML = Math.ceil(fps) + ' FPS';
}

function panic(){
    console.log("VERBY BAD!!");
    delta = 0; //discard the unsimulated time
    //TODO: THIS SHOULD NOT HAPPEN! EVER! WORK AROUDN IT LATER !
}

function mainLoop(timestamp) {
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }

    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    //tracking the fps... why ever
    //TODO: Probably will change position
    if(timestamp > lastFPSUpdate + 1000){
        fps = 0.25 * framesThisSecond + (1 - 0.25) * fps;

        lastFPSUpdate = timestamp;
        framesThisSecond = 0;
    }
    framesThisSecond++;

    while (delta >= timestep) {
        update(timestep);
        delta -= timestep;

        //sanity check
        if(++numUpdateSteps >= 240){
            panic(); //fix things
            break; //bail out
        }

    }
    draw();
    requestAnimationFrame(mainLoop);
}

function readBook(){
    document.title = "A Cozy Room";
    gamestate.gainInsanity(1);
}
function betterBook(){
    gamestate.increaseInsanityMultiplier(1);
    update();
}