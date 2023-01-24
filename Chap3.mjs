//Arrays
let arr1= new Array("red","yellow","blue","green");
let  arr2=["aqua","violet","rose pink"];
console.log(arr1,arr2);

let arr= new Array(10);
console.log(arr);
arr2 = ["I love my life"];
console.log(arr2);

//Accessing Elements
console.log(arr1[0]);
//Trying to pickup a non-existing element
console.log(arr1[-1]);  // JS will through "undefined"
arr1[0]="Marry Gold";
console.log("The  new array is", arr1);

arr2[0]="Marry Gold";
console.log("The  new array is", arr2);
arr2[-1]= "Royal Blue";//though this is acceptable but it is not the right way to add values in an array.
console.log("Setting values in negative index looks like", arr2);

//Length Property in an Array
console.log("Length of Array1",arr1.length);
let emptyArray = [];
console.log("Length of Array1",emptyArray.length);
let booleans = [true, false, false, true];
console.log(booleans.length);

//To access the last element of an array.
let lastElement = arr1[arr1.length - 1];

let numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers,numbers.length);

//.length is a built-in property 


//Example 3.1
let shoppingList = ["Milk", "Bread", "Apple"];
console.log(shoppingList.length);
shoppingList[1]="Banana";
console.log(shoppingList);


//Array Methods
let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("pineapple");
console.log(favoriteFruits);

let lengthOfFavouriteFruits = favoriteFruits.push("kivi");
console.log(lengthOfFavouriteFruits);
console.log(favoriteFruits);

//Using Splice
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2,2,"hobnob","delizia");
console.log(arrOfShapes);

//Using concat()
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let newArray = arr5.concat(arr6);
console.log(newArray);
console.log(arr5.concat(9,10,11,12));

//Deleting Elements
arr5.pop()  //deletes very last element
arr5.shift() //deletes first element
console.log("The newly trimmed arr5", arr5);

//finding elements from an Array
let arr8 =[2,4,6,8];
arr8.find(function(e){return e==4});
console.log(arr8.find(function(e){return e==4}));

console.log(arr8.find(e => e ==10));  // undefined is displayed as a result.
console.log(arr8.indexOf(4,1));

let animals = ["dog", "horse", "cat", "platypus", "dog"];
console.log(animals.lastIndexOf("dog"));
console.log(animals.sort());
let newToBeSorted =[8,9,7,5,8,2,9]
console.log(newToBeSorted.sort());

//Reversing
let arrayToBeReversed = ["Alif","Harif","Sharif","Oqtif","Shitt"];
console.log(arrayToBeReversed.reverse());



//Example # 3.2

///Create an empty array to use as a shopping list.
let emptyShoppingList =[];
//Add Milk, Bread, and Apples to your list.
emptyShoppingList.splice(0,0,"Milk","Bread","Apples");
//Update "Bread" with Bananas and Eggs.
emptyShoppingList.splice(1,1,"Bananas","Eggs");
//Remove the last item from the array and output it into the console.
emptyShoppingList.pop();
console.log(emptyShoppingList);
//Sort the list alphabetically.
console.log(emptyShoppingList.sort());
//Find and output the index value of Milk.
console.log(emptyShoppingList.indexOf("Milk"));
//After Bananas, add Carrots and Lettuce.
emptyShoppingList.splice(1,0,"Carrots","Lettuce");
console.log(emptyShoppingList);
//Create a new list containing Juice and Pop.
let new_list = ["Juice","Pop"];
//Combine both lists, adding the new list twice to the end of the first list.
console.log("My new merged list is : ",emptyShoppingList.concat(new_list).concat(new_list));
console.log("My new merged list2 is : ",emptyShoppingList.concat(new_list,new_list));
let newMergedOne = emptyShoppingList.concat(new_list,new_list);
console.log(newMergedOne.lastIndexOf("Pop"));

//MultiDimentional Arrays

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let TwoDimentionalArray = [someValues1,someValues2,someValues3];
console.log(TwoDimentionalArray);   

//Excessing Elements from inner arrays
console.log(TwoDimentionalArray[1][1]);

//Exercise 3.3
//Create an array containing three values: 1, 2, and 3.
let firstArray =[1,2,3];
//Nest the original array into a new array three times.
let myNewArray =[firstArray,firstArray,firstArray];
//Output the value 2 from one of the arrays into the console.
console.log(myNewArray[0][1]);


//Objects In JavaScript
console.log(typeof myNewArray);

let dog ={
    dogName : "JavaScript",
    weight : 2.4,
    color : "Brown",
    breed : "chihuahua",
    age: 3,
    burglarBiter : true,
};
//accessing properties from Objects

console.log(dog.color);
console.log(dog["color"]); //both ways are correct to access properties.

