
// Set score = 0 at the start of the game 
var score = 0;
// question index
let i = 0;
//Global Variables 
var time = 60;
var timeRemaining = true;
var timeStart = false;
var countdown = document.getElementById("countdown");
var homePage = document.getElementById("homePage");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("correctAnswer");
var startBtn = document.getElementById("startBtn");
var highScoresDisplay = [];
var output = "";

// Questions Array

var questionsArray = [
    {
        question: "The amount of light or darkness on a photograph is known as the:",
        imageSrc: "",
        answerChoice: ["A) exposure", "B) shutter speed", "C) contrast", "D) sharpness"],
        correctAnswer: 0
    },
    {
        question: "In a location where there is low available light, the ISO setting should be set to:",
        imageSrc: "",
        answerChoice: ["A) Highest setting", "B) Lowest setting", "C) Between 800 and 2500 depending on the camera", "D) f/4.0"],
        correctAnswer: 2
    },
    {
        question: "The amount of light passing through a lens is defined by the:",
        imageSrc: "",
        answerChoice: ["A) Film", "B) Aperture", "C) Shutter speed", "D) Exposure"],
        correctAnswer: 1
    },
    {
        question: "Perfect exposure is a result of the right mixture of:",
        imageSrc: "",
        answerChoice: ["A) Shutter + resolution + aperture", "B) Aperture + shutter speed + ISO", "C) Exposure + aperture + shutter speed", "D) Aperture + film speed + exposure"],
        correctAnswer: 1
    },
    {
        question: "What is the unit of measurement for light in photography:",
        answerChoice: ["A) Stops", "B)Shutter speeds", "C) Apertures", "D) light years"],
        correctAnswer: 0
    }];
// Countdown timer f

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

function setCountdownTimer() {
    if (timeStart) {
        time--;
    }

    if (time <= 0) {
        returnQuiz();
        time = 0;
    }
    document.getElementById('timer').innerHTML = time;
}

// Add listerner to startBtn
startBtn.addEventListener("click", function () {
    quiz.style.display = "block";
    homePage.style.display = "none";
    countdown.style.display = "block";
    document.getElementById("scoreBoard").style.display = "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    timeStart = true;
});

// Questions function

function setQuizQuestions() {
    question.textContent = questionsArray[i].question;
    answerChoiceA.textContent = questionsArray[i].answerChoice[0];
    answerChoiceB.textContent = questionsArray[i].answerChoice[1];
    answerChoiceC.textContent = questionsArray[i].answerChoice[2];
    answerChoiceD.textContent = questionsArray[i].answerChoice[3];
};

// When user answers a question: then user is presented with another question

// Store user answer choices. Clear elements and update score count.

// Change to next question

answerChoiceA.addEventListener('click', function (event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    // check answer
    if (0 === correctAnswer) {
        // display message to user for 1  second stating if the answer is correct or incorrect
        document.getElementById("answerResponse").innerHTML = "Correct!";
        setTimeout(function () {
            document.getElementById("answerResponse").innerHTML = "";
        },
            1000
        );
        // when user answers a question correctly, increase the score
        score++;
        // display updated score progress
        document.getElementById("score").innerHTML = score;
    } else {
        time -= 12;
        // when user answers a question inccorrectly, subtract from the time
        document.getElementById("answerResponse").innerHTML = "Incorrect! Keep going!";
        setTimeout(function () {
            document.getElementById("answerResponse").innerHTML = "";
        },
            1000
        );
    }
    if (i >= questionsArray.length - 1) {
        returnQuiz();
    } else {
        i++
        setQuizQuestions();
    };
});

answerChoiceB.addEventListener('click', function (event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (1 === correctAnswer) {
        document.getElementById("answerResponse").innerHTML = "Correct!";
        setTimeout(function () {
            document.getElementById("answerResponse").innerHTML = "";
        },
            1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time -= 12;
        document.getElementById("answerResponse").innerHTML = "Incorrect! Keep going!";
        setTimeout(function () {
            document.getElementById("answerResponse").innerHTML = "";
        },
            1000
        );
    }
    if (i >= questionsArray.length - 1) {
        returnQuiz();
    } else {
        i++
        setQuizQuestions();
    };
});

answerChoiceC.addEventListener('click', function (event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) {
        document.getElementById("answerResponse").innerHTML = "Correct!";
        setTimeout(function () {
            document.getElementById("answerResponse").innerHTML = "";
        },
            1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time -= 12;
        document.getElementById("answerResponse").innerHTML = "Incorrect! Keep going!";
        setTimeout(function () {
            document.getElementById("answerResponse").innerHTML = "";
        },
            1000
        );
    }
    if (i >= questionsArray.length - 1) {
        returnQuiz();
    } else {
        i++
        setQuizQuestions();
    };
});

answerChoiceD.addEventListener('click', function (event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (3 === correctAnswer) {
        document.getElementById("answerResponse").innerHTML = "Correct!";
        setTimeout(function () {
            document.getElementById("answerResponse").innerHTML = "";
        },
            1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time -= 12;
        document.getElementById("answerResponse").innerHTML = "Incorrect! Keep going!";
        setTimeout(function () {
            document.getElementById("answerResponse").innerHTML = "";
        },
            1000
        );
    }
    if (i >= questionsArray.length - 1) {
        returnQuiz();
    } else {
        i++
        setQuizQuestions();
    };
});

//returnQuiz
function returnQuiz() {
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("scoreBoard").style.display = "none";
    document.getElementById("answerResponse").innerHTML = "";
    document.getElementById("endScore").innerHTML = score;
}

//submit score and initals
function submitScore() {
    highScoresDisplay.push(document.getElementById("initials").value + " " + score);
    viewHighScores();
}

//highScores
function viewHighScores() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("highScoresPage").style.display = "block";

    output = "";
    for (let k = 0; k < highScoresDisplay.length; k++) {
        output = output + " " + highScoresDisplay[k];
    }
    document.getElementById("highScoresDisplay").innerHTML = output;
    clearUp();
}
// refresh the site to the home page
function goHome() {
    document.getElementById("highScoresPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    clearUp();
}

// clear the highscore
function clearTopScores() {
    highScoresDisplay = [];
}

function clearUp() {
    time = 60;
    timeRemaining = true;
    timeStart = false;
    i = 0;
    score = 0;
}