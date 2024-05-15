#! /usr/bin/env node
// import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
// declare a constant 'answers' and assign it into the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answer.sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
