// input: [ 25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16 ]
// output: [ 25, 50, 43, 36, 31, 26, 24, 19, 28,  4, 18, 16, 48, 47, 49, 42, 15,  3 ]    

const input = [ 25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16 ]

// Cách 1:
const output1 = [...(new Set(input))];
console.log(output1);

// Cách 2:
const output2 = input.filter((item, index) => input.indexOf(item) === index);
console.log(output2);

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', Age: 44, department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', Age: 33, department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', Age: 37, department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', Age: 31, department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', Age: 34, department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', Age: 42, department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', Age: 36, department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', Age: 28, department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', Age: 45, department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', Age: 32, department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', Age: 37, department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', Age: 37, department: 'Development', salary: '39000' },
];

// 1) What is the average income of all the people in the array?
let salary = 0;
for (i=0; i < people.length; i++) {
    salary += parseInt(people[i].salary)
};

console.log(salary/people.length);

// 2) Who are the people that are currently older than 30?
const Ages = people.filter((item) =>  item.Age > 30);
console.log(Ages.map(element => element.firstName + " " + element.lastName));

// 3) Get a list of the people's full name (firstName and lastName).
const Name = people.map((item) =>  item.firstName + " " + item.lastName);
console.log(Name);

// 4) Get a list of people in the array ordered from youngest to oldest.
const DOBs = people.sort((item1, item2) =>  item1.Age - item2.Age);
console.log(DOBs.map(element => element.firstName + " " + element.lastName));

// 5) How many people are there in each department?
const Development = people.filter((item) =>  item.department === 'Development').length;
console.log(Development);

const Marketing = people.filter((item) =>  item.department === 'Marketing').length;
console.log(Marketing);

const Sales = people.filter((item) =>  item.department === 'Sales').length;
console.log(Sales);

const OfficeManagement = people.filter((item) =>  item.department === 'Office Management').length;
console.log(OfficeManagement);