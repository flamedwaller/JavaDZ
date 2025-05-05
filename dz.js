let people =[
    {name: 'Alex', bill: 3000},
    {name: 'Ivan', bill: 2000},
    {name: 'Vadim', bill: 1000},
    {name: 'Vova', bill: 300}
];

/*people = people.map(person => {
    return {
        name: person.name,
        bill: person.bill * 3
    };
});

console.log(people);*/

/*people = people.map(person => {
    return {
        name: person.name,
        bill: person.bill * 1.1
    };
});

console.log(people);*/

/*people = people.map(person => {
    return {
        name: person.name,
        bill: person.bill / 3
    };
});

console.log(people);*/

/*let totalBill = people.reduce((sum, person) => sum + person.bill, 0);

console.log(totalBill);*/

/*let lowSalaryPeople = people.filter(person => person.bill < 500);

console.log(lowSalaryPeople);

let vadim = people.find(person => person.name === 'Vadim');

console.log(vadim);

let highSalaryPerson = people.find(person => person.bill > 3000);

console.log(highSalaryPerson);*/

/*let people2 = [
    {name: 'Alex', bill: 3000},
    {name: 'Ivan', bill: 2000},
    {name: 'Vadim', bill: 1000},
    {name: 'Vova', bill: 300}
];

let combinedPeople = people.concat(people2);

console.log(combinedPeople);

let alex = people.find(person => person.name === 'Alex');

console.log(alex);

let personWithSalary1000 = people.find(person => person.bill === 1000);

console.log(personWithSalary1000);

let vadim = people.find(person => person.name === 'Vadim');

console.log(vadim);*/

/*
let index = people.findIndex(person => person.bill === 300);

console.log(index);*/

/*let index = people.findIndex(person => person.name === 'Yura');

console.log(index);

let newPeople = [
    {name: 'Yura', bill: 1500},
    {name: 'Masha', bill: 1200},
    {name: 'Sasha', bill: 1800},
    {name: 'Dima', bill: 900},
    {name: 'Nina', bill: 2000},
    {name: 'Oleg', bill: 2500}
];

newPeople.forEach(person => {
    people.push(person);
});

console.log(people);

people = people.slice(0, 0); // Создаем новый массив с нулевыми элементами

console.log(people);

while (people.length > 0) {
    people.pop();
}

console.log(people);*/

/*
people.unshift({name: 'Yura', bill: 1500});
people.unshift({name: 'Masha', bill: 1200});

console.log(people);
*/

/*people.shift();
people.shift();

console.log(people);*/

/*let hasYuraSome = people.some(person => person.name === 'Yura');
let hasYuraEvery = people.every(person => person.name !== 'Yura') === false;

console.log(hasYuraSome);
console.log(hasYuraEvery);*/

let numbers = [3, 25, 63, 51, 4321, 42];

let sortedAscending = numbers.slice().sort((a, b) => a - b);
console.log('Сортировка по возрастанию:', sortedAscending);

let sortedDescending = numbers.slice().sort((a, b) => b - a);
console.log('Сортировка по убыванию:', sortedDescending);






