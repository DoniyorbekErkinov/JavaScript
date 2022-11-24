const friends = ['friend 1', 'friend 2', 'friend 3', 'friend 4']

// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

function calcAge(birthYear) {
    return 2023 - birthYear
}

const person = ['Doniyor', 'Erkinov', calcAge(2000), 'Programmer' ]
// console.log(person);


/**
 *  Array methods
 */

// adds to end
// friends.push(`friend ${friends.length + 1}`)

// adds from start
// friends.unshift(`friend ${friends.length + 1}`)
// console.log(friends);

// remove last element
// friends.pop();

// remove first one
// friends.shift();
// console.log(friends);
// if(friends.includes('friend 1')) {
//     console.log(friends[friends.indexOf('friend 1')]);
// }

