#!/usr/bin/env node
// const McArgs = require('@mcorange9/mcArgs');
const McArgs = require('./src/index');
const mcArgs = new McArgs(process.argv);

mcArgs.add_single("debug", "--debug")
mcArgs.add_double("mode", "--mode")
mcArgs.add_prefixless("subc", 0)

const parsed = mcArgs.parse()

// console.log(parsed)

console.log("Debug: " + parsed.debug.value)
console.log("Mode: " + parsed.mode.value)
console.log("Subc: " + parsed.subc.value)
/*

$ node app.js --debug --mode "Extra spicy"
Debug: true
Mode: Extra spicy
*/
