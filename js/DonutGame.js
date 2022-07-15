class DonutGame {
    constructor() {
        this.donutCount = 0;
        this.donutAutoClickerAmount = 0;
        this.donutAutoClickerPrice = 100;
        this.donutMultiplierAmount = 0;
        this.donutMultiplierPrice = 10;
        this.donutCurrentMultiplier = 1;
    }

    //Getters

    getDonutCount(){
        return this.donutCount;
    }
    getDonutAutoClickerAmount(){
        return this.donutAutoClickerAmount;
    }
    getDonutAutoClickerPrice(){
        return this.donutAutoClickerPrice;
    }
    getDonutMultiplierAmount(){
        return this.donutMultiplierAmount;
    }
    getDonutMultiplierPrice(){
        return this.donutMultiplierPrice;
    }
    getDonutCurrentMultiplier(){
        return this.donutCurrentMultiplier;
    }
    click(){
        this.donutCount += Math.round(this.donutCurrentMultiplier);
    }

    //Auto Clicker functions

    buyAutoClicker(){
        this.donutAutoClickerAmount += 1;
        this.subtractAutoClickerCost();
        this.updateClickerCost();
    }
    subtractAutoClickerCost(){
        this.donutCount -= this.donutAutoClickerPrice;
    }
    updateClickerCost(){
        this.donutAutoClickerPrice += Math.round(this.donutAutoClickerPrice * 0.1);
    }

    buyIfCanAffordAutoClicker(){
        if (this.checkIfCanAffordAutoClicker()){
            this.buyAutoClicker();
        } else {
            console.log("not enough donuts")
        }
    }
    checkIfCanAffordAutoClicker(){
        if (this.donutCount >= this.donutAutoClickerPrice){
            return true;
        } else {
            return false;
        }
    }
    autoClickerActive(){
        for (let i = 0; i <this.donutAutoClickerAmount; i++){
            this.click();
        }
    }

    //Multiplier Functions

    buyMultiplier(){
        this.donutMultiplierAmount += 1;
        this.updateMultiplierValue();
        this.subtractMultiplierAmount();
        this.updateMultiplierCost();
    }

    updateMultiplierValue(){
        this.donutCurrentMultiplier = Math.round((this.donutCurrentMultiplier += 0.2) * 100) / 100;
    }

    subtractMultiplierAmount(){
        this.donutCount -= this.donutMultiplierPrice;
    }

    updateMultiplierCost(){
        this.donutMultiplierPrice += Math.round(this.donutMultiplierPrice * 0.1)
    }

    checkIfCanAffordMultipler(){
        if(this.donutCount >= this.donutMultiplierPrice){
            return true;
        } else {
            return false;
        }
    }

    buyIfCanAffordMultiplier(){
        if(this.checkIfCanAffordMultipler()){
            this.buyMultiplier();
        } else {
            console.log("not enough donutssss");
        }
    }

    // reset function

    resetGame(){
        this.donutCount = 0;
        this.donutAutoClickerAmount = 0;
        this.donutAutoClickerPrice = 100;
        this.donutMultiplierAmount = 0;
        this.donutMultiplierPrice = 10;
        this.donutCurrentMultiplier = 1;
    }
}

export default DonutGame;


