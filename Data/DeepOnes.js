function DeepOnes(amountDeepOnes) {
    this.
    this.basePrice = 5;
    this.rooms = rooms;
    this.relics = relics;
    this.rituals = rituals;

    this.payInsanity = function(price){
        this.insanity -= price;
    }
    this.gainInsanity = function(worth){
        this.insanity += worth;
    }
    this.checkInsanity = function(needed){
        if (this.insanity >= needed) {
            return true;
        }
    }

    this.payRooms = function(price){
        this.rooms -= price;
    }
    this.gainRooms = function(worth){
        this.rooms += worth;
    }
    this.checkRooms = function(needed){
        if (this.rooms >= needed) {
            return true;
        }
    }

    this.payRelics = function(price){
        this.relics -= price;
    }
    this.gainRelics = function(worth){
        this.relics += worth;
    }
    this.checkRelics = function(needed){
        if (this.relics >= needed) {
            return true;
        }
    }

    this.payRituals = function(price){
        this.rituals -= price;
    }
    this.gainRituals = function(worth){
        this.rituals += worth;
    }
    this.checkRituals = function(needed){
        if (this.rituals >= needed) {
            return true;
        }
    }
}