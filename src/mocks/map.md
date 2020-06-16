## Frame (1)

Hola soy Oscar y tengo otro problema en el que puedes ayudarme, ahora ya conozco los empleados que saben Python, pero se acerca fin de año y quiero premiar a los que llevan más tiempo conmigo, tengo el tiempo en meses, pero quisiera verlo en años.

## Frame (2)

Hola soy Pepe vengo a enseñarte *.map()* un metodo de los arrays que te servira para ayudar a Oscar, primero te lo explico sencillo, despues vamos a lo técnico y el código.

```javascript

let alimentos = [🥔, 🌽, 🧀];

const frituras = alimentos.map(convierteAFrituras(alimento));

console.log(comidaMala);

[🍟, 🍿, 🍕];

```

Como puedes ver tenemos un array de alimentos, pero con .map() los vamos a cambiar a frituras, entonces ***.map()*** lo que haces es *transformar* los elementos del array, y devolverte uno nuevo con los elementos transformados, por la función dada.
(Cuentanos como le dicen a las frituras en tu país).

## Ejemplo paso a paso

En la base de datos de la zapatería las tallas vienen en medida de E.U. y las queremos en MX. Lo que tenemos que hacer es transformar esas tallas y tener un nuevo array.
### Paso 1 todo en objetos

```javascript
let zapato1 =  {
    talla: 6,
    marca: "adidas"
}
let zapato2 =  {
    talla: 8,
    marca: "vans"
}
let zapato3 = {
    talla: 5,
    marca:  "rebook"
}
let zapato4 = {
    talla: 6,
    marca: "nike"
}
```

### Paso 2 Declaramos el array

```javascript
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

### Paso 3  Hacemos la  función

```javascript
const cambiarTalla = (zapato) => {
  return zapato.talla -2;
}
```

### Paso 4 Hacer el .map()

```javascript
const tallasMx = zapatos.filter(cambiarTalla);
console.log(tallasMx);
```
### El resultado es:
```javascript 
[ 4, 6, 3, 4 ]
```

## Ejercicio

Oscar tiene estos empleados, con este tiempo de trabajar en su empresa en meses, ahora con map, puedes convertirlo en años.

Recuerda los pasos:

- **Paso 1:** Crea tus objetos.

- **Paso 2:** Crea un array de objetos.

- **Paso 3**: Crea la función que reciba un elemento, y lo regrese transformado.

- **Paso 4:** Aplica .map() al array y pasale la función que creaste.

- **Paso 5:** Imprime el resultado.

 ```javascript

let leonidas = {
    name: "Leondias",
    timeOfWork: 48
}
let nicole = {
    name: "Nicole",
    timeOfWork: 36
}
let david = {
    name: "Nico",
    timeOfWork: 24
}

 ```