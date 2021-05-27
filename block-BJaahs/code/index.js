

function createQuestion(title, options) {
    let question = {};
    question.title = title;
    question.options = options;
   question.correctAnswerIndex = function() {
        return this.options[1];
    },
    question.isAnswerCorrect  = function(index) {
        if(this.correctAnswerIndex === index) {
            return true ;
        } else {
            return false;
        }
    },
    question.getCorrectAnswer = function() {
        return this.correctAnswerIndex;
    }
    return question;
}

let question1 = createQuestion("Where is the capital of Jordan", ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'])