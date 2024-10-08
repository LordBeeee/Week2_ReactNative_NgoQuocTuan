// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
data_1 = [17, 21, 23]
data_2 = [12, 5, -5, 0, 4]
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
const printForecast = (x) => {
    for(let i=0;i<x.length;i++) {
        console.log(`Ngày số ${i+1}:${x[i]}oC`)
    }
}
printForecast(data_1)
printForecast(data_2)
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]