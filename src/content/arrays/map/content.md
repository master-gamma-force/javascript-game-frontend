Hola soy Oscar y tengo otro problema en el que puedes ayudarme, ahora ya conozco los empleados que saben Python, pero se acerca fin de año y quiero premiar a los que llevan más tiempo conmigo, tengo el tiempo en meses, pero quisiera verlo en años.

Hola soy Pepe vengo a enseñarte `.map()` un método que todo array tiene, te servira para ayudar a Oscar, primero te lo explico sencillo, despues vamos a lo técnico y el código.

```js

let alimentos = [🥔, 🌽, 🧀];

const frituras = alimentos.map(convierteAFrituras(alimento));

console.log(comidaMala);

[🍟, 🍿, 🍕];

```

Como puedes ver tenemos un array de alimentos, pero con .map() los vamos a cambiar a frituras, entonces **_.map()_** lo que haces es _transformar_ los elementos del array, y devolverte un nuevo array con los elementos transformados, por la función dada.

### Ahora una explicación paso a paso.

En la base de datos de la zapatería las tallas vienen en medida de E.U. y las queremos en MX. Lo que tenemos que hacer es transformar esas tallas y tener un nuevo array.

### Paso 1: tener nuestros zapatos en objetos.

```js
let zapato1 = {
  talla: 6,
  marca: 'adidas'
};
let zapato2 = {
  talla: 8,
  marca: 'vans'
};
let zapato3 = {
  talla: 5,
  marca: 'rebook'
};
let zapato4 = {
  talla: 6,
  marca: 'nike'
};
```

### Paso 2: Creamos un array que contenga a todos los zapatos.

```js
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

### Paso 3 Creamos la función

```js
const cambiarTalla = (zapato) => {
  return zapato.talla - 2;
};
```

### Paso 4: Aplicar el método .map() y mostrarlo con un console.log()

```js
const tallasMx = zapatos.filter(cambiarTalla);
console.log(tallasMx);
```

### El resultado es:

```js
[4, 6, 3, 4];
```
