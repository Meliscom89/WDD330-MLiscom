





function updateTextInput(val) {
    document.getElementById('textInputSlider').value=val;
}
// let data = ["Char_1", "Char_2", "Char_3", "Char_4", "Char_5", "Char_6", "Char_7", "Char_8", "Char_9", "Char_10", "Char_11", "Char_12", "Char_13", "Char_14", "Char_15"];

// let list = document.getElementById("myChar");

// data.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerHTML = "<a href=" + item + ".html>" + item + "</a>"
//   list.appendChild(li);
// });



//Roll Dice Apps
//d4 roll
function rollD4 () {
let d4Value = Math.floor(Math.random()*4 + 1);
let d4Output = document.getElementById("d4Placeholder")
d4Output.innerHTML = "You rolled a " + (d4Value);
}
//d6 roll
function rollD6 () {
  let d6Value = Math.floor(Math.random()*6 + 1);
  let d6Output = document.getElementById("d6Placeholder")
  d6Output.innerHTML = "You rolled a " + (d6Value);
  }

  //d8 roll
function rollD8 () {
  let d8Value = Math.floor(Math.random()*8 + 1);
  let d8Output = document.getElementById("d8Placeholder")
  d8Output.innerHTML = "You rolled a " + (d8Value);
  }

    //d10 roll
function rollD10 () {
  let d10Value = Math.floor(Math.random()*10 + 1);
  let d10Output = document.getElementById("d10Placeholder")
  d10Output.innerHTML = "You rolled a " + (d10Value);
  }

    //d12 roll
function rollD12 () {
  let d12Value = Math.floor(Math.random()*12 + 1);
  let d12Output = document.getElementById("d12Placeholder")
  d12Output.innerHTML = "You rolled a " + (d12Value);
  }

    //percent die
function rollPercent () {
  let percentValue = Math.floor(Math.random()*100 + 1);
  let percentOutput = document.getElementById("percentPlaceholder")
  percentOutput.innerHTML = "You rolled a " + (percentValue);
  }

    //d20 roll
function rollD20 () {
  let d20Value = Math.floor(Math.random()*20 + 1);
  let d20Output = document.getElementById("d20Placeholder")
  d20Output.innerHTML = "You rolled a " + (d20Value);
  }
