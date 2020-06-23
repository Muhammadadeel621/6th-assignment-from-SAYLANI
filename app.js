// //CHAPTER 01

// // Chapter 01 - Task 01
// alert("Welcome To My Site!!");

// // Chapter 01 - Task 02
// alert("Error! Please Enter a Valid Password", "Javascript Task");

// // Chapter 01 - Task 03
// alert("Welcome to JS Land..\nHappy Coding!!");

// // Chapter 01 - Task 04
// alert("Welcome to JS Land..");
// alert("Happy Coding!!");

// // Chapter 01 - Task 05
// alert("Hello..I can run JS through my web browser's console");

// //CHAPTER 02

// // Chapter 02 - Task 01
// var username;

// // Chapter 02 - Task 02
// var myName = "Muhammad Basit";

// // Chapter 02 - Task 03
// var message;
// message = "Hello World"
// alert(message);

// // Chapter 02 - Task 04
// var stdName = "Muhammad Basit";
// var stdAge = "20 Years Old";
// var Course = "Web & Mobile Hybrid App";
// alert(stdName);
// alert(stdAge);
// alert(Course);

// // Chapter 02 - Task 05
// var food = "PIZZA";
// alert(food.slice(0,5) + "\n" + food.slice(0,4) + "\n" + food.slice(0,3) + "\n" + food.slice(0,2) + "\n" + food.slice(0,1));

// // Chapter 02 - Task 06
// var email = "basit@gmail.com";
// alert("My email address is " + email);

// // Chapter 02 - Task 07
// var book =  "A smarter way to learn JavaScript";
// alert("I am trying to learn from a Book: " + book);

// // Chapter 02 - Task 07
// document.writeln("Yah! I can write HTML Content through JavaScript \n");

// // Chapter 02 - Task 08
// var somethin = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(somethin)

// //CHAPTER 03

// // Chapter 03 - Task 01
// var age = 20;
// alert("I am " + age + " years old");

// // Chapter 03 - Task 02
// var times = 19;
// alert("You have visited this site " + age + " times \n");

// // Chapter 03 - Task 03
// var birthYear = 2000;
// document.writeln("My birth year is " + birthYear + "\n") 
// document.writeln("Data type of my declared variable is " + typeof(birthYear) + "\n");

// // Chapter 03 - Task 04
// var VName = "Muhammad Basit";
// var PTitle = "T-Shirt Gray";
// var Qty = 5;
// document.writeln("<b>" + VName + "</b> ordered <b>" + Qty + " " + PTitle + "</b>(s) on Clothing Store \n") 

// //CHAPTER 04

// // Chapter 04 - Task 01
// var v1, v2, v3;

// // Chapter 04 - Task 02
// var LegalVar, $1Name, _Name, I4Name; //Legal Names
// //var alert, 4Name, 45, 5no, typeof; //Illegal Names

// // Chapter 04 - Task 03
// document.write("<h1>Rules for naming JS Variables</h1> \n\nVariable names can only contain alphabets, $, numbers and _. For example: $my_1stVariable\nVariables must begin with a letter, $ or _. For example $name, _name or name\nVariable names are case sensitive\nVariable names should not be JS keywords");

// //CHAPTER 05

// // Chapter 05 - Task 01
// var no1 = 5, no2 = 10;
// var res = no1 + no2;
// document.writeln("Sum of" + no1 + " and " + no2 + " is " + res);

// // Chapter 05 - Task 02
// var no1 = 5, no2 = 10;
// var res = no1 - no2;
// document.writeln("Subtracition of " + no1 + " from " + no2 + " is " + res);
// res = no1 * no2;
// document.writeln("Multiplication of" + no1 + " and " + no2 + " is " + res);
// res = no1 % no2;
// document.writeln("Modulus of" + no1 + " and " + no2 + " is " + res);

// // Chapter 05 - Task 03
// var number;
// document.writeln("Value after variable declaration is: " + number);
// number = 5;
// document.writeln("Initial value: " + number);
// number++;
// document.writeln("Value after increment is: " + number);
// number = number + 7;
// document.writeln("Value after addtion is: " + number);
// number--;
// document.writeln("Value after decrement is: " + number);
// document.writeln("The remainder is: " + number % 3);

// // Chapter 05 - Task 04
// var cost = 600;
// var priceOf5 = cost * 5;
// document.writeln("Total cost to but 5 tickets to a movie is: " + priceOf5 + "PKR");

// // Chapter 05 - Task 05
// var mnumber = 4;
// document.writeln("Table of " + mnumber);
// for(i = 1; i <= 10; i++)
// {
//     document.writeln(mnumber + " x " + i + " = " + mnumber * i);
// }

