var myImage = document.querySelector('#pidor');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/123.jpg') {
      myImage.setAttribute ('src','images/0054.jpg');
    } else {
      myImage.setAttribute ('src','images/123.jpg');
    }
}
/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Tatto is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Tatto is Cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}