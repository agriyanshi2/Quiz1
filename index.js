var readlineSync=require("readline-sync");

var score = 0;
var highScores=[
  {
    name: "Riyanshi",
    score: 3,
  },
  {
    name: "Unknown",
    score: 2,
  },
]

var questions=[
  {
    question: "Which state do I live in? ",
    answer: "Uttar Pradesh",
  },
  {
    question: "My favourite colour? ",
    answer: "Black",
  },
  {
    question: "What is my best timepass? ",
    answer: "Music",
  }
]

function welcome(){
  var userName=readlineSync.question("What is your name? ");
  console.log("Welcome "+userName+ "! Let's play DO YOU KNOW Riyanshi? ");
}

function play(question, answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("You were right");
    score=score+1;
  }
  else{
    console.log("You were wrong");
  }

  console.log("Current Score: ",score);
  console.log("------------------");
}

function game(){
  for(var i=0;i<questions.length;i++){
    var currentQues=questions[i];
    play(currentQues.question,currentQues.answer);
  }
}
function showScores(){
  console.log("YAY! You Scored: ",score);
  console.log("Check out the High Scores: ");
  highScores.map(score => console.log(score.name, " : ",score.score))
}

welcome();
game();
showScores();