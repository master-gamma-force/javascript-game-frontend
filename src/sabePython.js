/* eslint-disable semi */
const leonidas = {
  name: 'Leonidas',
  skill: 'JavaScript',
};
const nicole = {
  name: 'Nicole',
  skill: 'Python',
}

const richard = {
  name: 'Richard',
  skill: 'Python',
}

const angela = {
  name: 'Angela',
  skill: 'JavaScript',
}

const employees = [
  leonidas,
  nicole,
  richard,
  angela,
];

const knowPython = (employee) => {
  return employee.skill === 'Python'
}

const sabePython = employees.filter(knowPython);

console.log(sabePython);
