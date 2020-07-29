export const TEMPLATE = `let leonidas = {
  name: 'Leonidas',
  salary: [2330, 2323]
};
let nicole = {
  name: 'Nicole',
  salary: [3330, 8323]
};
let richard = {
  name: 'Richard',
  salary: [234, 343]
};
let angela = {
  name: 'Angela',
  salary: [3455, 3433]
};
const employees = [];
const  toSalaries = () => {
}
const salaries = employees.map(toSalaries);
const flat = salaries.method();
console.log(flat);`;

export const TEST = [
  {
    description: 'Test total flat array',
    type: 'deepEqual',
    value: 'flat',
    params: [[2330,2323,3330,8323,234,343,3455,3433]],
    status: 'to-do',
  }
];
