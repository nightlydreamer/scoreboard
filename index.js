let homeSum = 0;
let guestSum = 0;

let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

function plusOne(s) {
    if (s === 'home') {
        homeSum += 1;
    } else {
        guestSum += 1;
    }
    homeScore.textContent = homeSum;
    guestScore.textContent = guestSum;
}

function plusTwo(s) {
    if (s === 'home') {
        homeSum += 2;
    } else {
        guestSum += 2;
    }
    homeScore.textContent = homeSum;
    guestScore.textContent = guestSum;
}

function plusThree(s) {
    if (s === 'home') {
        homeSum += 3;
    } else {
        guestSum += 3;
    }
    homeScore.textContent = homeSum;
    guestScore.textContent = guestSum;
}

function newGame() {
    homeSum = guestSum = 0;
    homeScore.textContent = homeSum;
    guestScore.textContent = guestSum;
}