// // Chapter 05 - Task 06
// var CTemp = 25;
// var FTemp = 70;
// var ToCelsiusDegree = (FTemp - 32) * 5 / 9;
// var ToFarenheitDegree = (CTemp * 9 / 5) + 32;
// document.write(CTemp + " degree C is" + ToFarenheitDegree + " degree Farenheit");
// document.write(FTemp + " degree F is" + ToCelsiusDegree + " degree Celsius");

// // Chapter 05 - Task 07
// var PI1 = 650, QI1 = 3, PI2 = 100, QI2 = 7, SCharges = 100;
// var TCost = (PI1 * QI1) + (PI2 * QI2) + SCharges;
// document.write("<h1>Shopping Cart</h1> \n\n Price of item 1 is " + PI1 + "\n Quantity of item 1 is " + QI1 + "\nPrice of item 2 is " + PI2 + "\n Quantity of item 2 is " + QI2 + "\n Shipping Charges " + SCharges + "\n\n Total Cost of your order is " + TCost);

// // Chapter 05 - Task 08
// var TMarks = 980;
// var OMarks = 804;
// var Percentage = (804 * 100) / TMarks;
// document.write("<h1>Mark Sheet</h1>\n\n Total Marks: " + TMarks + "\n Marks Obtained: " + OMarks + "\n Percentage: " + Percentage); 

// // Chapter 05 - Task 09
// const dollar = 163.48;
// const riyal = 43.54;
// var Cdollar = 10, CRiyal = 25;
// var totalCurrency = (Cdollar * dollar) + (CRiyal * riyal);
// document.write("<h1>Currency in PKR</h1> \n\n Total Currency in PKR: " + totalCurrency);

// // Chapter 05 - Task 10
// var numberone = 5;
// var result = ((5 + 5) * 10) / 2;
// document.write("the result of "+ numberone +" after addin 5 multiplying with 10 and then dividing by 2 is " + result);

// // Chapter 05 - Task 11
// var birth = 1992, todayYear = 2020;
// var age = todayYear - birth;
// document.write("Your Age is " + age);

// // Chapter 05 - Task 12
// var radius = 20; const pi = 3.142;
// var area = radius * radius * pi;
// var circumferunce = 2 * radius * pi;
// document.write("<h1>The Geometrizer</h1>\n\n Radius of a circle : "+ radius + "\n The Circumference is: " + circumferunce + "\n The area is: " + area);

// // Chapter 05 - Task 13
// var snack = "Lays";
// var cage = 20;
// var eage = 65;
// var NofSnaks = 3;
// document.write("\n You will need " + (eage - cage) * NofSnaks + " to last you until the ripe old age of " + eage);

// //CHAPTER 06-09

// // Chapter 6 - Task 1
// var a = 10;
// document.write("\n Result: \n The value of a: " + a);
// document.write("\n\n The value of ++a is" + ++a);
// document.write("\n Now the value of a is" + a);
// document.write("\n\n The value of a++ is" + a++);
// document.write("\n Now the value of a is" + a);
// document.write("\n\n The value of --a is" + --a);
// document.write("\n Now the value of a is" + a);
// document.write("\n\n The value of a-- is" + a--);
// document.write("\n Now the value of a is" + a);

// // Chapter 6 - Task 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("\n a is: "+ a + "\n b is: "+ b + "\n result is: "+ result);

// // Chapter 6 - Task 3
// var nameofuser = prompt("What is your name?");
// alert("Welcome to my site, "+ nameofuser + "!");

// // Chapter 6 - Task 5
// var mnumber = prompt("Enter a number", 5);
// document.writeln("Table of " + mnumber);
// for(i = 1; i <= 10; i++)
// {
//     document.writeln(mnumber + " x " + i + " = " + mnumber * i);
// }

// // Chapter 6 - Task 5
// var S1Name = prompt("Enter 1st Subject Name: ");
// var S2Name = prompt("Enter 2nd Subject Name: ");
// var S3Name = prompt("Enter 3rd Subject Name: ");
// var S1Marks = 100, S2Marks = 100, S3Marks = 100;
// var S1OMarks = parseInt(prompt("Enter 1st Subject Obtained Marks: "));
// var S2OMarks = parseInt(prompt("Enter 2nd Subject Obtained Marks: "));
// var S3OMarks = parseInt(prompt("Enter 3rd Subject Obtained Marks: "));
// document.write("<table><th><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage></td></th><tr><td>"+ S1Name +"</td><td>"+ S1Marks +"</td><td>"+ S1OMarks +"</td><td>"+ (S1OMarks * 100 / S1Marks) +"%</td></tr><tr><td>"+ S2Name +"</td><td>"+ S2Marks +"</td><td>"+ S2OMarks +"</td><td>"+ (S2OMarks * 100 / S2Marks) +"%</td></tr><tr><td>"+ S3Name +"</td><td>"+ S3Marks +"</td><td>"+ S3OMarks +"</td><td>"+ (S3OMarks * 100 / S3Marks) +"%</td><tr><td></td><td>"+ S1Marks+S2Marks+S3Marks+ +"</td><td>"+ S1OMarks+S2OMarks+S3OMarks +"</td><td>"+ (S1OMarks * 100 / S1Marks) + (S2OMarks * 100 / S2Marks) + (S3OMarks * 100 / S3Marks) +"%</td></tr></tr>")

