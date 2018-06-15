
var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/crystal-1.jpg", "./assets/images/crystal-2.jpg", "./assets/images/crystal-3.jpg", "./assets/images/crystal-4.jpg"];

function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        $(".crystal-images").append(crystal);
    }
}

function resetHTML() {
    $(".target-number").html("<p>Number to match: </p>" + "<h3>" + targetNumber + "</h3>");
    $(".win-lose-counter").html("<h5> Wins: " + wins + "</h5>" + "<h5> Losses: " + losses + "</h5>");
    $(".score-number").html("<p>You total score: </p>" + "<h3>" + counter + "</h3>");
    $(".crystal-images").empty();
}

function totalReset() {
    randomTargetNumber();
    counter = 0;
    resetHTML();
    resetCrystals();
}

randomTargetNumber();
resetHTML();
resetCrystals();

function crystalClick() {

    counter += parseInt($(this).attr("value"));
    $(".score-number").html("<p>You total score: </p>" + "<h3>" + counter + "</h3>");
    if (counter == targetNumber) {
        wins++;
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};

$(document).on("click", ".crystal", crystalClick);