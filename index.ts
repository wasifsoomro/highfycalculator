#! /usr/bin/env node
//import inquirer, chalk and chalk animation
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';

//use chalk animation that gives animation to msg and set timeout
chalkAnimation.rainbow('Developed By Muhammad Wasif');
setTimeout(() => {
    // Stop the 'Developed By Muhammad Wasif' animation, then write on a new line.
    console.log(chalk.yellow(` 
_____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`))
;
}, 3000);


//create async function 
async function askUsers(){
    //use inquirer and create object and array to ask three times from user
    //first i send a prompt to user to enter first number
    let askNumber = await inquirer.prompt([{
        type: "input",
        name: "num1",
        message: "Enter your first number",
        validate: function(input){ 
            //validation prompt if user's input not a number than return a meesage "Enter a numbr"
            const num = parseFloat(input)
            if(isNaN(num)){
                return "Enter a number"               
            }
            return true;
        }   
    },
    { //create a list type and send message that tell user to choose one oerator from list 
        type: "list",
        name: "operator",
        message: "which operator you want to use",
        choices: [" + ", " - ", " * ", " / ", " ** ", " % "]
    },
    { //after selcting operator user get prompt to enter a second number
        type: "input",
        name: "num2",
        message: "Enter your second number",
        validate: function(input){
            const num = parseFloat(input)
            if(isNaN(num)){
                return "Enter a number"
                
            }
            return true;
        }
    }
])
//use parsefloat that convert string into number
    let num1 = parseFloat(askNumber.num1)
    let num2 = parseFloat(askNumber.num2)
    let result: number;

    //apply else if condition to work according user input
    if(askNumber.operator === " + "){
        result = num1 + num2
        console.log(chalk.green(`${askNumber.num1} + ${askNumber.num2} =${result}`))
    }else if(askNumber.operator === " - "){
        result = num1 - num2
        console.log(chalk.green(`${askNumber.num1} - ${askNumber.num2} =${result}`))
    }else if(askNumber.operator === " * "){
        result = num1 * num2
        console.log(chalk.green(`${askNumber.num1} * ${askNumber.num2} =${result}`))
    }else if(askNumber.operator === " / "){
        result = num1 / num2
        console.log(chalk.green(`${askNumber.num1} / ${askNumber.num2} =${result}`))
    }else if(askNumber.operator === " ** "){
        result = num1 ** num2
        console.log(chalk.green(`${askNumber.num1} ** ${askNumber.num2} =${result}`))
    }else if(askNumber.operator === " % "){
        result = num1 % num2
        console.log(chalk.green(`${askNumber.num1} % ${askNumber.num2} =${result}`))
    }

}
//create async function restart function if user want to do calculation continue
async function restart(){
    //create a do while loop that check if user input yes than restart the calculator
    do{
        await askUsers();
        var restartAgain = await inquirer.prompt({
            type:"input",
            name: "restart",
            message: "Do you want to restart calculator type yes"
        })
    }while(restartAgain.restart === "yes" || restartAgain.restart ==="Yes" ||restartAgain.restart === "YES")
} 
restart()//invoking function
