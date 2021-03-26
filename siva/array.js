/*let siva = [5,6,9];
   
  document.getElementById("demo").innerHTML = siva;*/

  /*var x=[5,8,9,6,3,2];
  document.getElementById("demo").innerHTML=x[3];*/
  /*var f=["siva","rupa","venkat","paddu"]
  f[3]="srinu";
  document.getElementById("demo").innerHTML=f;*/
  /*var person = {firstName:"John", lastName:"Doe", age:46};

  document.getElementById("demo").innerHTML=person["firstName"]*/
 /* var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.length-1;*/
/*var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join( " "+ "&"  +" ");

function myFunction() {
  fruits.push("siva");
  document.getElementById("demo").innerHTML = fruits;
 // alert("length of array is:" +  "     " + fruits.length)
}