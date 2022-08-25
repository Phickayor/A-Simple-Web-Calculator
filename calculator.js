const input = document.getElementById("input");
const output = document.getElementById("output");
const ac = document.getElementById("clear");
const del = document.getElementById("del");
const divide = document.getElementById("divide");
const power = document.getElementById("power");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("subtract");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("add");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
ac.addEventListener("click", function(){
    input.innerHTML = "";
    output.innerHTML = "0";
})
del.addEventListener("click", function(){
    input.innerHTML = input.innerHTML.slice(0,-1);
})
divide.addEventListener("click", function(){
    input.innerHTML += "/";
})

power.addEventListener("click", function(){
    input.innerHTML += "**";
})

seven.addEventListener("click", function(){
    input.innerHTML += "7";
})

eight.addEventListener("click", function(){
    input.innerHTML += "8";
})

nine.addEventListener("click", function(){
    input.innerHTML += "9";
})

multiply.addEventListener("click", function(){
    input.innerHTML += "*";
})

four.addEventListener("click", function(){
    input.innerHTML += "4";
})

five.addEventListener("click", function(){
    input.innerHTML += "5";
})

six.addEventListener("click", function(){
    input.innerHTML += "6";
})

minus.addEventListener("click", function(){
    input.innerHTML += "-";
})

one.addEventListener("click", function(){
    input.innerHTML += "1";
})

two.addEventListener("click", function(){
    input.innerHTML += "2";
})

three.addEventListener("click", function(){
    input.innerHTML += "3";  
})

plus.addEventListener("click", function(){
    input.innerHTML += "+";  
})

zero.addEventListener("click", function(){
    input.innerHTML += "0";  
})

dot.addEventListener("click", function(){
    input.innerHTML += ".";  
})
equal.addEventListener("click", function(){
    try{
    output.innerHTML = eval(input.innerHTML).toFixed(2);
    }
    catch(e){
        alert("Error: " + e.message);
    }
})

theme.addEventListener("click", function(){
    var body = document.body;
    body.classList.toggle("dark-theme");
    var theme = document.getElementById("theme");
   if(theme.innerText == "Dark"){
    theme.innerText= "Light"
 }
   else{
    theme.innerText = "Dark"
   }
})