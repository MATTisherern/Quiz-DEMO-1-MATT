const quizData = [
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        a: "Rome, Italy",
        b: "Barcelona, Spain",
        c: "Lisbon, Portugal",
        d: "Paris, France",
        correct: "a",
    },
    {
        question: "Where is the ruined city of Babylon located?",
        a: "Sakaka, Saudi Arabia",
        b: "Doğankavak, Türkiye",
        c: "Mesopotamia, Iraq",
        d: "Central Macedonia, Greece",
        correct: "c",
    },
    {
        question: "Which planet has the most moons?",
        a: "Mars",
        b: "Neptune",
        c: "Venus",
        d: "Saturn",
        correct: "d",
    },
    {
        question: "In what country is the Chernobyl nuclear plant located?",
        a: "Russia",
        b: "Estonia",
        c: "Ukraine",
        d: "Belarus",
        correct: "c",
    },
    {
        question: "What is a group of pandas called?",
        a: "A Sluth",
        b: "A Sloth",
        c: "A Maul",
        d: "An Embarrassment",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl. checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You answer ${score}/${quizData.length} question correctly.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});