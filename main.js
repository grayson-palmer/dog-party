
// ** Add in  onclick="changeName()" to the submit button for 'onclick' functionality
// function changeName() {
//  var someDog = document.querySelector('#dog-text');
//  var newName = document.querySelector('#name');
//  someDog.innerText = newName.value;
//  newName.value = '';
// }

var button = document.querySelector('.submitBtn');

button.addEventListener('click', function () {
  var someDog = document.querySelector('#dog-text');
  var newName = document.querySelector('#name');
  someDog.innerText = newName.value;
  newName.value = '';
});