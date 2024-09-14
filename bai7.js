// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
var Marks = {
    mass: 78 ,
    height:1.69
}
var John = {
    mass: 92 ,
    height:1.95
}
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
const calcBMI = (x) => {
    var BMI = x.mass / x.height ** 2
    return BMI
}
var BMI_Mark = calcBMI(Marks)
var BMI_John = calcBMI(John)
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if(BMI_Mark > BMI_John) {
    console.log(`Mark's BMI (${BMI_Mark.toFixed(2)}) is higher than John's (${BMI_John.toFixed(2)})!`)
} else {
    console.log(`John's BMI (${BMI_John.toFixed(2)}) is higher than Mark's (${BMI_Mark.toFixed(2)})!`)
}

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.