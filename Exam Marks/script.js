let studentScore = prompt('please enter your score')
if (studentScore >= 80 && studentScore <= 100) {
    alert('you\'ve got an A')
} else if (studentScore >= 70 && studentScore <= 79) {
    alert('you\'ve got a B')
} else if (studentScore >= 60 && studentScore <= 69) {
    alert('you\'ve got a C') 
} else if (studentScore >= 50 && studentScore <= 59) {
    alert('you\'ve got a D')
} else if (studentScore > 100) {
    alert('invaild score please check your score')
} else if (studentScore < 50 && studentScore >= 0) {
    alert('please re-take the exam')
} else {
    alert('invaild score please check your score')
} 
