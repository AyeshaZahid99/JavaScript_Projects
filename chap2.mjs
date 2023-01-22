/*let myVar ="I want to change\n by browser. \\!";
console.log(myVar);

let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two Strings are the same:", str1==str2);

let sym1 = Symbol("JavaScript is fun!");
let sym2 =Symbol("JavaScript is fun!");
console.log("These two Strings are the same:", sym1==sym2);
//both are okayy
console.log(typeof sym1);  
console.log(typeof(str1));

let nr1 = 2;
nr1=String(nr1);
console.log("Type of nr1:", typeof nr1);
let nr2 = "4";
nr2=Number(nr2);
console.log("Type of nr2:",typeof nr2);
nr2=Boolean(nr2)
console.log("New Type of nr2:",typeof nr2);
console.log(nr1 * nr2); // Since JavaScript is loosely typed  language: JS tries to convert String value into a Number 
console.log(nr1 + nr2); // Plus Sign is used to Concatenate Strings.

let practice = null;
practice = Number(null);
console.log("The type of Practice is now:",typeof practice);
let emptyVar= "MyNam";

//Anything that can not be interpreted as a number by simply removing the quotes will evaluate as NaN number.   
emptyVar=Number(emptyVar);
console.log(emptyVar, typeof emptyVar);

//Only an Empty String, a null value and an undefined will lead to a Boolean value of "false"
let myEmptyVariable = "";
myEmptyVariable= Boolean(myEmptyVariable);
console.log(myEmptyVariable, typeof myEmptyVariable);

let pr1 = 2;
let pr2 = "2";
console.log(pr1 + Number(pr2));


//Example 2.1
let str01 = 'Laurence'; 
console.log(typeof str01);
let str02 = "Svekis"; 
console.log(typeof str02);
let val1; // let val1 = undefined;  both will give same result but writting "undefined" is not a good practise. 
console.log(typeof val1);
let val2 = null;
console.log(typeof val2);
let myNum = 1000;
console.log(typeof myNum);

//Example 2.2
let myName = "Ayesha Zahid";
let myAge= "23";
let myCodingCapability = true;
console.log(`My name is ${myName} , I am ${myAge} years old.This  is ${myCodingCapability} that  I can write and understand basic JS codes`);
let sub1 = 2;
let sub2 = "two";
console.log(sub1 - sub2); // a word  and a number Subtracting is not a number.
let baseNum = 2;
let exp = 3;
console.log(baseNum ** exp); // multiply 2 by itself 3 time.

let squareRoot = 4;
let exp1 = 0.5;
console.log(squareRoot ** exp1);

let mod1 = 10;
let mod2 = 3 ;
console.log(mod1 % mod2);

let mod3= 10;
let mod4 = 2 ;
console.log(mod3 % mod4);

//Task
//Add 125 minutes to the current time

let answer =125 % 60;
console.log(answer);
console.log(Date());
let ans1 =new Date();
console.log(ans1.getHours() + 5 + ":" + ans1.getMinutes());

//Unary Operators   we only need one operand for these operators.
let num01 =5;
//num01 = num01++;
console.log(num01++);
console.log(num01);

let num02 =8;
num02 = num02++;
//num02 = ++num02;
console.log(num02);
console.log(num02);

//Example 2.3
/*Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
theorem when given the values of the other two sides. The theorem specifies that the 
relation between the sides of a right-angled triangle is a2+ b2= c2.*/

import promptSync from "prompt-sync";
/*
const Prompt = promptSync();
let a = Prompt("Enter the first value");
let b = Prompt("Enter the Second value");
function Pythagorus(a,b){
 /*let c = a*a;
 let d = b*b;
 let e = c + d;
 let f= Math.sqrt(e);
 
let c =Math.floor(Math.sqrt(a*a + b*b))
 console.log(c);
Pythagorus(a,b);
let f =Math.sqrt(162);
console.log(f);
*/


//Example 2.4
/*
let expression1= 2;
let expression2= 3;
let expression3= 4;
let btoa = expression2 + expression1;
console.log("b to a = ",btoa);
let divabyc =expression1/expression3;
console.log("Divide a by c = ",divabyc);
expression3 = expression3 % expression2;
console.log("New value of c = ",expression3);
*/



// Chapter Project 
//Miles To KiloMeter Converter
//The Distance of 130kms is equal to 209.2142 miles.
// hint 1 mile = 1.60934 kilometers


/*
let mile= Prompt("Enter No.of Miles..")
let  milesToKilometer = mile * 1.60934;
console.log(`${mile} miles is equal to: ${milesToKilometer} kilometers.`);
// Kilometers to miles 
let Kilometer= Prompt("Enter No.of Miles..")
let  KilometerToMiles = Kilometer / 1.60934;
console.log(`${Kilometer} kilometers is equal to: ${KilometerToMiles} Miles.`);
*/



//BMI Calculator
/*
let heightInInches = Prompt("Enter  your height in Inches");
let WeightInPounds = Prompt("Enter  your weight in Pounds");
let WeightInKilos = WeightInPounds/2.2046;
let heightInCm =heightInInches * 2.54;
console.log(`Weight in Kilo= ${WeightInKilos} & height in cm = ${heightInCm}`);
*/


//Self Check Quiz
/*1. String 
2. Number
3. line2
4. world
5. Hello world
6.
7. 71
8. 4
9. total = 15/17,   total2 = 534/537 (Incorrect)


let h ="hello";
h="world";
console.log(h);

let q="world";
let r = `Hello ${q}`;
console.log(r);

let z ="hello";
//z =prompt("world");
console.log(z);

let l = 5;
let m = 70;
let n = "5";
m++;
console.log(m);

let answer8 = 3 + 4 * 2/8;
console.log(answer8);


/*
let firstNum = 5;
let secondNum = 10;
firstNum++;
console.log("The initial result of firstNum++ is:",firstNum);
secondNum--;
console.log("The initial result of secondNum-- is:",secondNum);
++firstNum
console.log("The value of ++firstNum is:", firstNum);
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);

*/

const a = 5;
const b = 10;
console.log(a > 0 && b > 0); 
console.log(a == 5 && b == 4); 
console.log(true ||false);  //mmmmmm 
console.log(a == 3 || b == 10); 
console.log(a == 3 || b == 7);