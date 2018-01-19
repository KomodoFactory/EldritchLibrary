class GameState {
    constructor(savestate = "") {
        if (savestate === "") {
            this.ressources = new Ressources(100, 0, 0, 0);
            this.units = {
                deepOnes: 0,
                hounds: 0,
                oldOnes: 0
            };
            this.upgrades = {};
            this.mapstatus = {};
            this.status = {firstStart: "true"};
        } else {
            //TODO: this is probably still wrong
            JSON.parse(savestate);
        }
    }

    getInsanity(){
        return this.ressources.insanity;
    }

    payInsanity(price) {
        this.ressources.insanity -= price;
    }

    gainInsanity(base) {
        this.ressources.insanity += (base * this.ressources.insanityMultiplier);
    }

    checkInsanity(needed) {
        return (this.ressources.insanity >= needed)
    }

    getInsanityMultiplier(){

    }
    increaseInsanityMultiplier(gain){
        this.ressources.insanityMultiplier += gain;
    }

}