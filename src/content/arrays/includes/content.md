<article>

Hola soy Oscar, hoy quiero saber si un empleado sigue en nómina y no quisiera revisar todos los empleados registrados para saber si sigue o no en nómina. ¿Puedes ayudare?

</article>

## Lección

<article>
Hi! Soy Pepe de nuevo y vengo a enseñarte el _método .includes()_ el cual determina si un elemento dado se encuentran en un array. 

```javascript
let comida = [🍎 , 🌮 , 🍉, 🍔];

let hamburgesa = 🍔;

console.log(comida.includes(hamburgesa));

true
```

Como puedes ver el método _.includes()_ regresa `true` si el elemento pertenece a al array, y regresará `false` si no.

</article>

Usemos el ejemplo de la zapatería.
Llega un cliente a pedir un para de zapatos de la marca supreme, pero no estan en exhibición. Se tiene que ir a la bodega a buscarlos, y el cliente tendría que esperar para saber si tiene o no. Con el método _.includes()_ puedes saber si hay en la bodega y decirle al cliente que espere porque si lo tienes.
¿Cómo lo implementarías?

### Paso 1: Tener todos los zapatos como objetos.

```javascript
let zapato1 = {
  talla: 1200,
  marca: 'adidas'
};
let zapato2 = {
  talla: 800,
  marca: 'adidas'
};
let zapato3 = {
  talla: 3400,
  marca: 'supreme'
};
let zapato4 = {
  talla: 1600,
  marca: 'nike'
};
```

### Paso 2: Crea un array con que tenga a todos los zapatos.

```javascript
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

### Paso 3: Crear un objeto del zapato que quiere el cliente.

```javascript
const zapatoCliente = {
  talla: 3400,
  marca: 'supreme'
};
```

### Paso 4: Utilizar el método .include() y mostrar el resultado.

```js
const existencias = zapatos.include(zapatoCliente);
```
