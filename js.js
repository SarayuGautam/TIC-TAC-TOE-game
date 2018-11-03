$(document).ready(function () {
  var turns = 0;
  var spot1 = $("#spot1");
  var spot2 = $("#spot2");
  var spot3 = $("#spot3");
  var spot4 = $("#spot4");
  var spot5 = $("#spot5");
  var spot6 = $("#spot6");
  var spot7 = $("#spot7");
  var spot8 = $("#spot8");
  var spot9 = $("#spot9");

  $(".col-4 a").on("click", function () {
    if (
      (spot1.hasClass("O") && spot2.hasClass("O") && spot3.hasClass("O")) ||
      (spot4.hasClass("O") && spot5.hasClass("O") && spot6.hasClass("O")) ||
      (spot7.hasClass("O") && spot8.hasClass("O") && spot9.hasClass("O")) ||
      (spot1.hasClass("O") && spot4.hasClass("O") && spot7.hasClass("O")) ||
      (spot2.hasClass("O") && spot5.hasClass("O") && spot8.hasClass("O")) ||
      (spot3.hasClass("O") && spot6.hasClass("O") && spot9.hasClass("O")) ||
      (spot1.hasClass("O") && spot5.hasClass("O") && spot9.hasClass("O")) ||
      (spot3.hasClass("O") && spot5.hasClass("O") && spot7.hasClass("O"))
    ) {
      $(".col-4 a").text("+");
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if (
      (spot1.hasClass("X") && spot2.hasClass("X") && spot3.hasClass("X")) ||
      (spot4.hasClass("X") && spot5.hasClass("X") && spot6.hasClass("X")) ||
      (spot7.hasClass("X") && spot8.hasClass("X") && spot9.hasClass("X")) ||
      (spot1.hasClass("X") && spot4.hasClass("X") && spot7.hasClass("X")) ||
      (spot2.hasClass("X") && spot5.hasClass("X") && spot8.hasClass("X")) ||
      (spot3.hasClass("X") && spot6.hasClass("X") && spot9.hasClass("X")) ||
      (spot1.hasClass("X") && spot5.hasClass("X") && spot9.hasClass("X")) ||
      (spot3.hasClass("X") && spot5.hasClass("X") && spot7.hasClass("X"))
    ) {
      $(".col-4 a").text("+");
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if (turns == 9) {
      $(".col-4 a").text("+");
      document.getElementById("p").innerHTML = "Game Complete";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($(this).contains("disable")) {
      alert("This spot is already occupied.");
      document.getElementById("q").innerHTML = "Game Complete";
    } else if (turns % 2 == 0) {
      turns++;
      document.getElementById(this).innerHTML = "O";
      $(this).addClass("disable");
      $(this).addClass("O");
      if (
        (spot1.hasClass("O") && spot2.hasClass("O") && spot3.hasClass("O")) ||
        (spot4.hasClass("O") && spot5.hasClass("O") && spot6.hasClass("O")) ||
        (spot7.hasClass("O") && spot8.hasClass("O") && spot9.hasClass("O")) ||
        (spot1.hasClass("O") && spot4.hasClass("O") && spot7.hasClass("O")) ||
        (spot2.hasClass("O") && spot5.hasClass("O") && spot8.hasClass("O")) ||
        (spot3.hasClass("O") && spot6.hasClass("O") && spot9.hasClass("O")) ||
        (spot1.hasClass("O") && spot5.hasClass("O") && spot9.hasClass("O")) ||
        (spot3.hasClass("O") && spot5.hasClass("O") && spot7.hasClass("O"))
      ) {
        document.getElementById("p").innerHTML = "Winner is O";
        turns = 0;
      }
    } else {
      turns++;
      document.getElementById(this).innerHTML = "X"
      $(this).addClass("disable");
      $(this).addClass("X");
      if (
        (spot1.hasClass("X") && spot2.hasClass("X") && spot3.hasClass("X")) ||
        (spot4.hasClass("X") && spot5.hasClass("X") && spot6.hasClass("X")) ||
        (spot7.hasClass("X") && spot8.hasClass("X") && spot9.hasClass("X")) ||
        (spot1.hasClass("X") && spot4.hasClass("X") && spot7.hasClass("X")) ||
        (spot2.hasClass("X") && spot5.hasClass("X") && spot8.hasClass("X")) ||
        (spot3.hasClass("X") && spot6.hasClass("X") && spot9.hasClass("X")) ||
        (spot1.hasClass("X") && spot5.hasClass("X") && spot9.hasClass("X")) ||
        (spot3.hasClass("X") && spot5.hasClass("X") && spot7.hasClass("X"))
      ) {
        document.getElementById("p").innerHTML = "Winner is X";
        turns = 0;
      }
    }
  });
  $("#reset").on("click", function () {
    $(".col-4 a").text("+");
    $(".col-4 a ").removeClass("disable");
    $(".col-4 a").removeClass("O");
    $(".col-4 a").removeClass("X");
    turns = 0;
  });
});