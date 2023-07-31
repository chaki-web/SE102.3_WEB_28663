var redButton = document.getElementById("redButton");
var greenButton = document.getElementById("greenButton");
var blueButton = document.getElementById("blueButton");

redButton.style.backgroundColor = "red";
greenButton.style.backgroundColor = "green";
blueButton.style.backgroundColor = "blue";

redButton.addEventListener("mouseover", function() {
  this.style.backgroundColor = "darkred";
});
redButton.addEventListener("mouseout", function() {
  this.style.backgroundColor = "red";
});

greenButton.addEventListener("mouseover", function() {
  this.style.backgroundColor = "darkgreen";
});
greenButton.addEventListener("mouseout", function() {
  this.style.backgroundColor = "green";
});

blueButton.addEventListener("mouseover", function() {
  this.style.backgroundColor = "darkblue";
});
blueButton.addEventListener("mouseout", function() {
  this.style.backgroundColor = "blue";
});