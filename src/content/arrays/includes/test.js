export const TEMPLATE = `let leonidas = {
  name: "Leonidas",
  skill:  "JavaScript"
};
let nicole = {
  name: "Nicole",
  skill: "Python"
};
let richard = {
  name: "Richard",
  skill: "Python"
};
let angela = {
  name: "Angela",
  skill: "JavaScript"
};
const  payroll = [];
const  employee = {
  name: "",
  skill: ""
};
const isInPayroll = payroll.method(object);
console.log(isInPayroll);`

export const TEST = [
  {
    description: 'Test isInPayroll value',
    type: 'equal',
    value: 'isInPayroll',
    params: [true],
    status: 'to-do',
  },
  {
    description: 'Test payroll length',
    type: 'equal',
    value: 'payroll.length',
    params: [4],
    status: 'to-do',
  },
  {
    description: 'Test employee value',
    type: 'deepEqual',
    value: 'payroll.length',
    params: [{
      name: "Leonidas",
      skill:  "JavaScript",
    }],
    status: 'to-do',
  },
]
