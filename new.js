$(document).ready(function () {
  var turns = 0;
  $(".col-4 a ").on("click", function () {
    if ($(this).hasClass("disable")) {
      document.getElementById("q").innerHTML = "The space is  already occupied";
      document.getElementById("p").innerHTML = " ";
    } else if (turns == 0 || (turns % 2 == 0)) {
      turns++;
      document.getElementById("q").innerHTML = " ";
      document.getElementById("p").innerHTML = " ";
      $(this).text("O");
      $(this).addClass("O");
      $(this).addClass("disable");
      if ($("#spot1").hasClass("O") && $("#spot2").hasClass("O") && $("#spot3").hasClass("O")) {
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
      } else if ($("#spot1").hasClass("O") && $("#spot5").hasClass("O") && $("#spot9").hasClass("O")) {
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
      } else if ($("#spot2").hasClass("O") && $("#spot5").hasClass("O") && $("#spot8").hasClass("O")) {
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
      } else if ($("#spot3").hasClass("O") && $("#spot6").hasClass("O") && $("#spot9").hasClass("O")) {
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
    } else if (turns % 2 != 0 && turns < 9) {
      turns++;
      document.getElementById("q").innerHTML = " ";
      document.getElementById("p").innerHTML = " ";
      $(this).text("X");
      $(this).addClass("X");
      $(this).addClass("disable");
      if ($("#spot1").hasClass("X") && $("#spot2").hasClass("X") && $("#spot3").hasClass("X")) {
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
      } else if ($("#spot1").hasClass("X") && $("#spot5").hasClass("X") && $("#spot9").hasClass("X")) {
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
      } else if ($("#spot2").hasClass("X") && $("#spot5").hasClass("X") && $("#spot8").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      } else if ($("#spot7").hasClass("X") && $("#spot8").hasClass("O") && $("#spot9").hasClass("X")) {
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
      } else if ($("#spot3").hasClass("X") && $("#spot5").hasClass("X") && $("#spot7").hasClass("X")) {
        document.getElementById("p").innerHTML = "The winner is X";
        $(".col-4 a ").removeClass("disable");
        $(".col-4 a").removeClass("O");
        $(".col-4 a").removeClass("X");
        turns = 0;
      }
    }
  });
  $("#reset").on("click", function () {
    document.getElementById("q").innerHTML = " ";
    document.getElementById("p").innerHTML = " ";
    $(".col-4 a ").text("+");
    $(".col-4 a ").removeClass("disable");
    $(".col-4 a").removeClass("O");
    $(".col-4 a").removeClass("X");
    turns = 0;
  });

})