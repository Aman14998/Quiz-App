const quizData = [
    {
        question: 'Which is most preferred programming language?',
        a: 'C++',
        b: 'Python',
        c: 'Java Script',
        d: 'Java',
        correct: 'c'
    },
    {
        question: 'Who is prime minister of India?',
        a: 'Ramnath Kovind',
        b: 'Amit Shah',
        c: 'Yogi Adityanath',
        d: 'Narendra Modi',
        correct: 'd'
    },
    {
        question: 'Which is best engineering institute in India?',
        a: 'IIIT',
        b: 'IIT',
        c: 'NIT',
        d: 'BIT',
        correct: 'b'
    },
    {
        question: 'Do you think Alien exist?',
        a: 'YES',
        b: 'NO',
        c: 'may be YES or may be NO',
        d: 'NONE',
        correct: 'a'
    },
    {
        question: 'Who is my best friend?',
        a: 'Mahie',
        b: 'Amrita',
        c: 'Mohit',
        d: 'Niranjan',
        correct: 'b'
    }
]
const answerEl = document.querySelectorAll('.answer');
const quizEl = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn = document.getElementById('submit');
let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;   
}

function getSelected() {
    let answer = undefined;
    answerEl.forEach((checkedAnswer) => {
       if (checkedAnswer.checked) {
           answer = checkedAnswer.id;
       }
    });
    return answer;
}

function deselectAnswer() {
    answerEl.forEach((checkedAnswer) => {
        checkedAnswer.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            alert('You Finished!')
            quizEl.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly.</h2>`;
        }  
    }  
});

