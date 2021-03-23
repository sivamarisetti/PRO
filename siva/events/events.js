let first = document.querySelector('#hi1');
let second = document.querySelector('#hi2');
let third = document.querySelector('#hi3');
let forth = document.querySelector('#hi4');
let fifth = document.querySelector('#hi5');
let sixth = document.querySelector('#hi6');

first.addEventListener('mouseover', () => first.style.backgroundColor='blue')
second.addEventListener('mouseover', () => second.style.backgroundColor='red')
second.addEventListener('mouseout', () => second.style.backgroundColor='yellow')
third.addEventListener('click', () => third.style.backgroundColor='blue')
forth.addEventListener('dblclick', () => forth.style.backgroundColor='pink')
function myFunction(fifth){
fifth.style.background="green";
}
/*function myFunction(){
  var x=
  document.getElementsById("hi6");
  x.value = x.value.toUpperCase();

}*/