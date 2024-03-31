#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { message: "Enter first number:", type: "number", name: "firstNumber" },
    { message: "Enter second number:", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
//then go to cmd and write tsc and an index file is made
//after this type node index.js in cmd and enter first and then second number
//then click on one operation like addition (message means questions will appear
// in cmd)
//conditional statement
if (answer.operator === "Addition") 
//  {console.log("your value is:"+ answer.firstNumber + answer.secondNumber)}
//don't use string bcz it will not add it it will write it combined
{
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