// //CHAPTER 09-11

// // Chapter 9 - Task 1
// var city = prompt("Enter City Name: ");
// if (city === "Karachi")
// {
//     alert("Welcome to the city of Lights!");
// }

// // Chapter 9 - Task 2
// var gend = prompt("Enter Gender: ");
// if (gend === "male")
// {
//     alert("Good Morning Sir!");
// }
// else if (gend === "female")
// {
//     alert("Good Morning Madam!");
// }

// // Chapter 9 - Task 3
// var color = prompt("Enter Light color: ");
// if (color === "red")
// {
//     alert("Must Stop!");
// }
// else if (color === "yellow")
// {
//     alert("Ready to move!");
// }
// else if (color === "green")
// {
//     alert("Move now!");
// }

// // Chapter 9 - Task 4
// var fuel = parseFloat(prompt("Enter remaining fuel (in litres): "));
// if (fuel <= 0.25)
// {
//     alert("Please refill the fuel in your car!");
// }

// // Chapter 9 - Task 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// // Chapter 9 - Task 6
// var marks1 = parseInt(prompt("First sub. marks: "));
// var marks2 = parseInt(prompt("Second sub. marks: "));
// var marks3 = parseInt(prompt("Third sub. marks: "));
// var tmar = marks1 + marks2 + marks3
// var perc = tmar * 100 / 300;
// var grade = "fail";
// var remarks = "Sorry";
// if(perc >= 80)
// {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(perc >= 70)
// {
//     grade = "A";
//     remarks = "Good";
// }
// else if(perc >= 60)
// {
//     grade = "B";
//     remarks = "You need to improve";
// }
// document.write("\n <h1>Marks Sheet</h1> \n\n Total Marks :  300 \n Marks Obt. " + tmar + "\n Percentage: " + perc + "\n Grade: "+ grade + "\n Remarks: " + remarks);

// // Chapter 9 - Task 7
// var randno = Math.random(1,10);
// var guessed = parseInt(prompt("Guess the number: "));
// if (randno == guessed)
// {
//     alert("Bingo! Correct Answer");
// }
// else if(guessed == --randno)
// {
//     alert("So Close!");
// }

// // Chapter 9 - Task 8
// var gno = parseInt(prompt("Enter number: "));
// if( (gno % 3) == 0)
// {
//     alert("It is divisible by 3")
// }
// else
// {
//     alert("It is not divisible by 3")
// }

// // Chapter 9 - Task 9
// var gino = parseInt(prompt("Enter number: "));
// if( (gino % 2) == 0)
// {
//     alert("It is even")
// }
// else
// {
//     alert("It is odd")
// }

// // Chapter 9 - Task 10
// var gtemp = parseInt(prompt("Enter temperature: "));
// if( gtemp > 40)
// {
//     alert("Today's weather is so Cool")
// }
// else if( gtemp > 30)
// {
//     alert("The weather is normal")

// }
// else if( gtemp > 20)
// {
//     alert("Today's weather is so Cool")    
// }
// else if( gtemp > 10)
// {
//     alert("OMG! Today's weather is so Cool")
// }

// // Chapter 9 - Task 11
// var Fno = parseInt(prompt("Enter first Number: "));
// var Sno = parseInt(prompt("Enter second Number: "));
// var res;
// var operation = prompt("Enter operation:")
// if(operation == "+")
// {
//     res = Fno + Sno;
// }
// else if(operation == "-")
// {
//     res = Fno - Sno;
// }
// else if(operation == "*")
// {
//     res = Fno * Sno;
// }
// else if(operation == "/")
// {
//     res = Fno / Sno;
// }
// else
// {
//     res = "Wrong operation";
// }
// document.write("Result is " + res);

// //CHAPTER 12-13

// // Chapter 12 - Task 2
// var no01 = parseInt(prompt("Enter 1st no: "));
// var no02 = parseInt(prompt("Enter 2nd no: "));
// if (no01 > no02)
// {
//     alert("1st is bigger");
// }
// else if (no01 == no02)
// {
//     alert("both are equal");
// }
// else
// {
//     alert("2nd is bigger");

// }

// // Chapter 12 - Task 3
// var chkno = parseInt(prompt("Enter no: "));
// if (chkno > 0)
// {
//     alert("it is psotive");
// }
// else if (chkno == 0)
// {
//     alert("it is zero");
// }
// else
// {
//     alert("it is negative");

