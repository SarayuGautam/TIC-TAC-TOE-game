$(document).ready(function () {
  var turns = 0;
  $(".col-4 a ").on("click", function () {
    if ($("#spot1").hasClass("O") && $("#spot2").hasClass("O") && $("#spot3").hasClass("O")) {
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot4").hasClass("O") && $("#spot5").hasClass("O") && $("#spot6").hasClass("O")) {
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot7").hasClass("O") && $("#spot8").hasClass("O") && $("#spot9").hasClass("O")) {
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot1").hasClass("O") && $("#spot4").hasClass("O") && $("#spot7").hasClass("O")) {
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot2").hasClass("O") && $("#spot5").hasClass("O") && $("#spot8").hasClass("O")) {
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot3").hasClass("O") && $("#spot6").hasClass("O") && $("#spot9").hasClass("O")) {
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot1").hasClass("O") && $("#spot5").hasClass("O") && $("#spot9").hasClass("O")) {
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot3").hasClass("O") && $("#spot5").hasClass("O") && $("#spot7").hasClass("O")) {
      document.getElementById("p").innerHTML = "The winner is O";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot3").hasClass("X") && $("#spot5").hasClass("X") && $("#spot7").hasClass("X")) {
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot1").hasClass("X") && $("#spot5").hasClass("X") && $("#spot9").hasClass("X")) {
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot1").hasClass("X") && $("#spot2").hasClass("X") && $("#spot3").hasClass("X")) {
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot4").hasClass("X") && $("#spot5").hasClass("X") && $("#spot6").hasClass("X")) {
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot7").hasClass("X") && $("#spot8").hasClass("X") && $("#spot9").hasClass("X")) {
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot1").hasClass("X") && $("#spot4").hasClass("X") && $("#spot7").hasClass("X")) {
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot2").hasClass("X") && $("#spot5").hasClass("X") && $("#spot8").hasClass("X")) {
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if ($("#spot3").hasClass("X") && $("#spot6").hasClass("X") && $("#spot9").hasClass("X")) {
      document.getElementById("p").innerHTML = "The winner is X";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
    } else if (turns == 9) {
      document.getElementById("p").innerHTML = "The game is  a tie";
      $(".col-4 a ").removeClass("disable");
      $(".col-4 a").removeClass("O");
      $(".col-4 a").removeClass("X");
      turns = 0;
    } else if ($(this).contains("disable")) {
      document.getElementById("p").innerHTML = "The space is  already occupied";
    } else */
    if (turns % 2 == 0) {
      turns++;
      document.getElementById(this).innerHTML = "O";
      $(this).addClass("disable");
      $(this).addClass("O");
      if ($("#spot1").hasClass("O") && $("#spot2").hasClass("O") && $("#spot3").hasClass("O")) {
        document.getElementById("p").innerHTML = "The winner is O";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot4").hasClass("O") && $("#spot5").hasClass("O") && $("#spot6").hasClass("O")) {
        document.getElementById("p").innerHTML = "The winner is O";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot7").hasClass("O") && $("#spot8").hasClass("O") && $("#spot9").hasClass("O")) {
        document.getElementById("p").innerHTML = "The winner is O";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot1").hasClass("O") && $("#spot4").hasClass("O") && $("#spot7").hasClass("O")) {
        document.getElementById("p").innerHTML = "The winner is O";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot2").hasClass("O") && $("#spot5").hasClass("O") && $("#spot8").hasClass("O")) {
        document.getElementById("p").innerHTML = "The winner is O";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot3").hasClass("O") && $("#spot6").hasClass("O") && $("#spot9").hasClass("O")) {
        document.getElementById("p").innerHTML = "The winner is O";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot1").hasClass("O") && $("#spot5").hasClass("O") && $("#spot9").hasClass("O")) {
        document.getElementById("p").innerHTML = "The winner is O";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot3").hasClass("O") && $("#spot5").hasClass("O") && $("#spot7").hasClass("O")) {
        document.getElementById("p").innerHTML = "The winner is O";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      }
    } else {
      turns++;
      document.getElementById(this).innerHTML = "X";
      $(this).addClass("disable");
      $(this).addClass("X");
      if ($("#spot3").hasClass("X") && $("#spot5").hasClass("X") && $("#spot7").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot1").hasClass("X") && $("#spot5").hasClass("X") && $("#spot9").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot1").hasClass("X") && $("#spot2").hasClass("X") && $("#spot3").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot4").hasClass("X") && $("#spot5").hasClass("X") && $("#spot6").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot7").hasClass("X") && $("#spot8").hasClass("X") && $("#spot9").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot1").hasClass("X") && $("#spot4").hasClass("X") && $("#spot7").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot2").hasClass("X") && $("#spot5").hasClass("X") && $("#spot8").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot3").hasClass("X") && $("#spot6").hasClass("X") && $("#spot9").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      }
    }
  });
  $("#reset").on("click", function () {
    $(".col-4 a ").removeClass("disable");
    $(".col-4 a").removeClass("O");
    $(".col-4 a").removeClass("X");
    turns = 0;
  });
});