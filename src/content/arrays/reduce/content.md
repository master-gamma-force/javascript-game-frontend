Hola soy Oscar y ahora ha llegado el momento de pagarle a mis empleados para esto quiero saber cuanto tengo que sacar del banco para poder pagarle a cada uno exactamente y no sacar de más ni de menos.

Hola! Soy pepe y te voy a enseñar un nuevo método que todo array tiene, es _.reduce()_ este método lo que hace es reducir todo a un solo dato, no modifica el array, crea uno nuevo con el resultado de reducir lo que tu le digas en la función.

```js
let comida = [🍳 ,🌮, 🍎, 🍰, 🍇, 🍌];
const reducir = comida.reduce(digerirComida);
console.log(reducir);
💩
```

## Un ejemplo paso a paso.

En la zapatería queremos saber cuanto cuesta todo nuestro inventario, así que con un reduce, todos los precios lo haremos un total.

Primero creamos los objetos.

```js
let zapato1 = {
  precio: 2400,
  marca: 'adidas'
};
let zapato2 = {
  precio: 1200,
  marca: 'vans'
};
let zapato3 = {
  precio: 1500,
  marca: 'rebook'
};
let zapato4 = {
  precio: 2200,
  marca: 'nike'
};
```

### Paso 2: Creamos el array con todos los zapatos.

```js
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

### Paso 3: Creamos la función

```js
const cuenta = (acumulador, zapato) => {
  return acumulador + zapato.precio;
};
```

### Paso 4: Aplicamos el método .reduce() y mostramos el resultado con un console.log().

```js
const total = zapatos.reduce(cuenta, 0);
console.log(total);
```
