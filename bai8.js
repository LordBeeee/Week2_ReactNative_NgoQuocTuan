// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:


// 1. Create an array 'bills' containing all 10 test bill values
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52]
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
var tips =[]
var totals =[]
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
const calcTip = (x) => {
    
    for(let i = 0 ; i < x.length;i++) {
        let tip = (x[i] >= 50 && x[i] <= 300) ? x[i]*15/100 : x[i]*20/100
        tips.push(tip)
    }
    return tips
}
var tips = calcTip(bills)
const calcTotal = (a,b) => {
    for(let i = 0 ;i <a.length;i++) {
        total = a[i] +b[i]
        totals.push(total)
    }
    return totals
}
var totals = calcTotal(bills,tips)
for(let i = 0 ;i <totals.length;i++) {
    console.log("Total:"+totals[i])
}

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