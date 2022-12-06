// a	b	a AND b
// true	true	true
// true	false	false
// false	true	false
// false	false	false

// a	b	a OR b
// true	true	true
// true	false	true
// false	true	true
// false	false	false

// a	b	a != b
// 3	3	false
// 1	5	true
// 2	"2"	false

// a	b	!a AND (a OR b)
// true	true	false
// true	false	false
// false	true	true
// false	false	false

// Exam Marks
// If a student scores 80 or more, tell them they've got an A.
// If they score 70 or more, tell them they've got a B.
// If they score 60 or more, tell them they've got a C.
// If they score 50 or more, tell them they've got a D.
// If they score below 50, tell them they have to re-take the exam.

let studentScore = NaN

if (studentScore >= 80){
    console.log("A")
} else if (studentScore >= 70){
    console.log("B")
} else if (studentScore >= 60){
    console.log("C")
} else if (studentScore >= 50){
    console.log("D")
} else {
    console.log("have to re-take the exam")
}

// Pizza/Pasta
let whatWouldYouLikeToEat = prompt('what would you like to eat? pizza or pasta')

if(whatWouldYouLikeToEat === 'pizza'){
    console.log("yay pizza!!")
} else if(whatWouldYouLikeToEat === 'pasta'){
    console.log("ooh I love pasta!!")
} else {
    console.log("brussel sprouts for you!")
}

// Bouncer 1
let age = 21

if(age >= 75){
    console.log("Are you sure you want to be here?")
} else if (age >= 21){
    console.log("Come on in!")
} else if (age >= 18){
    console.log("Come on in (but no drinking)!")
} else {
    console.log("You're too young to be in here!")
}

// Bouncer 2
let age2 = 21
let haveCard = true

if(haveCard = true){
    if(age >= 75){
        console.log("Are you sure you want to be here?")
    } else if (age >= 21){
        console.log("Come on in!")
    } else if (age >= 18){
        console.log("Come on in (but no drinking)!")
    } else {
        console.log("You're too young to be in here!")
    }
} else {
    console.log("No ID, no entry.")
}
// Valentine's Day Flowchart
let relationship = true
let serious =true

if(relationship = true){
    if(serious = true){
        console.log("Romantic dinner for two")
    } else{
        console.log("Head to the closet bar")
    }
} else{
    console.log("Head to the closet bar")
}

// Letter to Santa Flowchart

let nice = true
let stamp = true

if(nice = true){
    console.log('Write your wishlist and letter to Santa.')
    console.log('Address your envelope with "1 Candy Cane Lane, North Pole".')
    console.log('Fold and place your letter in your envelop.')
    console.log('Do you have a stamp')
    if(stamp = true){
        console.log('Place it on the envelop.')
        console.log('You\'re done! Let\'s mail your letter to Santa!')
    } else{
        console.log('Get a stamp from teacher.')
        console.log('Place it on the envelop.')
        console.log('You\'re done! Let\'s mail your letter to Santa!')
    }
} else{
    console.log('Do a good deed!')
}