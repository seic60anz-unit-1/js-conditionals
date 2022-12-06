// Booleans and Comparison Operators
// Done in the README.md file

// Exam marks
const studentScore = 78;

if (studentScore >= 80) {
    console.log('Amazing! You\'ve got a A');
} else if (studentScore >= 70) {
    console.log(`Good job! You've got a B`);
} else if (studentScore >= 60) {
    console.log(`Not so bad! You've got a C`);
} else if (studentScore >= 50) {
    console.log(`Not so good! You've got a D`);
} else {
    console.log(`You have to re-take the exam`);
}

// Pizza/Pasta
const userFood = prompt(`What would you like to eat?`);
console.log(`user wants to eat ${userFood.toLocaleLowerCase()}`);
if (userFood.toLowerCase() === 'pizza') {
    console.log(`Yay pizza!`);
} else if (userFood.toLocaleLowerCase() === 'pasta') {
    console.log('ooh I love pasta');
} else {
    console.log('Brussel sprouts for you');
}

// Bouncer 1
const age = 24;
if (age > 75) {
    console.log('Are you syre you want to be here?');
} else if (age > 21) {
    console.log('Come on in');
} else if (age >= 18) {
    console.log('Come on in (but no drinking)');
} else {
    console.log('You are too young to be in here!');
}

// Bouncer 2
const hasId = true;
if (hasId) {
    if (age > 75) {
        console.log('Are you syre you want to be here?');
    } else if (age > 21) {
        console.log('Come on in');
    } else if (age >= 18) {
        console.log('Come on in (but no drinking)');
    } else {
        console.log('You are too young to be in here!');
    }
} else {
    console.log('No ID, no entry!')
};

// Valentine's Day flowchart
const hasRelationship = true;
const isSerious = false;

if (hasRelationship && isSerious) {
    console.log('You got a voucher of a romantic dinner for two');
} else {
    console.log('Head the closet bar');
}

// Letter to Santa flowchart
const isNice = true;
const hasStamp = false;
if (isNice) {
    console.log('Write your wishlist and letter to Santa')
    console.log('Address your envelop with "1 Candy Can Lane, North Pole"');
    console.log('Fold and place your letter in your envelop');
    if (!hasStamp) {
        console.log('Get a stamp from teacher');
    }
    console.log('Place it on the envelop');
    console.log(`You've done! Let's mail your letter to Santa`);
};