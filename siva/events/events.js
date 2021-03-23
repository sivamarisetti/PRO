let first = document.querySelector('#hi1');
let second = document.querySelector('#hi2');
let third = document.querySelector('#hi3');
let forth = document.querySelector('#hi4');
let fifth = document.querySelector('#x');
let sixth = document.querySelector('#hi6');
let text= document.querySelector('input[type="text"]');
first.addEventListener('mouseover', () => first.style.backgroundColor='blue')
second.addEventListener('mouseover', () => second.style.backgroundColor='red')
second.addEventListener('mouseout', () => second.style.backgroundColor='yellow')
third.addEventListener('click', () => third.style.backgroundColor='blue')
forth.addEventListener('dblclick', () => forth.style.backgroundColor='pink')
text.addEventListener('focus', (event)=>{
  event.target.style.background="green";
})
/*text.addEventListener('blur',(event) => {
  event.target.style.background= '#EE82EE';
})*/



function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}