// }

// // Chapter 12 - Task 1

// var inp = prompt("Enter: ");
// if(inp.charCodeAt(0) >= 65 && inp.charCodeAt(0) <= 90)
// {
//     document.write("<br><br>It is a Uppercase letter!.")
// }
// else if(inp.charCodeAt(0) >= 97 && inp.charCodeAt(0) <= 122)
// {
//     document.write("<br><br>It is a Lowercase letter!.")
// }
// else
// {
//     document.write("<br><br>It is a Number!.")
// }

// // Chapter 12 - Task 4

// var inp = prompt("Enter Letter: ");
// function CheckVowel(inputCharacter)
// {
//     if(inputCharacter.match(/[aeiouAEIOU]/))
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// document.write("<br><br>" + CheckVowel(inp));


// // Chapter 12 - Task 5
// var Password = "CorrectPass";
// var input = prompt("Enter Password: ");
// if(input === Password)
// {
// alert("Correct! The password you entered matches the original password");
// }
// else if(input == "")
// {
//     alert("Please enter your password");
// }
// else
// {
//     alert("Incorrect password");
// }


// // Chapter 12 - Task 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// {
// greeting = "Good evening";
// }
// alert(greeting);

// // Chapter 12 - Task 7
// var time = prompt("Enter Time in 2400 hrs Format: ");
// if(time >= 0000 && time < 1200)
// {
//     alert("Good Morning!");
// }
// else if(time >= 1200 && time < 1700)
// {
//     alert("Good Afternoon!");
// }
// else if(time >= 1700 && time < 2100)
// {
//     alert("Good Evening!");
// }
// else if(time >= 2100 && time < 2359)
// {
//     alert("Good Night!");
// }



// // Chapter 14

// // Chapter 14 - Task 1

// var myArray = [];

// // Chapter 14 - Task 2

// var myArray = {};

// // Chapter 14 - Task 3

// var strArray = new Array("Car", "Bike", "Motorcycle");

// // Chapter 14 - Task 4

// var intArray = [4,5,6];

// // Chapter 14 - Task 5

// var boolArray = [true,false];

// // Chapter 14 - Task 6

// var mixArray = ["This", 1, 2, "is",4,"Mixed","Array"];

// // Chapter 14 - Task 7

// var Quals = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("Qualifications<br><br>")
// for(i = 0 ; i < Quals.length; i++)
// {
//     document.write(i+1 + ") " + Quals[i] + "<br>");
// }

// // Chapter 14 - Task 8

// var stdName = ["Basit", "Hammad", "Yasir"];
// var stdMarks = new Array(320,230,480);

// function GetPerc(marks)
// {
//     var res = marks * 100 / 500;
//     return res;
// }
// for (let index = 0; index < stdName.length; index++) {
//     document.write("Score of " + stdName[index] + " is " + stdMarks[index] + ". Percentage: " + GetPerc(stdMarks[index]) + "%<br>");
// }


// // Chapter 14 - Task 9 
// document.writeln("<br><br>Original List<br><br>");
// var colors = ["Red","Blue","Yellow"];
// for (let index = 0; index < colors.length; index++) {
//     document.writeln(colors[index] + "<br>");
// }
// document.writeln("<button onclick='AddBegin()'>Add Color in Beginning</button><br>");
// document.writeln("<button onclick='AddEnd()'>Add Color in Ending</button><br>");
// document.writeln("<button onclick='Add2Color()'>Add 2 Color in Beginning</button><br>");
// document.writeln("<button onclick='RemoveBegin()'>Remove Color in Beginning</button><br>");
// document.writeln("<button onclick='RemoveEnd()'>Remove Color in Ending</button><br>");
// document.writeln("<button onclick='AddSpecificPos()'>Add Color At Desired Pos.</button><br>");
// document.writeln("<button onclick='RemoveSpecificPos()'>Remove Color at Desired Pos</button><br>");
// function AddBegin()
// {
//     var newcolor = prompt("Enter new color to add in beginning: ");
//     colors.unshift(newcolor);
//     document.writeln("<br><br>After Adding in Beginning List<br><br>");
//     for (let index = 0; index < colors.length; index++) {
//         document.write(colors[index] + "<br>");
//     }
// }

// function AddEnd()
// {
//     var newcolor = prompt("Enter new color to add in ending: ");
//     colors.push(newcolor);
//     document.writeln("<br><br>After Adding in Ending List<br><br>");
//     for (let index = 0; index < colors.length; index++) {
//         document.write(colors[index] + "<br>");
//     }
// }

// function Add2Color()
// {
//     colors.push("Magenta", "Cyan");
//     document.writeln("<br><br>After Adding in Beginning List<br><br>");
//     for (let index = 0; index < colors.length; index++) {
//         document.write(colors[index] + "<br>");
//     }
// }

