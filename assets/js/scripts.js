// Monty Python's Flying Trivia
// basic trivia game assignment
// © Richard Trevillian, 2018-09-01
// University of Richmond, Full Stack Web Development Bootcamp
// JavaScript



$(document).ready(function () {


    // set an Array of the values of all correct answers
    let answersArray = [
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

    // define the displayResults() function, to be called both by clicking the DONE button, and by the TIMER timeout
    function displayResults() {

        // for some reason, these variables have be initialized OUTSIDE of the below .each function
        // otherwise there is only a single item in the resulting checkedArray
        let checkedButtons = '';
        let checkedB = '';
        let checkedArray = [];

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

        // results output variables, used by the FOR loop below:
        let aCorrect = 0;
        let aIncorrect = 0;
        let aUnanswered = 0;

        // FOR loop for testing each user response in the checkedArray created above
        for (let j = 0; j < checkedArray.length; j++) {

            // IF the checkedArray item is "XXX" (the HIDDEN and CHECKED by default selection)...
            if (checkedArray[j] === "XXX") {
                // then mark it as Unanswered
                aUnanswered = aUnanswered + 1;

                // ELSE IF the checkedArray item matches the answersArray item...
            } else if (checkedArray[j] === answersArray[j]) {
                // then mark it as Correct
                aCorrect = aCorrect + 1;

                // otherwise (ELSE)..
            } else {
                // mark it as incorrect (any other answered value).
                aIncorrect = aIncorrect + 1;
            }

            // after the IF ELSE decision tree is complete, THEN the results can be written to the page
            $('#theCorrect').text(aCorrect);
            $('#theIncorrect').text(aIncorrect);
            $('#theUnanswered').text(aUnanswered);

        }

    };


    // ACTIONS PERFORMED WHEN CLICKING START BUTTON ON HOME PAGE
    $('#btn_start').click(function () {

        // hide the Start Page DIV, and
        $('#start_box').attr('style', 'display:none;');
        // show the Quiz questions DIV
        $('#quiz_box').attr('style', 'display:block;');


        // START COUNTDOWN TIMER CODE

        // set the number of seconds the countdown will start at
        let time = 180;

        // write the initial starting number to the page (match to seconds set in the TIME variable)
        $("#timer").text("03:00");

        // declare the intervalId variable (will take a callback function and time length as setInterval)
        let intervalId;

        // define the START function to start the countdown (call below)
        function start() {
            // intervalId defined as setInterval with COUNT callback function and 1 sec interval
            intervalId = setInterval(count, 1000);
        }

        // the Callback function called in START's setInterval() method
        // this function's actions run once every second, as defined by setInterval(count, 1000), above
        function count() {

            // each time COUNT is called by START(), every 1 second, decrement the value of time by 1 (second)
            time--;
            // a variable to stand for the value of TIME, converted into clock time by the timeConverter() function below
            let converted = timeConverter(time);
            // write the new clock time (new second) converted by timeConverter() to the TIMER page DIV
            $("#timer").text(converted);
            // when the value of time reaches 0, then...
            if (time === 0) {
                // stop intervalId (defined in START) by passing it into clearInterval() method as an argument
                clearInterval(intervalId);
                // hide the Quiz questions DIV, and...
                $('#quiz_box').attr('style', 'display:none;');
                // show the Results page DIV
                $('#results_box').attr('style', 'display:block;');
                // and run the displayResults function
                displayResults();
                console.log("Time is up!");
            }
        }

        // timeConverter function copied from the stopwatchSolution.js class activity... thank you! :-)
        function timeConverter(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }

        start();



    });



    // ACTIONS PERFORMED WHEN CLICKING DONE BUTTON ON QUIZ PAGE
    $('#btn_done').click(function () {

        // hide the Quiz questions DIV, and...
        $('#quiz_box').attr('style', 'display:none;');
        // show the Results page DIV
        $('#results_box').attr('style', 'display:block;');

        displayResults();

    });

    // ACTIONS PERFORMED WHEN CLICKING PLAY AGAIN BUTTON ON RESULTS PAGE
    $('#btn_playAgain').click(function () {

        $('#results_box').attr('style', 'display:none;');
        $('#start_box').attr('style', 'display:block;');
        location.reload();
        // console.log('hi!');

    });



});