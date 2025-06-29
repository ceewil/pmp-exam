
const questions = [
    {
        question: "An element of the project scope statement is:",
        answers: ["Acceptance criteria", "A stakeholder list", "A summary budget", "High-level risks"],
        correct: 0,
        explanation: "Acceptance criteria are a key element of the project scope statement."
    },
    {
        question: "Which document describes the necessary information to determine if a project is worth the required investment?",
        answers: ["Cost baseline", "Service level agreement", "Memorandum of understanding", "Business case"],
        correct: 3,
        explanation: "The Business Case provides the justification for the project."
    }
];

let currentQuestion = 0;

const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const explanation = document.getElementById('explanation');

function showQuestion() {
    const q = questions[currentQuestion];
    questionContainer.innerText = q.question;
    answersContainer.innerHTML = '';
    explanation.innerText = '';

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(index);
        answersContainer.appendChild(btn);
    });
}

function checkAnswer(index) {
    const q = questions[currentQuestion];
    if (index === q.correct) {
        explanation.innerText = "Correct! " + q.explanation;
    } else {
        explanation.innerText = "Incorrect. " + q.explanation;
    }
}

nextBtn.onclick = () => {
    currentQuestion = (currentQuestion + 1) % questions.length;
    showQuestion();
};

showQuestion();
