let output= document.getElementById("output")

let num1;
let num2;


function isNeg(){
    if(output < 0){
        document.getElementById("output").style.color = "#FF0000"
    }
    else {
        document.getElementById("output").style.color = "#000000"
    }
}


function Add(){
    num1 = document.getElementById("first-number").value;
    num2= document.getElementById("second-number").value;
    output= document.getElementById("output").innerHTML= String(Number(num1)+ Number(num2));
    isNeg();
}

function Subtract(){
    num1 = document.getElementById("first-number").value;
    num2= document.getElementById("second-number").value;
    output= document.getElementById("output").innerHTML= String(Number(num1)- Number(num2))
    isNeg();
}

function Divide(){
    num1 = document.getElementById("first-number").value;
    num2= document.getElementById("second-number").value;
    output= document.getElementById("output").innerHTML= String(Number(num1) / Number(num2));
    isNeg();
}

function Multiply() {
    num1 = document.getElementById("first-number").value;
    num2= document.getElementById("second-number").value;
    output= document.getElementById("output").innerHTML= String(Number(num1) * Number(num2));
    isNeg();
}
function Power() {
    num1 = document.getElementById("first-number").value;
    num2 = document.getElementById("second-number").value;

    let ans = 1
    if(num2 >= 0){
        for (let i = 0; i < num2; i++) {
            ans = num1 * ans;
        }
    }
    else{
        for (let i = 0; i < -num2; i++) {
            ans = num1 * ans;
        }
        ans= 1/ ans;
    }

    output = document.getElementById("output").innerHTML = String(ans);
    isNeg();



}

function Clear() {
    document.getElementById("output").innerHTML = String("");
    document.getElementById("first-number").value="";
    document.getElementById("second-number").value="";
}