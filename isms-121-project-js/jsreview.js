let a;

a = 10;//Assign the integer value 10 to the variable a
b = 11;//Create variable b and assign the integer value 11 to it.No previous declaration statement
var c = 12;//Declare variable c and assign it the value of 12 in one statement

console.log(a);
console.log(b);
console.log(c);

a="hello";
console.log(a);
a="true";
// const aa=13
// aa=12

var d;
console.log(d);
a=null;
console.log(a);


let firstName="Sachin";
let lastName="Tendulkar";
console.log(firstName+" "+lastName);

// let num1=10;
// let num2=20;
// console.log(num1+num2);

// a=10;
// b=20;
// var result=a<b;
// console.log(result);

a=1
b=2
console.log(a<3 && b<3);
console.log(a>3 && b<3);    
console.log(a>3 || b<3);
console.log(!(a<3));
console.log(!(a<3) || !(b>3));

let age=17;
const isAdult=(age>20)? "Yes":"No";
console.log(isAdult);

let numcount="qwertyuiopasdfghjklzxcvbnm"
console.log(numcount.length);

let numcount2="qwertyuiopasdfghjklzxcvbnm"
console.log(numcount2[17]);;

let minimumVotingAge=18;
age=17;
if(age<minimumVotingAge){
    console.log("Not eligible to vote");
}
else{
    console.log("Eligible to vote");
}

let n=0;
while(n != 5){
    let randomNum =Math.random() * 10;
    n= Math.floor(randomNum);
    console.log("Generated RandomNumber=" +n);
}

let x =0;
do{
    x+=1;
    console.log("do...while counter=="+x);
} while(x < 0);

function addTwoNumbersA(number1,number2){
    return number1+number2;
}

const addTwoNumbersB= function(number1,number2){
    return number1 + number2;
}

console.log(addTwoNumbersA(20,30))
console.log(addTwoNumbersB(20,30))

function multiply(number1,number2,number3){
    return number1*number2*number3
}
console.log(multiply(2,4,5))

function divide(number1,number2){
    return number1/number2
}
console.log(divide(10,2))

function square(number){
    return(number ** 2);
}
let number =20;
const numberSquared =square(number);
console.log(numberSquared);
console.log(number);

function multiply(numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}

console.log(multiply([1, 2, 3, 4, 5]));

const vehicles=["car","lorry","trailer"]
vehicles[2]="truck";
vehicles.push("bus");

console.log(vehicles);

const basket=["teebo"];

console.log(basket.length);

