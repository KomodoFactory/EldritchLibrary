function gameState() {
    this.ressources = new Ressources();
    this.units = new Units();


    this.getInsanity = function(){
        return this.ressources.insanity;
    }

}