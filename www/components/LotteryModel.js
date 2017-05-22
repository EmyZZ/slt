function LotteryModel() {
    this.lotterName = null; // String
    this.predictedPrizeAnnuity = null;
    this.predictedPrizeCash = null;
    this.nextDraw = null; // dateTime
    this.lastWinNumber = null; // LotteryNumber
    this.extraLines = []; // array of String
    this.prizes = []; // array of PrizeItem

    this.fake = function() {
        this.lotteryName = "Fake Lottery";
        this.predictedPrizeAnnuity = "100M";
        this.predictedPrizeCash = "55M";
        this.nextDraw = "05/10/2017";
        this.lastWinNumber = new LotteryNumber([20, 31, 41, 15, 8], 7);
        this.extraLines = [];
        this.prizes = [];
    }
}