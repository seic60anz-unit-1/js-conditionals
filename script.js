// Exam Marks
let studentScore = 80
if (studentScore >= 80) {
    console.log("You got an A!")
} else if (studentScore >= 70) {
    console.log("You got a B!")
} else if (studentScore >= 60) {
    console.log("You got a C!")
} else if (studentScore >= 50) {
    console.log("You got a D!")
} else {
    console.log("You need to retake the exam.")
}

// Pizza/Pasta 
const foodPreference = prompt("What do you want to eat?")
const foodPref1 = "pizza"
const foodPref2 = "pasta"
if (foodPreference === foodPref1) {
    console.log("yay pizza!!")
} else if (foodPreference === foodPref2) {
    console.log("ooh I love pasta!!")
} else {
    console.log("brussel sprouts for you!")
}

// Bouncer 1 
const age = 24 
if (age > 21) {
    console.log("Come on in!")
} else if (age > 17 && age < 22) {
    console.log("Come on in (but no drinking)!")
} else if (age < 18) {
    console.log("You're too young to be in here!")
} else if (age > 75) {
    console.log("Are you sure you want to be here?")
} else {
    console.log("")
}