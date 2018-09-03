// Monty Python's Flying Trivia
// basic trivia game assignment
// © Richard Trevillian, 2018-09-01
// University of Richmond, Full Stack Web Development Bootcamp
// JavaScript

let answers = [
    "Tim",
    "Norwegian Blue",
    "Bunny",
    "Mousse",
    "Elderberries",
    "Eels",
    "Anarcho-Syndicalist Commune",
    "Sheep",
    "Completely Different",
    "Grail-shaped",
    "Prevent Earthquakes",
    "African or European Swallow?",
    "Ni!",
    "Herring",
    "Sir Robin's Minstrels",
    "The Book of Armaments",
    "The Spanish Inquisition",
    "The Larch",
    "She turned me into a newt",
    "What... the curtains?",
    "It is a silly place",
    "Idiom",
    "Scratched",
];


$(document).ready(function () {

    // ACTIONS PERFORMED WHEN CLICKING START BUTTON ON HOME PAGE
    $('#btn_start').click(function () {

        $('#start_box').attr('style', 'display:none;');
        $('#quiz_box').attr('style', 'display:block;');
        // console.log('hi!');

    });

    // ACTIONS PERFORMED WHEN CLICKING DONE BUTTON ON QUIZ PAGE
    $('#btn_done').click(function () {

        $('#quiz_box').attr('style', 'display:none;');
        $('#results_box').attr('style', 'display:block;');

        // function getCorrectAnswers(radioName) {
        //     let choiceButtons = $('[name=radioName]');
        //     for (let h = 0; h < choiceButtons.length; h++) {
        //         if(choiceButtons[h].checked) {
        //             return choiceButtons[h].value;
        //             console.log('okey dokey!');

        //         }
        //     }
        // }

        // function getCorrectScore() {
        //     let correct = 0;
        //     for (let i = 0; i < answers.length; i++) {
        //         // const element = array[i];
        //         if(getCorrectAnswers("question"+i)===answers[i]) {
        //             correct += 1;
        //         }             
        //     }
        //     return correct;
        // }



        let checkedButtons = '';
        let checkedArray = [];
        let checkedB = '';

        // for .each :checked item (radio button) inside the DIV id="quizForm"...
        $("#quizForm :checked").each(function () {

            // make the value of checkedButtons a concatenated, comma-separated String
            // of all the values of the value="#" property of .each (this) radio button selected 
            checkedButtons = checkedButtons + ($(this).val()) + ",";
            // an intermediate variable needed to remove the final comma from the String...
            checkedB = checkedButtons.slice(0, -1);
            // before turning the modified string into an Array to be compared against the answers Array
            checkedArray = checkedB.split(',');

        });

        console.log(checkedB);
        console.log(checkedArray);




        function showResults() {

            $('#theCorrect').text('5');
            $('#theIncorrect').text('5');
            $('#theUnanswered').text('5');
        }

        showResults();

    });

    // ACTIONS PERFORMED WHEN CLICKING PLAY AGAIN BUTTON ON RESULTS PAGE
    $('#btn_playAgain').click(function () {

        $('#results_box').attr('style', 'display:none;');
        $('#start_box').attr('style', 'display:block;');
        // console.log('hi!');

    });



});