//Function for the exercise 1 button (Determining the larger number between 2 numbers)
function largerNumber() {

     // Created and defined variables and prompts for the user 
     let num1 = parseInt(prompt("Enter your first number: "));
     let num2 = parseInt(prompt("Enter your second number: "));
     let output = "";

         // Conditional statements 
         if (num1 > num2) {
          output = "The larger number is: " + num1;
        }
         else if (num2 > num1) {
          output = "The larger number is: " + num2;
        }
         else if (num1 == num2) {
          output = "The numbers are equal";
        }
         else {
          output = "Entry Invalid. Please try again!";
        }

     // Outputs the result onto the button  
     document.getElementById("button1").innerHTML = output;

}

//Function for the exersice 2 button (Determining the sign of products for 3 numbers)
function signOfProduct() {

     // Created and defined variables and prompts for the user
     let signNum1 = parseInt(prompt("Enter your first integer: "));
     let signNum2 = parseInt(prompt("Enter your second integer: "));
     let signNum3 = parseInt(prompt("Enter your third integer: "));
     let product = signNum1 * signNum2 * signNum3;
     let sign = "";

         // Conditional statements
         if (product > 0) {
          sign = "The sign is +";
        }
         else if (product < 0) {
          sign = "The sign is -";
        }
         else {
          sign = "Entry Invalid. Please try again!";
        }

     // Outputs the result onto the button 
     document.getElementById("button2").innerHTML = sign;

}

//Function for the exercise 3 button (Ordering 3 numbers from greatest to least)
function threeNumberSort() {

     // Created and defined variables and prompts for the user
     let sort1 = parseInt(prompt("Enter your first number: "));
     let sort2 = parseInt(prompt("Enter your second number: "));
     let sort3 = parseInt(prompt("Enter your third number: "));
     let sorted = "";

         // Conditional statements 
         if (sort1 > sort2 && sort2 > sort3) {
          sorted = sort1 + " > " + sort2 + " > " + sort3;
        }
         else if (sort1 > sort3 && sort3 > sort2) {
          sorted = sort1 + " > " + sort3 + " > " + sort2;
        }
         else if (sort2 > sort1 && sort1 > sort3) {
          sorted = sort2 + " > " + sort1 + " > " + sort3;
        }
         else if (sort2 > sort3 && sort3 > sort1) {
          sorted = sort2 + " > " + sort3 + " > " + sort1;
        }
         else if (sort3 > sort2 && sort2 > sort1) {
          sorted = sort3 + " > " + sort2 + " > " + sort1;
        }
         else if (sort3 > sort1 && sort1 > sort2) {
          sorted = sort3 + " > " + sort1 + " > " + sort2;
        }
         else {
          sorted = "Entry Invalid. Please try again!";
        }

     // Outputs the result onto the button
     document.getElementById("button3").innerHTML = sorted;

}

//Function for the exercise 4 button (Summing the multiples of 3 under 1000 using a for-loop)
function forSumThrees() {

     // Variable to store the sum 
     let forSum = 0;

         //(For-Loop) Sets "i" to 1 and increments "i" each loop as long as it is under 1000
         for (let i = 1; i < 1000; i++) {

             //(Conditional statement) Numbers evenly divisible by 3 will have a remainder of 0
             if (i % 3 === 0) {
              forSum += i; // Add "i" to the sum everytime this condition is true
            }
        }

     // Outputs the result onto the button
     document.getElementById("button4").innerHTML = forSum;

}


//Function for the exercise 5 button (Summing the multiples of 3 under 1000 using a while-loop)
function whileSumThrees() {

     // Variable to store the sum and variable for the while loop
     let whileSum = 0;
     let i = 0;

         // (While-loop) Loop as long as "i" is under 1000
         while (i < 1000) {

          i++; // Increment "i" by 1 each loop

             //(Conditional statement) Numbers evenly divisible by 3 will have a remainder of 0
             if (i % 3 === 0) {
              whileSum += i; // Add "i" to the sum everytime this condition is true
            }
        }

     // Outputs the result onto the button
     document.getElementById("button5").innerHTML = whileSum;

}

//Function for the exercise 6 button (Changing mutiples of 4 and 10 under 100 to words in the console)
function tenFour() {

     //(For Loop) Sets "i" to 1 and increments "i" each loop as long as it is under 100
     for (let i = 1; i <= 100; i++) {

         // (Conditional statements) Numbers evenly divisible by 4 and/or 10 will have a remainder of 0
         if (i % 4 === 0 && i % 10 === 0) {
          console.log("TenFour!");
        }
         else if (i % 4 === 0) {
          console.log("Four");
        }
         else if (i % 10 === 0) {
          console.log("Ten");
        }
         else {
          console.log(i);
        }

    }

}

//Function for the exercise 7 button (Determining the century when given a year)
function centuryFromYear() {

     // Created and defined variables and prompt for the user
     let year = parseInt(prompt("Enter year: "));
     let cenYear = Math.ceil(year / 100); // Divides the year given by 100 and rounds up to the nearest integer

     // Outputs the result onto the button
     document.getElementById("button7").innerHTML = "The century is: " + cenYear;

}

//Function for the exercise 8 button (Determining the third angle of a triangle when given 2 angles)
function thirdAngle() {

     // Created and defined variables and prompts for the user
     let angle1 = parseInt(prompt("Enter first triangle angle"));
     let angle2 = parseInt(prompt("Enter second triangle angle"));
     let angle3 = 180 - (angle1 + angle2);

     // Outputs the result onto the button
     document.getElementById("button8").innerHTML = "The third angle is: " + angle3;

     // Conditional statement 
     if ((180 - (angle1 + angle2)) < 0 || (angle1 + angle2) > 180 || angle1 < 0 || angle2 < 0) {
      document.getElementById("button8").innerHTML = "Invalid entry. Please enter two angles of a triangle again!";
    }

}

function f9() {

    var change = document.getElementById("button9");
    change.innerHTML = 'Project 9 Coming Soon...';

}