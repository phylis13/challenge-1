# challenge-1
# gradeGenerator
# grade--generator
## Description
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40. 
make a repository on your git hub account clone this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code
You will be writing your code in the `index.js` file and running the tests by
running `node index.js` in the terminal.

# lets get started
- fork the code on your github

- Open a terminal / command line interface on your computer
- Clone the repo 
- Change directory to the repo
- Open it in ``Visual Studio Code``

# Running the application

Running the application we use the node index.js on the terminal

# create the challenge  3 files
crete the files in this the gradeGenerator,speeddetector and the netsalaryCalculator
## STEP 1:
 Define a function ( gradeCalculator), set it to a function (arguments - score and total) and f
{ Function body }

## Step 2:
 We calculate the percentage, 

## Step 3:
 We determine the letter grade to be assigned to different score ranges. We will do this by using multiple- IF- Statement eg 
 if (percent >79) {
    letterGrade = "A"
now repeat this process untill you are done with the grades.

## Step 4:
 We return a message showing the letter grade and the score obtained using Return statement  
 return `you got ${letterGrade} ${percent}`
}

## Step 5: 
now you are done use node index.js on your terminal to run your code.


## speedDetector
## Description
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

## lets get started

we start by defining the function
# step 1
use if statement 
we return a message showing "OK"
# step 2
use else if statement which should return "license suspended"
# step 3
we call the function using the console.log and lastly test my code in the terminal using node index.js

## netsalaryCalculator
# Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm

Links to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

lets get started
# step 1
netSalary - Function to calculates indivual's net salary
* payCalculations - Function to calculate PAYE
* nssfNhifDeduction - Function to deal with NSSF and NHIF calculation
* @ salary - basic salary in Kenya Shillings
* @ benefits -Employer benefits
*/
# step 2

enter The four variables  that contain values provided by KRA website
define the function netsalary then  use if statement calculate then PAYEE

# step 3
use if statement
Block takes into account NSSF, NHIF figures and PAYE function above.
# step 4
call the function using console.log to return the net salary
then test the code on your terminal using node index.js


## Authors
This project was contributed to by:
"git+https://github.com/phylis13/challenge-1.git"
## license
The project is licensed under "ISC"




