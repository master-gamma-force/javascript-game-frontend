export const TEMPLATE = `let leonidas = {
  name: "Leonidas",
  skill:  "JavaScript"
}
let nicole = {
  name: "Nicole",
  skill: "Python"
}
let richard = {
  name: "Richard",
  skill: "Python"
}
let angela = {
  name: "Angela",
  skill: "JavaScript"
}
const employees = [];
const  isLeonidas = () => {
}
const found = employees.method(function);
console.log(found);`;

export const TEST = [
  {
    description: 'Test content who is Leonidas',
    type: 'deepEqual',
    value: 'found',
    params: [[{ name: 'Leonidas', skill: 'JavaScript' }]],
    status: 'to-do'
  },
  {
    description: 'Test length of employees are Leonidas',
    type: 'equal',
    value: 'found.length',
    params: [1],
    status: 'to-do'
  }
];
