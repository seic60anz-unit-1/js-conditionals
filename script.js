// - If a student scores 80 or more, tell them they've got an A.
// - If they score 70 or more, tell them they've got a B.
// - If they score 60 or more, tell them they've got a C.
// - If they score 50 or more, tell them they've got a D.
// - If they score below 50, tell them they have to re-take the exam.

const studentScore = 70

if (studentScore > 80) {
    console.log("You've got an A!");
} else if (studentScore > 70) {
    console.log("You've got a B!");
} else if (studentScore > 60) {
    console.log("You've got a C");
} else if (studentScore > 50) {
    console.log("You've got a D");
} else {console.log("You will have to re-take the exaxm")}

// ### Pizza/Pasta

// 1. Use the [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) function to record what a user would like to eat in a variable
// 1. Check if they like pizza, and if they do then output `"yay pizza!!"`
// 1. Otherwise check if they like pasta, and if they do then output `"ooh I love pasta!!"`
// 1. If they don't like either one, then output `"brussel sprouts for you!"`

let eat = prompt("What do you like to eat?");

if (eat === "pizza") {
    alert("yay pizza!");
} else if (eat === "pasta") {
    alert("ooh I love pasta!!");
} else {alert("brussel sprouts for you!");
}

// ### Bouncer 2

// Bar patrons must have an ID if the bouncer is even going to consider what age they are.
// - If the patron has an ID, the bouncer will then check if they are of the proper age
// - If the patron does not have an ID, the bouncer will tell them `"No ID, no entry."`

// > Hint: Whether the patron has an ID or not can be stored in a `hasId` variable. What do you think the stored data type should be?

const hasId = true
const age = 25
if (hasId === true) {
    if (age > 18) {
        console.log("You may come in!");
    }
} else if (hasId === true) {
    if (age < 18) {
        console.log("You're too young to come in!");
    }
} else {
    console.log("No ID, no entry!");
}

// Relationship excercise

let inRelationship = true
let isItSerious = true

if (inRelationship = true) {
    if (isItSerious = true) {
        console.log("Romantic dinner for two")
    } 
} else {console.log("Head to the cloest")}

// ### Letter to Santa Flowchart

// - Implement the flowchart below in code.
// - For each node in the flowchart that isn't a question, output the text to the console.
//   i.e.
//   ```js
//   console.log('Write your wishlist and letter to Santa.')
//   console.log('Address your envelope with "1 Candy Cane Lane, North Pole".')

let naughty = true
let stamp = true

if (naughty === true) {
    console.log("Do a good deed!")
} 

if (naughty === false) {
    console.log("Write your wish list and letter to Santa")
    console.log("Address your envelope with \"1 Candy Cane Lane, North Pole")
    console.log("Fold and place your letter in an enveleope")
    if (stamp === true) {
        console.log("Place it on the envelope")
        console.log("You're done! Let's mail your letter to Santa")
    } else {
        console.log("Get a stamp from the teacher")
        console.log("Place it on the envelope")
        console.log("You're done! Let's mail your letter to Santa")
    }
} 