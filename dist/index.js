#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("CALCULATOR"));
let userchoice = true;
async function menu() {
    await inquirer
        .prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter first number'
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter second number'
        },
        {
            type: 'list',
            name: 'operations',
            message: 'Select operation',
            choices: ["+", "-", "*", "/", "%", "**"],
        },
    ])
        .then((answers) => {
        if (answers.operations == "+") {
            const result = answers.num1 + answers.num2;
            console.log(chalk.green("sum", result));
        }
        else if (answers.operations == "-") {
            const result = answers.num1 - answers.num2;
            console.log(chalk.green("difference", result));
        }
        else if (answers.operations == "*") {
            const result = answers.num1 * answers.num2;
            console.log(chalk.green("Product", result));
        }
        else if (answers.operations == "/") {
            const result = answers.num1 / answers.num2;
            console.log(chalk.green("Division", result));
        }
        else if (answers.operations == "%") {
            const result = answers.num1 % answers.num2;
            console.log(chalk.green("Modulus", result));
        }
        else if (answers.operations == "**") {
            const result = answers.num1 ** answers.num2;
            console.log(chalk.green("Exponent", result));
        }
    });
}
;
let againfunction = async function again() {
    const ans = await inquirer.prompt({
        type: 'confirm',
        name: 'runagain',
        message: 'Do you want to continue?',
    });
    userchoice = ans.runagain;
};
do {
    await menu();
    await againfunction();
} while (userchoice == true);
process.exit(0);
