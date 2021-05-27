

// function createQuestion(title, options) {
//     let question = {};
//     question.title = title;
//     question.options = options;
//    question.correctAnswerIndex = function() {
//         return this.options[1];
//     },
//     question.isAnswerCorrect  = function(index) {
//         if(this.correctAnswerIndex === index) {
//             return true ;
//         } else {
//             return false;
//         }
//     },
//     question.getCorrectAnswer = function() {
//         return this.correctAnswerIndex;
//     }
//     return question;
// }

// let question1 = createQuestion("Where is the capital of Jordan", ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'])

// let title = 'Where is the capital of Jordan';
// let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
// let correctAnswerIndex = 1;

// function isAnswerCorrect(index) {
//     return index === correctAnswerIndex;
// }

// function getCorrectAnswer() {
//     return options[correctAnswerIndex]
// }

// let question1 = {
//     title : 'Where is the capital of Jordan',
//     options :  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     correctAnswerIndex : 1,
//     isAnswerCorrect : function(index) {
//         return index === question1.correctAnswerIndex;
//     },
//     getCorrectAnswer : function() {
//         return question1.options[question1.correctAnswerIndex];
//     }
// }

// let question2 = {
//     title : 'Where is the capital of Jamaica',
//     options :  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     correctAnswerIndex : 2,
//     isAnswerCorrect : function(index) {
//         return index === question2.correctAnswerIndex;
//     },
//     getCorrectAnswer : function() {
//         return question2.options[question2.correctAnswerIndex];
//     }
// }

// function createQuestion(title, options, correctAnswerIndex) {
//     let question = {};
//     question.title = title;
//     question.options = options;
//     question.correctAnswerIndex = correctAnswerIndex;
//     question.isAnswerCorrect = function(index) {
//         return index === question.correctAnswerIndex;
//     };
//     question.getCorrectAnswer = function() {
//         return question.options[question.correctAnswerIndex];
//     };

//     return question
// }

// let question1 = createQuestion('Where is the capital of Jordan',  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'], 1);
// let question2 = createQuestion('Where is the capital of Jamaica',  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'], 2)



function createQuestion(title, options, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index) {
        return index === this.correctAnswerIndex;
    };
    question.getCorrectAnswer = function() {
        return this.options[this.correctAnswerIndex];
    };

    return question;
}

let question1 = createQuestion('Where is the capital of Jordan',  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'], 1);
let question2 = createQuestion('Where is the capital of Jamaica',  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'], 2)