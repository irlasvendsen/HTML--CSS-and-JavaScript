var colors=["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var finished = false;
var guesses = 0;
var guess_input;
var target_index;
var hint;

function doGame(){
  target_index = Math.random() * colors.length;
  console.log("Index of the color random"+target_index);
  //around
  target_index = Math.floor(target_index);
  console.log("Index of the color random with math floor"+target_index);
  alert("The color is: " + colors[target_index]);
  while(!finished)  {
      guess_input = prompt("I am thinking of one of these colors:\n\n" + colors.join(", ")+"\n\n"+"What color am I thinking of?");
      console.log(guess_input);
      guesses +=1;
      finished = check_guess(guess_input);
    }
}

function check_guess(){
  console.log("Color find "+colors.indexOf(guess_input));
  if(colors.indexOf(guess_input) == -1){
    alert("Sorry, I don't recognize your color");
  }
  else if(colors.indexOf(guess_input) != target_index){
    var hint = guess_input < colors[target_index] ? "lower":"higher";
    alert(" Sorry, your guess is not correct! \n\n Hint: your color is alphabetically "+hint+" than mine.\n\n Please try again");
  }
  else{
    getColor();
    alert("Congratulation! You have guessed the color!\n\nIt took you "+guesses+" to finnish the game! \n\n You can see the colour in the background");
    return true;
  }
  return false;
}

function getColor()
{
  return document.body.style.backgroundColor = colors[target_index];
}
