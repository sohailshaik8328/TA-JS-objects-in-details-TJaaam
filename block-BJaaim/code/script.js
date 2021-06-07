let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let count = 0;



class Quiz {
    constructor(root, questions = [], activeIndex = 0, score = 0) {
        this.questions = questions;
        this.activeIndex = activeIndex;
        this.score = score;
        this.root = root;
    }

    nextQuestion() {
       return  this.activeIndex += 1;
    }

    prevQuestion() {
        return this.activeIndex -= 1;
    }

    createUI(selectAnswer) {
        this.root.innerHTML = "";
        let currentQuestion = this.questions[this.activeIndex];
        let ui = currentQuestion.createUI();

        if(currentQuestion.isCorrect(selectAnswer)) {
            this.updateScore();

            let correctAnsElm = document.createElement('p');
            correctAnsElm.classList.add('correctAnsElm');
            correctAnsElm.innerText = "Correct Answer";
            correctAnsElm.style.color = "green";

            count++;

            let total_correct_answers = document.querySelector('.total_correct_answers');
            total_correct_answers.innerHTML = count;

            let score = document.createElement('p');
            score.classList.add('score');
            score.innerText = `Score : ${this.score}`;

            this.root.append(ui, correctAnsElm, score);
        } else {
            this.root.append(ui);
        }

    }

    updateScore() {
        this.score += 1;
    }
}

class Question {
    constructor(title, options = [], correctAns) {
        this.title = title;
        this.options = options;
        this.correctAns = options[correctAns];
    }

    isCorrect(answer) {
        return answer == this.correctAns;
    }
    getCorrectAnswer() {
        return this.correctAns;
    }

    createUI() {
        let li = document.createElement('li');
        li.classList.add("li");

        let questionElm = document.createElement("h3");
        questionElm.innerText = this.title;
        questionElm.classList.add("questionElm");

        let optDiv = document.createElement('div');
        optDiv.classList.add('optDiv')
        let option1 = document.createElement('p');
        option1.setAttribute(`data-options`, this.options[0]);
        option1.innerText = `1. ${this.options[0]}`

        let option2 = document.createElement('p');
        option2.setAttribute(`data-options`, this.options[1]);
        option2.innerText = `2. ${this.options[1]}`

        let option3 = document.createElement('p');
        option3.setAttribute(`data-options`, this.options[2]);
        option3.innerText = `3. ${this.options[2]}`

        let option4 = document.createElement('p');
        option4.setAttribute(`data-options`, this.options[3]);
        option4.innerText = `4. ${this.options[3]}`;

        optDiv.addEventListener('click', (event) => {
            myQuiz.createUI(event.target.dataset.options)
            
        })

        optDiv.append(option1, option2, option3, option4);

        li.append(questionElm, optDiv);
        return li;
    }
}


let question1 = new Question("1. What is a 'class' in JavaScript?", ["Function", "Prototype", "Data-Attribute", "None of these"], 0);
let question2 = new Question("2. What is a 'Boolean' in JavaScript?", ["True", "False", "Both 1 & 2", "None of these"], 2);
let question3 = new Question("3. What is a 'String' in JavaScript?", ["' '", "True", "value", "None of these"], 0);
let question4 = new Question("4. What is a 'function' in JavaScript?", ["Function", "Prototype", "Object", "None of these"], 2);
let question5 = new Question("5. What is a 'new' keyword in JavaScript?", ["Function", "Prototype", "Data-Attribute","Object"], 3);

let myQuiz = new Quiz(document.querySelector('.ul'), [question1, question2, question3, question4, question5]);
myQuiz.createUI();

let total_questions = document.querySelector('.total_questions');
total_questions.innerText = `${myQuiz.questions.length}`;

nextBtn.addEventListener('click', () => {
    myQuiz.nextQuestion();
    if(myQuiz.activeIndex < myQuiz.questions.length) {
        myQuiz.createUI();
    };
});

prevBtn.addEventListener('click', () => {
    myQuiz.prevQuestion();
    if(myQuiz.activeIndex >= 0) {
        myQuiz.createUI();
    };
});
