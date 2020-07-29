Hola soy Oscar y esta sección ahora quiero explicarte como funciona el método `.flat()`, este método nos sirve para transformar un array de varios niveles en un array plano de un solo nivel.


```javascript
const comida = [
  [🍳,🌮, 🍰],
  [🍎, 🍇, 🍌]
];
const rta = comida.flat();
console.log(rta);
[🍳,🌮, 🍰, 🍎, 🍇, 🍌]
```

Realmente en ocasiones podemos tener arrays de varios niveles y el método flat nos ayuda a transformar todo en un array de un solo nivel.

Esté método recibe como parámetro hasta que nivel va a analizar, en el caso de tener un array de 2 niveles podrías usar la función `arr.flat(2)`, ejemplos:

```javascript
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


## Un ejemplo paso a paso.

En la zapatería tenemos varios productos pero el precio esta en un array representando los valores en pesos y en dolares.

Primero creamos los objetos.

```javascript
let zapato1 = {
  precio: [2400, 100],
  marca: 'adidas'
};
let zapato2 = {
  precio: [2400, 234],
  marca: 'vans'
};
let zapato3 = {
  precio: [6400, 334],
  marca: 'rebook'
};
let zapato4 = {
  precio: [7400, 432],
  marca: 'nike'
};
```

### Paso 2: Creamos el array con todos los zapatos.

```javascript
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

### Paso 3: Transformamos el array para obtener solo los precios

```javascript
const precios = zapatos.map(item => iem.precio);
```

### Paso 4: Aplicamos flat

```javascript
const todos = precios.flat();
```

Con esto de una forma sencilla podemos transformar de un array de varios niveles a uno solo un nivel.
