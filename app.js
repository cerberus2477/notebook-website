// Stílus
function randomBetween(min, max, egesz) {
    if (egesz) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return Math.random() * (max - min) + min;

}

function rotateStickyNotes() {
    var stickys = document.querySelectorAll(".stickynote");
    for (var i = 0; i < stickys.length; i++) {
        var random = randomBetween(-1.5, 1.5, false);
        stickys[i].style.transform = "rotate(" + random + "deg)";
    }
}


function colourStickynotes() {
    var colours = ["--lightGreen", "--lightYellow", "--lightBlue", "--lightPink"]
    var pairs = document.querySelectorAll(".pair");
    var lastRandom = -1;

    for (var i = 0; i < pairs.length; i++) {
        do {
            random = randomBetween(0, 3, true)
        } while (random == lastRandom);
        lastRandom = random;

        var randomColour = "var(" + colours[random] + ")";
        let pair = pairs[i].querySelectorAll("div");

        pair[0].style.backgroundColor = randomColour;
        pair[1].style.backgroundColor = randomColour;

    }
}



// Teszt



function updateScore() {
    scoreDisplay.innerText = correctIDs.length + "/" + score;
}

function  resetForm()  {
    score = 0;
    updateScore();
    corrects = Array.from(document.querySelectorAll(".correct"));
    incorrects = Array.from(document.querySelectorAll(".incorrect"));

    for (var i = 0; i < corrects.length; i++) {
        corrects[i].classList.remove("correct");
    }
    for (var i = 0; i < incorrects.length; i++) {
        incorrects[i].classList.remove("incorrect");
    }

    corrects = [];
    incorrects = [];
}


function  checkAnswers()  {
    const questions = document.querySelectorAll("fieldset");

    for (var i = 0; i < questions.length; i++) {
        var options = questions[i].querySelectorAll("input");
        console.log(options);

        for (var j = 0; j < options.length; j++) {
            let label = options[j].parentElement.querySelector("label");

            if (options[j].checked) {
                if (options[j].id == correctIDs[i]) {
                    label.classList.add("correct");
                    score++;
                } else {
                    label.classList.add("incorrect");
                }
            }
        }
    }
    updateScore();
}

let scoreDisplay = document.getElementById("scoreDisplay");
let score;
let corrects = [];
let incorrects = [];
let correctIDs = ["q1.3", "q2.1", "q3.1", "q4.1"];