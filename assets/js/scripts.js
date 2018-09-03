// Monty Python's Flying Trivia
// basic trivia game assignment
// © Richard Trevillian, 2018-09-01
// University of Richmond, Full Stack Web Development Bootcamp
// JavaScript

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
    // console.log('hi!');

});

// ACTIONS PERFORMED WHEN CLICKING PLAY AGAIN BUTTON ON RESULTS PAGE
$('#btn_playAgain').click(function () {

    $('#results_box').attr('style', 'display:none;');
    $('#start_box').attr('style', 'display:block;');
    // console.log('hi!');

});
