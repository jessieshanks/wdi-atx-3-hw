// Make sure to psuedocode out your adventure!!!
// One way to get input is to use the prompt() command
// You can have your adventure play out using alerts or in the console using console.log().

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


// Notes to store info for later use in the game:

    // Outcome 1
    // "You have united the tribes and been crowned ruler of all the Mongols. Your people will sing of your victories for generations."

    // Outcome 2
    // "You have been killed. Your sister poisoned your soup, and has taken over your title. You received an honorable burial, but your sister makes sure you are quickly forgotten."

    // Outcome 3
    // "You have conqured Central Asia and become Empress of the Steppe. You are the feared ruler of a mighty global superpower. Your legend will live forever."

    // Outcome 4
    // "You live a long and happy life, quietly ruling over your tribal domain. The grass grows long and your people flourish."

    // Outcome 5
    // "You die at 16 from the plague and are mourned by your suffering people. The disease dessimates much of your family, along with many other families. Rule of your tribe passes to the surviving nobles."

    // Outcome 6
    // "You are defeated by your neighbors to the east. Your are enslaved by the victors and your people live under tyranny until your great-great-great-grandaughter regains the title."

    // Outcome 7
    // "You travel through a time warp and find yourself in the 21st century. Unmoored and confused, you eventually realize there is no way home. Forced to find a new livlihood, you turn to coding. You become a legendary programmer whose startup becomes an international sensation."

    // Intro
    // "You are Khatan, the young Queen of your Mongolian tribe."
    // "Though only 15 years old, you have trained as a both a warrior and scholar, and are esteemed as a wise ruler."





//Global Variables
var choice;
var choiceQuestion;
var choiceOptions;


var choiceErrorMessage = function() {
//Displays error message
  alert("Not a valid choice. Please try again.");
}

var validChoice = function(userChoice,testList) {
//Checks user input against list of valid answers
  var x=false;
  for (var i=0; i<testList.length; i++) {
    if (userChoice==testList[i]) {
      x=true;
      break;
    }
  }
  return x;
}

var newChoice = function(question, options) {
//Get user choice, given a question and list of possible answers
  choice = prompt(question);
  while (!(validChoice(choice,options))) {
    choiceErrorMessage();
    choice = prompt(question);
  }
  return choice;
}

var intro = function() {
//Introduction to KHATAN: The Adventure
  alert("SHALL WE PLAY A GAME?");
  console.log("KHATAN: The Adventure\n\n\n");
  console.log("You are Khatan, the young Queen of your Mongolian tribe.\nThough only 15 years old, you have trained as a both a warrior and scholar,\nand you are esteemed as a wise ruler.\n\n\n");
}

var firstChoice = function() {
//First Choice: Ride Confer Visit
  console.log("It is a beautiful early-summer morning on the steppe.\n\nHow will you spend this day?\n\u2022  Will you go for a long ride on your best mare?\n\u2022  Will you call a meeting to confer with your most trusted ministers?\n\u2022  Will you pay a visit to your most revered and ancient shaman?\n\n\n");
  choiceQuestion = "Ride, Confer, or Visit?\n\(R or C or V\)";
  choiceOptions = ["R", "C", "V"];
  choice = newChoice(choiceQuestion, choiceOptions);
  return choice;
}

var rideChoice = function() {
//Riding Choice: Investigate or No?
  console.log("The long ride affords you much-needed time to think\nand to enjoy the beauty of the lands under your rule.\n\nThen, out of the corner of your eye, you glimpse a figure moving in your direction, from the east.\n\u2022  Do you stop to investigate or keep riding?\n\n\n");
  choiceQuestion = "Investigate? Yes or No?\n\(Y or N\)";
  choiceOptions = ["Y","N"];
  choice = newChoice(choiceQuestion, choiceOptions);
  return choice;
}

var shamanTransition = function () {
//Transition from rideChoice to shamanTrack
  console.log("You head east to investigate. It is the shaman, approaching on foot.\n\"I have been waiting for you, my child,\" she says. \"You must come visit me.\"\nYou agree, and give her your mare to ride for the long journey to the wood where the shaman dwells.\n\n\n");
}

var unfinishedGameMessage = function () {
//Displays unfinished game message. Dead end.
  alert("The game is unfinished. Your journey ends here.");
}


// Game Play

intro ();

if (firstChoice()==="R") {
  if (rideChoice()==="Y") {
    shamanTransition();
    unfinishedGameMessage();
  } else {
    unfinishedGameMessage();
  }
} else {
  unfinishedGameMessage();
}







=======
>>>>>>> hw-w02d03
=======
>>>>>>> ec56924331b31579bfe799d7b11473d4c3e2d21b
=======
>>>>>>> bd5ce8011bfeea0675790c464dd26a2108fb6980