// function RemoveBegin()
// {
//     colors.shift();
//     document.writeln("<br><br>After Removing from Beginning List<br><br>");
//     for (let index = 0; index < colors.length; index++) {
//         document.write(colors[index] + "<br>");
//     }
// }
// function RemoveEnd()
// {
//     colors.pop();
//     document.writeln("<br><br>After Removing from Ending List<br><br>");
//     for (let index = 0; index < colors.length; index++) {
//         document.write(colors[index] + "<br>");
//     }
// }
// function AddSpecificPos()
// {
//     var newcolorpos = parseInt(prompt("Enter position: "));
//     var newcolor = prompt("Enter new color to add: ");
//     colors.splice(newcolorpos,0,newcolor);
//     document.writeln("<br><br>After Adding in at Desired position List<br><br>");
//     for (let index = 0; index < colors.length; index++) {
//         document.write(colors[index] + "<br>");
//     }    
// }
// function RemoveSpecificPos()
// {
//     var newcolorpos = prompt("Enter color to remove: ");
//     var ind = colors.indexOf(newcolorpos);
//     var num = parseInt(prompt("Enter numbers to remove: "));
//     colors.splice(ind,num);
//     document.writeln("<br><br>After removing List<br><br>");
//     for (let index = 0; index < colors.length; index++) {
//         document.write(colors[index] + "<br>");
//     }    
// }
// // Chapter 14 - Task 10

// var arrMarks =[320, 230, 480,120];
// document.write("Scores of Student: "+ arrMarks.join(",") + "<br>")
// arrMarks.sort();
// document.write("Ordered Scores of Student: "+ arrMarks.join(","))


// // Chapter 14 - Task 11

// var cities = ["Karachi","Lahore", "Islamabad","Quetta","Peshawar"];
// var selectedCities = [];
// for (let index = 2; index < 4; index++) {
//     selectedCities.push(cities[index]);
// }
// document.write("Cities List:<br> " + cities.join(",") + "<br>");
// document.write("Selected Cities List:<br> " + selectedCities.join(",") + "<br>");


// // Chapter 14 - Task 12
// var arr = ["This","is","my","cat"];
// document.write("Array:<br>" + arr.join(",") + "<br>String: <br>" + arr.join(" "));


// // Chapter 14 - Task 13
// var arrList = ["Keyboard", "Mouse", "Printer","Monitor"];
// document.write("Devices: <br>" + arrList.join(",") + "<br>");
// document.write("Out: <br>" + arrList[0] + "<br>");
// arrList.shift();
// document.write("Out: <br>" + arrList[0] + "<br>");
// arrList.shift();
// document.write("Out: <br>" + arrList[0] + "<br>");
// arrList.shift();
// document.write("Out: <br>" + arrList[0] + "<br>");
// arrList.shift();

// // Chapter 14 - Task 14
// var arrList = ["Keyboard", "Mouse", "Printer","Monitor"];
// document.write("Devices: <br>" + arrList.join(",") + "<br>");
// var inde = arrList.lastIndexOf()
// document.write("Out: <br>" + arrList[arrList.length - 1] + "<br>");
// arrList.pop();
// document.write("Out: <br>" + arrList[arrList.length - 1] + "<br>");
// arrList.pop();
// document.write("Out: <br>" + arrList[arrList.length - 1] + "<br>");
// arrList.pop();
// document.write("Out: <br>" + arrList[arrList.length - 1] + "<br>");
// arrList.pop();

// // Chapter 14 - Task 15

// var manufac = ["Apple","Samsung", "Motorola","Nokia","Sony","Haier"];
// document.write("<select>");
// for (let index = 0; index < manufac.length; index++) {
//     document.write("<option>" + manufac[index] + "</option>");
// }
// document.write("</select>");

// // CHAPTER 17-20

// // Chapter 17 - Task 1

// var MultiArr =[ [] ];

// // Chapter 17 - Task 2

// var MultiArr =[ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ];

// // Chapter 17 - Task 3
//  for (var a = 1 ; a <= 10 ; a++ ){
//      document.write(a + "<br>" )
//  }
 

//  // Chapter 17 - Task 5
//  var A = ["apple", "banana", "mango", "oorange", "strawberry"] 
//  document.write(A.join("<br>") + "<br>")
//  for (var i = 0 ; i < A.length ; i++){
//     document.write("Element at index " + i + " is " + A[i] + "<br>");
//  }

 
// // // Chapter 17 - Task 4
// var a = parseInt(prompt("enter the number"));
// var i = parseInt(prompt("enter the length"));
// for( j=1 ; j<=i ; j++){
//     document.write(a + "*" + j + "=" + a * j + "<br>");
// }


