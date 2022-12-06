//exam score

const studentScore = (65)

if (studentScore >= 80){
    console.log("You got an A");
} else if (studentScore >=70){
    console.log("You got a B");
} else if (studentScore >= 60) {
    console.log("You got a C");
} else if (studentScore >= 50) {
    console.log("You got a D");
} else {
    console.log("You need to re-take the exam.");
}

//food

const food = prompt ("What would you like to eat?")

if (food === "pizza"){
    console.log("yay pizza!!");
} else if (food === "pasta") {
    console.log("ooh I love pasta!!");
} else {
    console.log("brussel sprouts for you");
}

//bouncer

const age = (90)
const hasId = (false)

if (hasId === true){
    if (age > 21 && age <76) {
        console.log("come on in!");
    } else if (age > 17 && age < 22) {
        console.log("Come on it (but no drinking)!")
    }else if (age < 18){
        console.log("You're too young to be in here!");
    } else {
        console.log("Are you sure you want to be here?");
}
} else {
    console.log("No ID, no entry");
}

// Valentines

const relationshipStatus = (true)
const relationshipSerious = (false)

if (relationshipStatus === true && relationshipSerious === true){
    console.log("Romantic dinner for two");
} else {
    console.log("Head to the closest bar")
}

//Christmas

const childBehaviour = (false)
const stamp = (false)

if (childBehaviour && stamp === true){
    console.log('Write your wishlist and letter to Santa.')
    console.log('Address your envelope with "1 Candy Cane Lane, North Pole".')
    console.log("Fold and place your letter in your envelope.");
    console.log("Place it in an envelope.");
    console.log("You're done! Let's mail your letter to Santa!");
} else if (childBehaviour === true && stamp === false) {
    console.log('Write your wishlist and letter to Santa.')
    console.log('Address your envelope with "1 Candy Cane Lane, North Pole".')
    console.log("Fold and place your letter in your envelope.");
    console.log("Get a stamp from the teacher.");
} else {
    console.log("Do a good deed!");
}