//Updating Objects 
dog["color"] = "Pink";
dog.weight= 5.8;
console.log(dog);
let variable = "age";
dog[variable] = 50;
console.log(dog);

//Example 3.4
/*Create a new myCar object for a car. Add some properties, including, but not 
limited to, make and model, and values for a typical car or your car. Feel free 
to use booleans, strings, or numbers.*/

let myCar ={
    Model : "KIA",
    milage : 34,
    color : "Silver",
    make :"Japaneese",
    forSale : true
}

/*Create a variable that can hold the string value color. This variable 
containing a string value color can now be used to reference the property 
name within myCar. Then, use the variable within the square bracket notation 
to assign a new value to the color property in myCar.*/

let newVariable = "color";
myCar[newVariable] = "Purple"
console.log(myCar);

/*Use that same variable and assign a new property string value to it, such as 
forSale. Use the bracket notation once again to assign a new value to the 
forSale property to indicate whether the car is available for purchase.*/

newVariable = "forSale";
myCar[newVariable] = true;
console.log(myCar);

//Output make and model into the console.

console.log(`The make of my Car is ${myCar.make} and its model is ${myCar.Model}`);
console.log(myCar.forSale);

//Working With Objects and Arrays 

//Objects in Objects 
let company =
{ 
companyName: "Healthy Candy",
activity: "food manufacturing",
address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
 },
yearOfEstablishment: 2021
};
console.log(company.address.zipcode);

//Arrays in Objects 
let company1 =
{ 
companyName: "Healthy Candy",
activity: ["food manufacturing","Food Packaging", "Preserving","Food Delivery"],
address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
 },
yearOfEstablishment: 2021
};

//To retrieve a value out of an property containing  array
console.log(company1.activity[1]);

//Objects in Arrays

let ObjectsInArrays= [
    {name:"Aliza",
    class:"Pre-Primary",
    section : "B"
},
{
    name1 : "Mailezia",
    class : "NurseryRose",
    section :"C"
}
];
console.log(ObjectsInArrays[1].class);


//Objects in  arrays in Objects 

let megaObject = {
    nameOfObject: "Schooling System",
    StudentBio:
    [
        {name:"Aliza",
        class:"Pre-Primary",
        section : "B"
    },
    {
        name1 : "Mailezia",
        class : "NurseryRose",
        section :"C"
    }
    ],
    ScoolOpen: true,
}
console.log(megaObject.StudentBio[0].class);

//Example 3.5

/*Create an object named people that contains an empty array that is called 
friends.*/

let people = {
    friends : [],
}

/*Create three variables, each containing an object, that contain one of your 
friend's first names, last names, and an ID value.*/

let var1 = {
    name : "Tooba",
    lastName : "Malaika",
    ID :2258
}
let var2 = {
    name : "Diya",
    lastName : "Dain",
    ID :2222
}
let var3 = {
    name : "BlackSheep",
    lastName : "Sheep",
    ID :2221
}

//Add the three friends to the friend array.
people.friends.splice(0,0,var1,var2,var3);
console.log(people);

//Chapter Projects 

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];

//Remove the first item and the last item.
theList.pop();
theList.shift();


//Add FIRST to the start of the array.
theList.splice(0,0,"FIRST");

//Assign hello World to the fourth item value.
theList.splice(3,1,"Hello World");

//Assign MIDDLE to the third index value.
theList.splice(2,1,"MIDDLE");

//Add LAST to the last position in the array.
theList.push("LAST");
theList.splice(4,3);
console.log(theList);

//["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]



//Company Product Catalogue

//Create an array to hold an inventory of store items.
let inventoryItems = [];
/*Create three items, each having the properties of name, model, cost, and 
quantity*/
let itemOne = 
{
name: "LipBalm",
model: "BabyLips",
cost : "450",
quantity: 5
};
let itemTwo = 
{
name: "Nivea Lotion",
model: "Nivea",
cost : "4000",
quantity: 6
}
let itemThree = 
{
name: "Moisturizer",
model: "Dove",
cost : "5500",
quantity: 7
}
/*Add all three objects to the main array using an array method, and then log 
the inventory array to the console.*/
inventoryItems.splice(0,0,itemOne,itemTwo,itemThree);
console.log(inventoryItems);
/*Access the quantity element of your third item, and log it to the console. 
Experiment by adding and accessing more elements within your data 
structure.*/

console.log(inventoryItems[2].quantity);


//Self Check Quiz 
/*
1. 
2. length
3. undefined, 1
4. myArr.splice(1,1,4)
5. [<9 empty values>, "test"], empty value 
6. [3,3,6,8,9,55,434,553];
7.
*/


const myArr3 = [3,6,8,9,3,55,553,434];

myArr3.sort();
console.log(myArr3);
myArr3.length = 0;
console.log(myArr3);
console.log(myArr3[0]);
