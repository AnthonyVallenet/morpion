var boxes = document.querySelectorAll('.boxe');

var inputP1 = document.getElementById("inputP1");
var inputP2 = document.getElementById("inputP2");
var inputF = document.getElementById("inputFile");

var imgFile = document.getElementById("imgFile");

var afficheScorePlayer1 = document.getElementById("scorePlayer1");
var afficheScorePlayer2 = document.getElementById("scorePlayer2");

var click = 0;

var inputRound = document.getElementById('inputRound');
var nbrTour = document.getElementById('nbrTour');

var maxScore = null;

var scorePlayer1 = 0;
var scorePlayer2 = 0;

var i = -1;

var sectionName = document.getElementById('sectionName');
var sectionWin = document.getElementById('sectionWin');

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');

var winner = document.getElementById('winner');

var check = document.getElementById('scales');


function afficheName() {
    if (inputP1.value.length == 0 && inputP2.value.length == 0) {
        player2.innerHTML = "Player 2 ( O )";
        player1.innerHTML = "Player 1 ( X )";
    } else if (inputP1.value.length == 0) {
        player1.innerHTML = "Player 1 ( X )";
    } else if (inputP2.value.length == 0) {
        player2.innerHTML = "Player 2 ( O )";
    } else {
        player2.innerHTML = inputP2.value + " ( O )";
        player1.innerHTML = inputP1.value + " ( X )";
    }
    nbrTour.innerHTML = inputRound.value;
    maxScore = inputRound.value;
    
    console.log(inputF.value);
    imgFile.src = inputF.value;
    console.log(imgFile);
}

function recupInput() {
    sectionName.style.display = "none";
    afficheName();
    choose();
}

function choose() {
    i++;
    if (i % 2 == 0) {
        player2.style.color = "";
        player1.style.color = "green";
    } else {
        player1.style.color = "";
        player2.style.color = "green";
    }

    return i % 2 === 0 ? 'O' : 'X';
}

function gamePlay() {

  if (((boxes[0].innerHTML === "X") && (boxes[1].innerHTML === "X") && (boxes[2].innerHTML === "X")) || ((boxes[3].innerHTML === "X") && (boxes[4].innerHTML === "X") && (boxes[5].innerHTML === "X")) || ((boxes[6].innerHTML === "X") && (boxes[7].innerHTML === "X") && (boxes[8].innerHTML === "X")) || ((boxes[0].innerHTML === "X") && (boxes[3].innerHTML === "X") && (boxes[6].innerHTML === "X")) || ((boxes[1].innerHTML === "X") && (boxes[4].innerHTML === "X") && (boxes[7].innerHTML === "X")) || ((boxes[2].innerHTML === "X") && (boxes[5].innerHTML === "X") && (boxes[8].innerHTML === "X")) || ((boxes[0].innerHTML === "X") && (boxes[4].innerHTML === "X") && (boxes[8].innerHTML === "X")) || ((boxes[2].innerHTML === "X") && (boxes[4].innerHTML === "X") && (boxes[6].innerHTML === "X")) ) {
      scorePlayer1 = scoresPlayer(scorePlayer1, afficheScorePlayer1);
      click = 0;

      if (scorePlayer1 >= maxScore) {
          afficheWin(player1.innerHTML);
      }
  }

  else if (((boxes[0].innerHTML === "O") && (boxes[1].innerHTML === "O") && (boxes[2].innerHTML === "O")) || ((boxes[3].innerHTML === "O") && (boxes[4].innerHTML === "O") && (boxes[5].innerHTML === "O")) || ((boxes[6].innerHTML === "O") && (boxes[7].innerHTML === "O") && (boxes[8].innerHTML === "O")) || ((boxes[0].innerHTML === "O") && (boxes[3].innerHTML === "O") && (boxes[6].innerHTML === "O")) || ((boxes[1].innerHTML === "O") && (boxes[4].innerHTML === "O") && (boxes[7].innerHTML === "O")) || ((boxes[2].innerHTML === "O") && (boxes[5].innerHTML === "O") && (boxes[8].innerHTML === "O")) || ((boxes[0].innerHTML === "O") && (boxes[4].innerHTML === "O") && (boxes[8].innerHTML === "O")) || ((boxes[2].innerHTML === "O") && (boxes[4].innerHTML === "O") && (boxes[6].innerHTML === "O")) ) {
      scorePlayer2 = scoresPlayer(scorePlayer2, afficheScorePlayer2);
      click = 0;

      if (scorePlayer2 >= maxScore) {
          afficheWin(player2.innerHTML);
      }
  }

  else if (click >= 9) {
      reset();
      click = 0;
  }
}

function keyCode(event) {
  let x = event.keyCode;

  if (x == 49) {
    if (boxes[6].innerHTML == "") {
        boxes[6].innerHTML = choose();
        gamePlay();
    }
  }
  if (x == 50) {
    if (boxes[7].innerHTML == "") {
        boxes[7].innerHTML = choose();
        gamePlay();
    }
  }
  if (x == 51) {
    if (boxes[8].innerHTML == "") {
        boxes[8].innerHTML = choose();
        gamePlay();
    }
  }
  if (x == 52) {
    if (boxes[3].innerHTML == "") {
        boxes[3].innerHTML = choose();
        gamePlay();
    }
  }
  if (x == 53) {
    if (boxes[4].innerHTML == "") {
        boxes[4].innerHTML = choose();
        gamePlay();
    }
  }
  if (x == 54) {
    if (boxes[5].innerHTML == "") {
        boxes[5].innerHTML = choose();
        gamePlay();
    }
  }
  if (x == 55) {
    if (boxes[0].innerHTML == "") {
        boxes[0].innerHTML = choose();
        gamePlay();
    }
  }
  if (x == 56) {
    if (boxes[1].innerHTML == "") {
        boxes[1].innerHTML = choose();
        gamePlay();
    }
  }
  if (x == 57) {
    if (boxes[2].innerHTML == "") {
        boxes[2].innerHTML = choose();
        gamePlay();
    }
  }
}

function afficheClick() {
    if (this.innerHTML == "") {
        this.innerHTML = choose();
        click++;
        gamePlay();
    }
}

function afficheWin(people) {

    sectionWin.style.display = "flex";
    winner.innerHTML = people;
}

function scoresPlayer(score, el) {
    score++;
    el.innerHTML = score;
    reset();
    return score;
}

function reset() {
    for (let y = 0; y < boxes.length; y++) {
        boxes[y].innerHTML = "";
    }
}

function resetScore() {
    click = 0;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    i = 0;
    afficheScorePlayer1.innerHTML = scorePlayer1;
    afficheScorePlayer2.innerHTML = scorePlayer2;
    sectionWin.style.display = "none";
    player2.style.color = "";
    player1.style.color = "green";
    reset();
}

boxes.forEach(el => el.addEventListener("click", afficheClick));
