document.querySelector('img').onclick = function() {
    alert("You're in the Tottenham!");
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tottenham2.webp') {
      myImage.setAttribute ('src','images/tottenham.webp');
    } else {
      myImage.setAttribute ('src','images/tottenham2.webp');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Tottenham is your home, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Tottenham is your home, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}