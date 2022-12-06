//Exam Marks
// const studentScore = 77
// if (studentScore >= 80) {
//     console.log('A! Great job')
// } else if (studentScore >= 70) { 
//     console.log('B! Little bit more')
// } else if (studentScore >= 60) {
//     console.log('C! Sound')
// } else if (studentScore >= 50) {
//     console.log('D! We can improve for sure!')
// } else if (studentScore <= 50) {
//     console.log('Re-take the exam and have another shot')
// }
//Pizza/Pasta
// const favouriteFood = prompt ("What's your favourite food?")
// if (favouriteFood === "pizza") {
//     console.log('yay pizza!')
// } else if (favouriteFood === "pasta") {
//     console.log("ooh I love pasta!!")
// } else {
//     console.log("bruseel sprouts for you!")
// }
//Bouncer 1
// const age = prompt ("What's your age?")
// if (age > 75) {
//     console.log ("Are you sure you want to be here?")
// } else if (age >= 21 ) {
//     console.log("Come on in!")
// } else if (age < 21 && age >= 18) {
//     console.log("Come on in (but no drinking)!")
// } else if (age < 18) {
//     console.log ("You're too young to be in here!")
// }
//Bouncer 2 
// const hasId = prompt ("Do you have id?")
// if (hasId === "yes") {
//     const age = prompt ("What's your age?")
//  if (age > 75) {
//         console.log ("Are you sure you want to be here?")
//     } else if (age >= 21 ) {
//         console.log("Come on in!")
//     } else if (age < 21 && age >= 18) {
//         console.log("Come on in (but no drinking)!")
//     } else if (age < 18) {
//         console.log ("You're too young to be in here!")
//     }
// } else if (hasId === "no") {
//     console.log ("No ID, no entry.")
// }
// Valentine's Day Flowchart
// const Relationship = prompt ("Are you in a relationship?")
// if (Relationship === "yes") {
//     const Serious = prompt ("Is it serious?")
//   if (Serious === "yes") {
//         console.log ("Romantic dinner for two")
//     } else if (Serious === "no") {
//         console.log ("Head to the closest bar!")
// } else if (Relationship === "no") {
//     console.log ("Head to the closest bar!")
// }
// }
//Letter to Santa Flowchart
const santaChoice = prompt ("Have you been naughty or nice?")
if (santaChoice === "Nice!") {
    console.log("Write your wishlist and letter to Santa.")
    console.log('Address your envelope with "1 Candy Cane Lane, North Pole".')
    console.log("Fold and place your letter in your envelope")
    const stamp = prompt ("Do you have a stamp?")
    if (stamp === "yes") {
        console.log("Place it on the envelope")
        console.log("You're done! Let's mall your letter to Santa!")
    } else if (stamp === "no") {
        console.log("Get a stamp from teacher")
        console.log("Place it on the envelope")
        console.log("You're done! Let's mall your letter to Santa!")
    }
} else if (santaChoice === "Naughty!") {
    console.log("Do a good deed!")
}
