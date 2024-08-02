#!/usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code",
    },
]);
if (pinanswer.pin === mypin) {
    console.log("pin is correct");
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select one option",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationans.operation === "withdraw") {
        let withdrawans = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                message: "select a withdrawl method:",
                choices: ["fast cash", "enter amount"],
            },
        ]);
        if (withdrawans.withdrawmethod === "fast cash") {
            let fastcashans = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select Amount",
                    choices: ["500", "1000", "5000", "10000", "50000"],
                },
            ]);
            if (fastcashans.fastcash > mybalance) {
                console.log("Insufficient balance");
            }
            else {
                mybalance -= fastcashans.fastcash;
                console.log(`${fastcashans.fastcash} withdraw successfully`);
                console.log(`your remaining balance is: ${mybalance}`);
            }
        }
        else if (withdrawans.withdrawmethod === "enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter the amount to withdraw",
                },
            ]);
            if (amountAns.amount > mybalance) {
                console.log("Insufficent balance ");
            }
            else {
                mybalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your remaining balance is : ${mybalance}`);
            }
        }
    }
    else if (operationans.operation === "check balance") {
        console.log(`your current balance is: ${mybalance}`);
    }
}
else {
    console.log("pin is Incorrect, Try Again!");
}
