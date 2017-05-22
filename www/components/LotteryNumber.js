/**
 * Created by danke on 5/18/17.
 */

function LotteryNumber(series, powerball) {
    this.baseNumbers = series;
    this.powerNumber = powerball;

    this.toString = function() {
        var res = baseNumbers.join(" ");
        if (powerNumber)
            res += " " + powerNumber;
        return res;
    }
}