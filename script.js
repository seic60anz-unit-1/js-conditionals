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