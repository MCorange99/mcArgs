#!/usr/bin/env node
// const McArgs = require('@mcorange9/mcArgs');
const McArgs = require('./src/index');
const mcArgs = new McArgs(process.argv);

mcArgs.add_single("debug", "--debug")
mcArgs.add_double("mode", "--mode")

const parsed = mcArgs.parse()

// console.log(parsed)

console.log("Debug: " + parsed.debug.value)
console.log("Mode: " + parsed.mode.value)
/*

$ node app.js --debug --mode "Extra spicy"
Debug: true
Mode: Extra spicy
*/
