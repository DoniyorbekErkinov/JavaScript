/*
    Functions
*/

// Function decloretions

// helloWorld('decloration') // will work

function helloWorld(msg) {
/** 
 *  Function decloretions can be called before decloration
*/
    console.log(`I am function ${msg}`);
}
helloWorld('decloration')
// const runHelloWorld1 = helloWorld1('expression')// gives error

const helloWorld1 = function(msg) {
/** 
 *  Function expressions can be called before decloration
*/
    return `I am function ${msg}`
}

const runHelloWorld1 = helloWorld1('expression')
console.log(runHelloWorld1);

// Arrow functions
const arrowFunction = (msg) => {
    console.log(msg);
}
arrowFunction('I am arrow function')