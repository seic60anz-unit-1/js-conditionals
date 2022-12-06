let age = prompt('How old are you?')
if (age > 21 && age <=75) {
    alert("Come on in!")
} else if (age >= 18 && age <= 21) {
    alert("Come on in (but no drinking)!")
} else if (age < 18 && age > 0) {
    alert("You're too young to be in here!")
} else if (age > 75) {
    alert("Are you sure you want to be here?")
}