// // Chapter 17 - Task 6
//  document.write("<h2>COUNTING:</h2>")
//  for (var a = 0 ; a <= 15 ; a++ ){
//      document.write(a + " ")
//  }

//  document.write("<h2> REVERSE COUNTING:</h2>")
//  for (var a = 15 ; a >= 0 ; a-- ){
//      document.write(a + " ")
//  }

//  document.write("<h2>EVEN NUMBERS:</h2>")
//  for (var a = 0 ; a <= 20 ; a++ ){
//      if (a % 2 == 0){
//          document.write(a + " ")
//      }
//  }



//  document.write("<h2>ODD NUMBERS:</h2>")
//  for (var a = 0 ; a <= 20 ; a++ ){
//     if (a % 2 != 0){
//          document.write(a + " ")
//      }

//       }

//  document.write("<h2>SERIES:</h2>")
//  for (var a = 2 ; a <= 20 ; a=a+2 ){
//          document.write(a + "k," + " ")
//  }


// // Chapter 17 - Task 7
//  var B = ["cake", "apple pie", "cookie", "chips", "patties"] 
//  var a = prompt("WELCOME TO OUR BAKERY WHAT DO YOU WANT TO ORDER " , "check the availability" )
 
//     if(B.includes(a)){
//         alert(a + " is available at index " + B.indexOf(a) +" in our bakery")
//     }
//     else{
//         alert("We are sorry. we dont have " + a +" in our bakery");
//     }
 

// // Chapter 17 - Task 8
//  var A = [24,56,78,91,12];
//  document.write("List: " + A.join(",")+ "<br> ");
//  A.sort(function (a , b) {return a-b})
//  document.write( "THE SMALLEST VALUE IS " + A[0] + "<br>")

//  // Chapter 17 - Task 9
//  var A = [24,56,78,91,12];
//  document.write("List: " + A.join(",")+ "<br> ");
//  A.sort(function (a , b) {return b-a})
//  document.write( "THE LARGEST VALUE IS " + A[0] + "<br>")

 
//  // Chapter 17 - Task 10
// for (let index = 1; index <= 100; index++) {
//     if(index % 5 == 0)
//     {
//         document.write(index+ ",")
//     }
    
// } 












// chapter 21 task # 1
// var firstname = prompt("enter your first name")
// var finalname = prompt("enter your final name")
// var fullname = firstname + finalname
// alert("fullname")

// // chapter 21 task # 2
// var fav = ("MY FAVOURITE PHONE IS : SAMSUNG GALAXY S6 EDGE PLUS");
// document.write(fav + "<br>")
// var check = ("LENGTH OF STRING IS :" + fav.length)
// document.write("check")




// chapter 21 task # 3
// var name = "string : pakistani";
// document.write(name + "<br>")
// namex = name.indexOf("n") 
// document.write("index of 'n' is :" + namex + "<br>")


// // chapter 21 task # 4
// var name1 = " SRING : HELLO WORLD";
// document.write(name1 + "<br>")
// name2 = name1.lastIndexOf("L")
// document.write("index of last 'L' is :" + name2 + "<br>")


// chapter 21 task # 5
// var a = "STRING : pakistan"
// document.write("CHARACTER AT INDEX 3 : " + a.charAt(12))


// chapter 21 task # 6
// var firstname = prompt("enter your first name")
// var finalname = prompt("enter your final name")
// var fullname = firstname.concat(finalname)
// alert(fullname)

// chapter 21 task # 7
// var namez = "CITY : HYDERABAD";
// document.write(namez + "<br>")
// var nameq = namez.replace("HYDER" , "ISLAM")
// document.write("AFTER REPLACEMENT" + " "  + nameq);


// chapter 21 task # 8
// var text = "Ali and Basit are two friends . they play cricket and football together"
// document.write(text + "<br>")
// var text1 = text.replace(/and/g,"&")
// document.write("corrected one :" + " " + text1)



// // chapter 21 task # 9
// var num = "472"
// document.write("value :" + num + "<br>" + typeof(num) + "<br>")
// var num1 = parseInt(num)
// document.write("value :" + num1 + "<br>" + typeof(num1))


// // chapter 21 task # 10
// var a = prompt ("enter the name")
// document.write("user input :" + " " + a + " " + "<br>")
// var b = a.toUpperCase()
// document.write("UPPER CASE :" + " " + b);


// // chapter 21 task # 11
// var a = prompt("enter the name")
// document.write("user input :" + " " + a + "<br>")
// var firstchar = a.slice(0,1)
// firstchar = firstchar.toUpperCase()
// var otherchar = a.slice(1)
// otherchar = otherchar.toLowerCase()
// var b = firstchar + otherchar
// document.write("tital case :" + " " +b)


