class GameState {
    constructor(savestate = "") {
        if (savestate === "") {
            this.ressources = new Ressources(0, 0, 0, 0);
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
        return this.ressources.insanityMultiplier;
    }

    increaseInsanityMultiplier(gain){
        this.ressources.insanityMultiplier += gain;
    }


    getRooms(){
        return this.ressources.rooms;
    }

    buyRooms(amount){
        this.payInsanity(amount * 5);
        this.gainRooms(amount);
    }

    payRooms(price) {
        this.ressources.rooms -= price;
    }

    gainRooms(base) {
        this.ressources.rooms += (base * this.ressources.roomsMultiplier);
    }

    checkRooms(needed) {
        return (this.ressources.rooms >= needed)
    }

    getRoomsMultiplier(){
        return this.ressources.roomsMultiplier;
    }

    increaseRoomsMultiplier(gain){
        this.ressources.roomsMultiplier += gain;
    }
}