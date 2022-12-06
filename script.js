//Exam Mark
let studentScore = prompt("What is your score?")
if (studentScore >= 80) {
    console.log('You\'ve got an A.')
} else if (studentScore >= 70) {
    console.log('You\'ve got a B.')
} else if (studentScore >= 60) {
    console.log('You\'ve got a C.')
} else if (studentScore >= 50) {
    console.log('You\'ve got a D.')
} else {
    console.log('You have to re-take.')
}

//Pizza/Pasta
let pizza = prompt("Do you like pizza?","Y/N")
if (pizza == "Y" || pizza == "y") {
    console.log("yay pizza!")
} else {
    let pasta = prompt("Do you like pasta?","Y/N")
    if (pasta == "Y" || pasta == "y") {
        console.log("yay pasta!")
    } else {
        console.log("brussel sprouts for you!")
    }
}

//Bouncer 1
let age = prompt("What is your age?")
if (age > 75) {
    console.log("Are you sure you want to be here?")
} else if (age >= 21) {
    console.log("Come on in!")
} else if (age >= 18) {
    console.log("Come on in (but no drinking)!")
} else {
    console.log("You're too young to be in here!")
}

//Bouncer 2
let hasID = confirm("Do you have an ID?")
if (hasID === true) {
    let age = prompt("What is your age?")
    if (age > 75) {
        console.log("Are you sure you want to be here?")
    } else if (age >= 21) {
        console.log("Come on in!")
    } else if (age >= 18) {
        console.log("Come on in (but no drinking)!")
    } else {
        console.log("You're too young to be in here!")
    }
} else {
    console.log("No ID, no entry.")
}

//Valentine's Day Flowchart

let relationship = confirm("Are you in a relationship?")
if (relationship === true) {
    let serious = confirm("Is it serious?")
    if (serious === true) {
        console.log("Romantic dinner for two")
    } else {
        console.log("Head to the closest bar")
    }
} else {
    console.log("Head to the closest bar")
}