// // chapter 21 task # 12
//  var num = String (35.36)
//  document.write(num + "<br>")

//  document.write(num.replace("." , "")+"<br>")


// // chapter 21 task # 13
// let r=prompt("enter your name")
// for(let i=0;i<r.length;i++){
//     if(r[i]=="@" || r[i]=="!" || r[i]=="," || r[i]=="." || r[i]=="@"){
//         alert("not correct")
//         break;
//     }
   
// }


// chapter 21 task # 16
//  var uni="university of karachi"
//  for(let i=0;i<uni.length;i++){
//      document.write(`${uni[i]} <br>`)
//  }

// task : 17

// let r=prompt("enter name");
// document.write(`last character of input is ${r.slice(-1)}`)

// task: 18
// let r=" The quick brown fox jumps over the lazy dog”. Write a program to count number of    occurrences of word “the” in given string"                               

// let o=r.indexOf("the")

// let y=r.lastIndexOf("the")
// if(o == false && y==false){
// let b=0;
// b=2
// }
// else{b=1}

// document.write(`there are ${b} occurence of word the`)

// for(let i=0;i<r.length;i++){
//     if(r[i]=="the"){
//         let y=r[i]
//         document.write(y=y+"")
//     }
// }







// chapter 26 task # 1
// var num = 3.45214
// document.write("NUMBER IS :" + num  + "<br>")
// var round = Math.round(num)
// document.write("ROUNDING OF NUUMBER IS :" + round  + "<br>")
// var floor = Math.floor(num)
// document.write("FLOOR OF NUMBER IS :" + floor  + "<br>")
// var ceil = Math.ceil(num)
// document.write("CEIL OF NUMBER IS :" + ceil  + "<br>")





// chapter 26 task # 2
// var a = prompt("enter a number");
// alert (a)
// var round = Math.round(a)
// document.write("ROUNDING OF NUMBER IS :" + round + "<br>" )
// var floor = Math.floor(a)
// document.write("FLOOR OF NUMBER IS :" + floor + "<br>")
// var ceil = Math.ceil(a)
// document.write("CEIL OF NUMBER IS :" + ceil + "<br>")




// chapter 26 task # 3
// var a = prompt("enter a number");
// var b = Math.abs(a);
// document.write("the absolute value of" + " " + a + " " + "is :" + " " + b)



// chapter 26 task # 4
// for  (i = 0 ; i < 2 ; i++){
//     document.write("value :" + Math.round(Math.random()*6)+ "<br>")
// }






// chapter 26 task # 5
// var toss = Math.random()*2
// var round = Math.round(toss)
// if(round === 2){
//     alert(round + "<br>" + "random cooin value : HEADS")
// }else if(round === 1){
//     alert(round + "<br>" + "random cooin value : TAILS")  
// }
// else{
//     alert("no one wins the toss")
// }




// // chapter 26 task # 6
// var ran = Math.floor(Math.random()*100) + 1 ;
// document.write("random number betwwen 1 and 100 :" + ran)



// chapter 26 task # 7
// let y=Math.floor(Math.random() * 2)
// alert(y)
// let u=prompt("enter")
// if(u==y){alert("congratulations")}
// else{  alert("try again");        
// for(let i=0;i<=3;i++){let z=prompt("try again");if(z==y){alert("finally you won");break; }}}

// task : 8


// chapter 26 task # 8
// var a = prompt("gve the number from 1-10")
// var ran = Math.floor(Math.random()*10) + 1 ;
// if(a === ran){
//     alert("congratulatiom")
// }else{
//     alert("sorry")
// }




// chapter 31-34 :
// task # 1

// var y = new Date();
// document.write(y)

// task # 2
// var y = new Date();
// y = y.toString()
// var a = y.indexOf("Jun");
// var b = y.slice(a,a+3)
// document.write( "CURRENT MONTH IS :" + " " + b)

// task # 3
// var y = new Date();
// document.write(y + "<br>")
// y = y.toString();
// var a = y.indexOf("Tue");
// var b = y.slice(a,a+3)
// document.write("CURRENT DAY IS :" + " " + b)




// task # 4
// b=new Date().getDay();

// if(b==6 || b==7){
//     alert("it's a fun day") 
// }
// else{alert("working day")}


// task # 5
// p=new Date()
// if(p.getDate()<=15){
//     alert("First fifteen days of the mont")
// }
// else{alert("last days of this month")}



// task # 6
// var a = new Date();
// document.write("current date is:" + " " + a + "<br>")
// var b = a.getTime();
// document.write("elapsed Milliseconds siince January 1, 1970:" + " " + b + "<br>")
// var d = b/1000*60
// document.write("elapsed Minutes siince January 1, 1970:" + " " + d  + "<br>")



// task # 7

