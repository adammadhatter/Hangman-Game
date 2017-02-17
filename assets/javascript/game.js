  var wordList = ["eruption", "frankenstein", "oakland", "3",
 "gary cherone", "black sabbath", "pensacola"];
  var correctLetter = [];
  var wrongLetter = [];
  var letterGuessed = [];

  var chosenWord = "";
  var letterInChosenWord = [];
  var numBlanks = 0;
  var blanksAndSuccesses = [];
  var wrongGuesses = [];

  var winCounter = 0;
  var lossCounter = 0;
  var numGuesses = 9;
  
  function startGame(){

//1. select a word at random
//2. want to break up that random word into letters and    replace them with underscores
//3. we want to add those underscores to the html
//4. numguesses always equal 9, and blanksandsuccesses is an empty array, and wrongguesses is empty as well

  numGuesses = 9;
  blanksAndSuccesses = [];
  wrongGuesses = [];

  chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  console.log(chosenWord);
  console.log(numBlanks);


  for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");

  }
  console.log(blanksAndSuccesses);
  document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("guesses-left").innerHTML = numGuesses;
  


  }

  function checkLetters(letter){

    //1. compare the letter the user picks matches any of theletters in the word
    //2. i want a conditional statement to determine if the letter the user picked is in the word. if so, do something,if not, do something else
    //3. if the user is wrong we want to decrease the numGuesses variable by one

    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;


        } 
    }

    if(letterInWord){ 
          for(i = 0; i < numBlanks; i++){
              if(chosenWord[i] === letter){
              blanksAndSuccesses[i] = letter;

          }     
          }
    }else{
        numGuesses --;
        wrongGuesses.push(letter)
    }

  }

  function roundComplete(){

    //1. its going to update the html with letters that are in the word
    //2. its going to update the html with guesses we have left
    //3. its going to update the html to show the wrong guesses
    //4. its going to d(etermine whether the user won the game or not
  document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");  
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if(lettersInChosenWord === blanksAndSuccesses){
      winCounter++;
      alert("You Win!!");
      document.getElementById('win-counter').innerHTML = winCounter;
      startGame();
  }else if(numGuesses === 0){
    document.getElementById('loss-counter').innerHTML = lossCounter++;
    alert("you don't have any more guesses");
    startGame();
  }






}
  startGame();
  document.onkeyup = function(event){

    //1. its going to take in the letter we type in
    //2. its going to pass it through the checkLetter function
  
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("this is the letter we typed", letterGuessed)
    checkLetters(letterGuessed)
    roundComplete();



  }