"# JavaScript_Projects" 
Over View Of Chapter#02

  A variable consists of 3 parts:
.  variable defining keyword
.  a name
.  a value 
 
Variable defining keywords can be let, var, const.

The difference between var and let is of "SCOPE"
var has a "GLOBAL SCOPE" while let has a "BLOCK SCOPE".

JavaScript is loosely typed language, determines the types based on values.

JavaScript has 7 premitives.
String 
Number
BigInt
Boolean 
Symbol
Undefined
Null

Strings ->
used to store sequence of characters.
3  ways to declare strings are:
  Single Quotes
  Double Quotes
  Back ticks

The limits of number data type are between (2^53 -1) to -(2^53 -1)

BigInt numbers can be recognized by the postfix "n".

Symbol is a brandnew data type introduced in (ECMA Script 6) or ES6
SYMBOLS can be used when it is important that variables are not equal, even though their values and types are same.

null is a special value for saying that a variable is empty and has an unknown value, this is case sensitive (lower case will be  used)

Built-in methods are piece  of logic that can be used without having to write JavaScript logic yourself.
typeOf
typeOf is an Operator not a method so no need to put on brackets by its sides.

typeOf "null" returns an object and that is a BUG that can not be resolved now because of backward compatiblity problems.

Variables in JavaScript can change types.
There are three conversion methods:
1- String( )
2- Number( ) //If a variable can not be changed into a number its value is converted into NaN (Not a Number)
3- Boolean( )

Operators are used to perform some operation on our variables.

Exponentiation means raising a certain base number to a power of exponent.

The square root of a value is same as raising it to a power of 0.5.


var d = new Date("2011-04-20T09:30:51.01");
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51


Modulus is an operation in which you determine how much is left after dividing a number by another number in its entirety.

Unary operators do increment or decrement, here the term Operand is used.
Operand are  subject to Operator.
eg: x + y ( x & y are operands here)

Prefix Unary Operators: x++
Postfix Unary Operators: ++x

Operators get combined working on phenomenon 	of "Operator Precedence".
	  
The outcome of comparision operators is always  "Boolean" 

Equality Operators come in two flavours:
== (checks for similar values only) ALSO called "LooseEquality".
===(checks for similar values as well as similar data types) ALSO called "Strict Equality".


Over View Of Chapter#03

                   JavaScript Multiple Values
The positional value of the last element in the Array will be one fewer than the total number of elements.

Array Methods:
Methods are functions on certain object , instead of holding values like properties they perform "action".

using .push method value gets pushed to the end of the array.

Reversing puts the last element first and the first elememt last, no matter whether the array is sorted or not.

As Arrays can contain any data type, also they can contain other arrays as well  --> MULTIDIMENTIONAL ARRAYS

Array of already existing arrays is called "Two Dimentional Arrays"

Arrays are very special type of Objects.

Arrays are objects with indexed properties.
Objects are here with named properties.
An Object is a chance to group multiple variables into one.




