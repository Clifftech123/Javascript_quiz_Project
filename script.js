// @ts-nocheck


// QUSTIONS FOR THE PAGE 
const quizData = [
    {
        question:"Which is not an example of a peripheral device??",
        a: "Keyboard",
        b: "Mouse",
        c: "Register ",
        d: "Speakers",
        correct: "c",
    },
    {
        question: "Which is not found in the CPU??",
        a: "ALU",
        b: "Control unit",
        c: "Memory",
        d: "Printer",
        correct: "d",
    },
    {
        question: "The ALU processes data and stores it in",
        a: "a flash drive.",
        b: "the main memory",
        c: "a sound card",
        d: "modem",
        correct: "b",
    },
    {
        question: "The main memory of a computer is also referred to as?",
        a: "immediate access store.",
        b: "auxiliary storage",
        c: "secondary storage.",
        d: "none of the above",
        correct: "c",
    },
];


// GETING THE SELCTORS 
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

// FUNCTIONS 
function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
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


// EVENT 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Start Again</button>
            `
        }
    }
})