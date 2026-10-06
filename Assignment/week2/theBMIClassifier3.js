/*
IPO
INPUT
    1. weight - (int or float)
    2. height - (int or float)
PROCESS
    1. Get weight and height from user
    2. Calculate BMI using the formula: BMI = weight / height^2
    3. Classify BMI using the following ranges:
        - Underweight: BMI < 18.5
        - Normal weight: 18.5 <= BMI < 25
        - Overweight: 25 <= BMI < 30
        - Obesity: BMI >= 30
OUTPUT
    - BMI value rounded to 2 decimal places
    - BMI category



Pseudo-Code

BEGIN
    GET weight FROM user
    GET height FROM user
    CALCULATE BMI = weight / height^2
    IF BMI < 18.5 THEN
        PRINT "Underweight"
    ELSE IF BMI < 25 THEN
        PRINT "Normal weight"
    ELSE IF BMI < 30 THEN
        PRINT "Overweight"
    ELSE
        PRINT "Obesity"
    END IF
END


*/

let weight = prompt("Enter your weight in kg")
let height = prompt("Enter your height in m")
let Calculate = weight / (height * height)
console.log(Calculate.toFixed(2))

if (Calculate < 18.5) {
    console.log("Underweight")
} else if (Calculate < 25) {
    console.log("Normal weight")
} else if (Calculate < 30) {
    console.log("Overweight")
} else {
    console.log("Obesity")
}

















