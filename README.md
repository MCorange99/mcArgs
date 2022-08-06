# mcArgs

## Usage

`mcArgs.add_single("friendly_name", "trigger")` is used for boolean args like `--debug`  

`mcArgs.add_double("friendly_name", "trigger")` is used for ars that need to be supplied with a number or a string like `--mode dev` or `--mode "dev but fast"`

## Examples

```js
const McArgs = require('@mcorange9/mcargs');
const mcArgs = new McArgs(process.argv);

mcArgs.add_single("debug", "--debug")
mcArgs.add_double("mode", "--mode")

const parsed = mcArgs.parse()

console.log("Debug: " + parsed.debug.value)
console.log("Mode: " + parsed.mode.value)
/*

$ node app.js --debug --mode "Extra spicy"
Debug: true
Mode: Extra spicy

*/
```

## Authors

[MCorange](https://github.com/MCorange99)
