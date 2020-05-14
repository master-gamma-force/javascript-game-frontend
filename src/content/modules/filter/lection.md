Soy Oscar tengo una startup y tengo algunos problemas que quiero que me ayudes a solucionar.

Voy a crear un sistema de análisis de datos y necesito alguien de mi equipo que conozca Python, quiero encontrarlo sin necesidad de preguntarle a cada uno. Tengo guardadas sus habilidades en un archivo, creo que tu podrías ayudarme con tus conocimientos de JavaScript.

Hola soy Pepe y te voy a enseñar el método _.filter()_ para que puedas ayudar a Oscar.

Te voy a explica filter literalmente funciona como un filtro, filter _es un método que todo array tiene_, recibe una función que es la parte lógica del filtro, lo que dice si pasa o no pasa, y ese filtro se aplica a los elementos del array, te devuelve un nuevo array con los elementos del array que cumplieron con la condición dada en la función.

Ejemplo:

```js

let alimentos = [🍎,🥑,🍉,🍰,🍕,🍟];

const comidaSana = alimentos.filter(esSaludable(alimento));

console.log(comidaSana);

[🍎,🥑,🍉]
```

## Ejemplo de Uso

Te voy a enseñar como aplicarlo en una zapatería, imagina que viene un cliente y quiere ver todos los modelos en su talla, él es talla 6.
Ordenas tus modelos en objetos:

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

Declara un array que incluya a todos los zapatos:

```js
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

Crea la función que nos diga si cumple la condición de ser talla 6:

```js
function esTalla6(articulo) {
  return articulo.talla == 6;
}
```

Aplicamos el método filter y lo mostramos con un console.log()

```js
const talla6 = zapatos.filter(esTalla6);
console.log(talla6);
```

El resultado sería:

```js
[
    {
     talla: 6,
     marca: "adidas"
    }
    {
     talla: 6,
     marca: "nike"
    }
]
```
