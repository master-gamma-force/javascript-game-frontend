# Filter

Soy Oscar tengo una startup y tengo algunos problemas que quiero que me ayudes a solucionar. 

Voy a crear un sistema de analisis de datos y necesito alguien de mi equipo que sepa Python, quiero encontrarlo sin necesidad de preguntarle a cada uno. Tengo guardadas sus habilidades en un archivo, creo que tu podrías ayudarme con tus conocimientos de JavaScript.

***

## Lección



![](https://firebasestorage.googleapis.com/v0/b/personal-challenge-01.appspot.com/o/gamma%2FOscar.svg?alt=media&token=974345e3-82d6-4643-8b5f-a1634a20b028)



Hola soy Pepe y te apoyare enseñandote  Filter para que puedas ayudar a Oscar.

Te voy a explicar, filter funciona como un filtro, filter es un método que todo array tiene, recibe una función que es la parte lógica del filtro, lo que dice si pasa o no pasa, y ese filtro se aplica a los elementos del array, te devuelve un nuevo array con los elemetos del array que cumplieron con la condición dada en la función.
Ejemplo:

```javascript
let alimentos = [🍎,🥑,🍉,🍰,🍕,🍟];

const comidaSana = alimentos.filter(esSaludable(alimento));

console.log(comidaSana);

[🍎,🥑,🍉]
```

## Ejemplo de Uso

Te voy a enseñar como aplicarlo en una zapatería, imagina que viene un cliente y quiere ver todos los modelos en su talla, es talla 6;
Ordenas tus modelos en objetos:

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

Declarar un array de todos los zapatos:

```javascript
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

Hacemos la función que nos diga si es talla 6:

```javascript
function esTalla6(articulo){
    return articulo.talla == 6;
}
```

Hacemos el filter y lo mostramos

```javascript
const talla6 = zapatos.filter(esTalla6);
console.log(talla6);
```

El resultado sería:

```javascript
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