const person = {
    firstName: 'Doniyor',
    lastName: 'Erkinov',
    age: 22,
    job: 'Programmer',
    arrays: ['tooltil', 'array', 'no way'],
    height: 1.78,
    weight: 86,
    func: (num) => {
        console.log(num);
    },
    calcAge: function() {
        return 2022 - this.age
    },
    calcBMI: function() {
       return this.weight / this.height ** 2
    }
}

// const interestedIn =
//  prompt('What do u wanna know about me? lastName, firstName, age, job')
// console.log(person[interestedIn]);

// console.log(person.calcAge());
// console.log(person.calcBMI());
const n = [
    12, 54, [12, 45]
]

for (let i = 0; i < n.length; i++) {
    console.log(n[i], typeof n[i]);
}