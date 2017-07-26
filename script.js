var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function (){
 colors = generateRandomColors(6);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for
});

colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];//assigning the colours to the squares
    squares[i].addEventListener("click", function(){
     // get colour of clicked square
     var clickedColor = this.style.backgroundColor;
     //compare colour to pickedColour
   
    if (clickedColor === pickedColor){
       messageDisplay.textContent = "Correct!!";
       changeColours(clickedColor);
       h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
         messageDisplay.textContent = "Try again";

      }
    });
  }

  function changeColours(color){
    for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = color;
    }
  }

   function pickColor(){
     var random = Math.floor(Math.random() * colors.length);
       return colors[random];
    }

function generateRandomColors(num){
  var arr = [];

   for (var i = 0; i < num; i++){//repeat num times
     //get random color and push into arr
     arr.push(randomColor())
   }
   //return that arr 
   return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

