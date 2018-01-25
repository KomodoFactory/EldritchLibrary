var gamestate = new GameState();
var lastFrameTimeMs = 0;
var maxFPS = 60;
var timestep = 1000 / maxFPS;
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
        frameID = requestAnimationFrame(function (timestamp) {
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

function stop() {
    running = false;
    started = false;
    cancelAnimationFrame(frameID);
}

//---------------------------------//

function calculateIncomes(delta){
    insanityIncome = 0.001 * delta;
    gamestate.gainInsanity(insanityIncome);

    roomIncome = 0.001 * delta;
    gamestate.gainRooms(roomIncome);
}

function update(delta) {
    calculateIncomes(delta);
    //TODO:
    //checkUpgrade();
    //checkTitles();
    //checkStory();
}

function draw() {
    document.getElementById("insanity_amount").innerHTML = Math.floor(gamestate.getInsanity());
    document.getElementById("rooms_amount").innerHTML = Math.floor(gamestate.getRooms());
    document.getElementById("fpsDisplay").innerHTML = Math.ceil(fps) + ' FPS';
}

function panic() {
    console.log("Calculating missed Frames.");
    update(delta);
    delta = 0;
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
    if (timestamp > lastFPSUpdate + 1000) {
        fps = 0.25 * framesThisSecond + (1 - 0.25) * fps;

        lastFPSUpdate = timestamp;
        framesThisSecond = 0;
    }
    framesThisSecond++;

    while (delta >= timestep) {
        update(timestep);
        delta -= timestep;

        //sanity check
        if (delta >= 240) {
            panic(); //fix things
        }
    }
    draw();
    requestAnimationFrame(mainLoop);
}

function readBooks() {
    document.title = "A Cozy Room";
    gamestate.gainInsanity(1);
}

function exploreRooms() {
    gamestate.buyRooms(1);
}