// l=new Date()
// b=l.getHours()
// if(b<6){
//     alert("its AM")
// }
// else if(b>=6){
//     alert("PM")
// }
// else if(b=>12 && b<=24){
// alert("AM")
// }

// task # 8
// var b = new Date("31 dec, 2020")
// document.write("later date:" + " " + b)

// task # 9
// var a = new Date("18 Jun, 2015");
// var amili = a.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - amili
// var f = diff/1000*60*60*24*30*!2
// document.write(f);


// task # 10
// var a = new Date("december 5, 2015");
// document.write(a + "<br>")
// document.write(b.getTime())



// task # 11
// p=new Date()
// document.write(p + "<br>")
// i=p.getHours()
// p=p.toString()
// u=p.slice(16,24)
// y=p.slice(18,24)
// l=p.slice(16,18)-1
// document.write(`1 hour ago , it was ${l}${y} `)



// task # 12
// p=new Date()
// document.write(p + "<br>")

// p=p.toString()
// u=p.slice(10,16)
// y=p.slice(0,10)
// q=p.slice(16)

// document.write(`${y} ${u-100} ${q}`)


// // task # 13
// let t=prompt("enter your age")
// let r=new Date().getFullYear()
// let l=Number(r)
// let i=prompt("enter you age")
// document.write( `your birth year is ${l-i}`)



// // task # 14
// let t=prompt("name")
// let m=prompt("month")
// uni=16
// chargesper=410
// amount=chargesper*uni
// l=350
// document.write(`${t}<br> month : ${m} <br> charges per unit = 410 <br> charges per unit = 16
// <br> net amount payable(due date)=${amount} <br>  late payment=${l}
// <br>gross amount payable ${amount+l}`)





// functions

// task :1


// function da(){
//     a= new Date()
//     document.write(a) 
// }

// da()

// task : 2
// function n(first,last){
//     alert(first  + " "  +   last + " "+"welcome")
// }
// n("adeel","rao")



// task: 3
// function add(){
//     t=prompt("first number")
//     u=prompt("second number")
  
//     document.write(Number(t) + Number(u))
// }

// add()


// task : 4

// function cal(){
//     t=prompt("first number")
//     m=prompt("operator")
//     u=prompt("second number")
//     if(m=="+"){document.write(Number(t) + Number(u))}

//   else if(m=="-"){ document.write(Number(t) - Number(u))}
//   else if(m=="*"){ document.write(Number(t) * Number(u))}
//   else if(m=="/"){ document.write(Number(t) / Number(u))}
//   else if(m=="%"){ document.write(Number(t) % Number(u))}
//   else{alert("you have entered an incorrect operator")}
// }

// cal()

// task  5

// function sq(q){
//          document.write(q**2)
// }

// sq(4)

// task : 6

// function fac(n){
//     for(let i=n-1;i>=1;i--) {document.write(`factorial of this number ${n} is : ${n * i} <br>`)}
// }
// fac(9)


// task : 7

// function nu(){
//     let o=prompt("start number");
//     let m=prompt("end number");
//     for(let i=o;o<=m;o++){
//         document.write(o + "<br>")
//     }

// }

// nu()

// task : 8

// function h(){
//     document.write("Hypotenuse2 = Base2 + Perpendicular2" + "<br>")
//     r=prompt("enter hypotenuse value")
//     m=prompt("enter base value")
//     l=prompt("enter perpendicular value")
//     document.write( (r**2) + "=" + ((m**2) + (l**2)) )
// }
// h()


// task : 9

// function area(a=3,b=4){
//     c=a*b
// document.write("Area = width * height = " + c)
// }

// area(3,5)
// document.write("<br>")
// let d=3
// let y=4
// area(d,y)


// task : 10

// function palderome(){
// t=prompt("")
// let b="";
    
// for(let i = t.length-1;i>=0;i--){
//     // document.write(t[i])
 
// b=t[i]+b    

// }
              
           

          


//     if(t==b){
//         document.write("it is a palderome word")
//     }
//     else{document.write("it's not a palderome word" )}
// }
// palderome()


// 
// function str(e){
//     document.write(e.)
// }
// str("adeel is the best ")

// let t="adeel is working"
// for(let i=0;i<=t.length;i++){
//     if(t[i]==" "){
//         let b=i+1
        
//           y=t.charAt(b)
// let l=y+""      
       
        // document.write(t.replace(t[b],t[b].toUpperCase()))
//     }
// }

// task : 12


// task : 13
// function str(s,d){
//     let r=s+d
//     r=String(r)
//     // document.write(typeof(r))
//     document.write(r.length)

// }
// str("adeel","h")

// task : 14

// function a(r){
//     document.write(`circumference of a circle is ${2*3.142*r}<br>`)
//     document.write(`area a circle is ${3.142*(r**2)}`)

// }
// a(9)


















































 

