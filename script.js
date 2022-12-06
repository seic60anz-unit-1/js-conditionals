// EXAM MARKS

//number between 0 and 100
const studentScore = 80

if (studentScore >= 80) {
    console.log("You have got an A")
} else if (studentScore >= 70) {
    console.log("You have got a B")
} else if (studentScore >= 60) {
    console.log("You have got a C")
} else if (studentScore >= 50) {
    console.log("You have got a D")
} else {
    console.log("You have to re-take the exam")
}

//------------------------------------------
// PIZZA / PASTA

// const userChoice = prompt("What would you like to eat?")

// if (userChoice === "pizza") {
//     console.log("yay pizza!!")
// } else if (userChoice === "pasta") {
//     console.log("ooh I love pasta!!")
// } else {
//     console.log("brussel sprouts for you!")
// }

//------------------------------------------
// BOUNCER 1

const age = 35

if (age > 75) {
    console.log("You're too young to be in here!")
} else if (age > 21) {
    console.log("Come on in!")
} else if (age >= 18 && age <= 21) {
    console.log("Come on in (but no drinking)!")
} else if (age < 18) {
    console.log("You're too young to be in here!")
}

//------------------------------------------
// BOUNCER 2

const hasID = true

if (hasID) {
    // copied code from BOUNCER 1
    if (age > 75) {
        console.log("You're too young to be in here!")
    } else if (age > 21) {
        console.log("Come on in!")
    } else if (age >= 18 && age <= 21) {
        console.log("Come on in (but no drinking)!")
    } else if (age < 18) {
        console.log("You're too young to be in here!")
    }
} else {
    console.log("No ID, no entry.")
}

//------------------------------------------
// VALENTINE'S DAY FLOWCHART

const inARelationship = true
const isSerious = true

if (inARelationship) {
    if (isSerious) {
        console.log("Romantic dinner for 2")
    } else {
        console.log("Head to the closest bar")
    }
} else {
    console.log("Head to the closest bar")
}

//------------------------------------------
// LETTER TO SANTA FLOWCHART

const naughtyOrNice = prompt("Have you been naughty or nice?")

if (naughtyOrNice === "nice") {
    console.log('Write your wishlist and letter to Santa.')
    console.log('Address your envelope with "1 Candy Cane Lane, North Pole".')
    console.log('Fold and place your letter in your envelope.')

    const hasStamp = prompt("Do you have a stamp?")
    if (hasStamp === "yes") {
        console.log('Place it on the envelope.')
        console.log('You\'re done! Let\'s mail your letter to Santa!')
    } else {
        console.log('Get a stamp from teacher.')
        console.log('Place it on the envelope.')
        console.log('You\'re done! Let\'s mail your letter to Santa!')
    }
} else {
    console.log("Do a good deed")
}