// Prototypical Pattern

let createQuestionMethods = {
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    },

    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}
function createQuestion(title, options, correctAnswerIndex) {
    let question = Object.create(createQuestionMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    return question;
}

let question1 = createQuestion('Where is the capital of Jordan',  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
let question2 = createQuestion('Where is the capital of Jamaica',  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'], 2)


// Pseudoclassical Pattern

    function CreateQuestion(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    CreateQuestion.prototype = {
        isAnswerCorrect(index) {
            return index === this.correctAnswerIndex;
        },
    
        getCorrectAnswer(){
            return this.options[this.correctAnswerIndex];
        }
    }
    
    let question1 = new CreateQuestion('Where is the capital of Jordan',  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
    let question2 = new CreateQuestion('Where is the capital of Jamaica',  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'], 2)
    

// Class Pattern

class question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    }
        
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}

let question1 = new question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
)

let question2 = new question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
)

