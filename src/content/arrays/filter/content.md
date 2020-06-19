
<article>

Soy Oscar tengo una startup y tengo algunos problemas que quiero que me ayudes a solucionar.

Voy a crear un sistema de análisis de datos y necesito alguien de mi equipo que conozca Python, quiero encontrarlo sin necesidad de preguntarle a cada uno. Tengo guardadas sus habilidades en un archivo, creo que tu podrías ayudarme con tus conocimientos de js.

</article>

<aside>

![](https://firebasestorage.googleapis.com/v0/b/personal-challenge-01.appspot.com/o/gamma%2FOscar.svg?alt=media&token=dee38849-2095-4be2-9d2b-4a8c9e3a3fe5)
</aside>

***

## Lección

<aside>

![](https://firebasestorage.googleapis.com/v0/b/personal-challenge-01.appspot.com/o/gamma%2FPepe.svg?alt=media&token=5544c1ca-e965-4098-809f-a671af84bf88)
</aside>

<article>

Hola soy Pepe y te voy a enseñar el método _.filter()_ para que puedas ayudar a Oscar.

Te voy a explica filter literalmente funciona como un filtro, filter _es un método que todo array tiene_, recibe una función que es la parte lógica del filtro, lo que dice si pasa o no pasa, y ese filtro se aplica a los elementos del
 array, te devuelve un nuevo array con los elementos del array que cumplieron con la condición dada en la función.

Ejemplo:



```javascript
let alimentos = [🍎,🥑,🍉,🍰,🍕,🍟];

const comidaSana = alimentos.filter(esSaludable(alimento));

console.log(comidaSana);

[🍎,🥑,🍉]
```
</article>


## Ahora un ejemplo paso a paso.


Te voy a enseñar como aplicarlo en una zapatería, imagina que viene un cliente y quiere ver todos los modelos en su talla, él es talla 6.


### Paso 1: Pon tus zapatos en objetos.

```javascript
let zapato1 =  {
  talla: 6,
  marca: 'adidas'
};
let zapato2 =  {
  talla: 8,
  marca: 'vans'
};
let zapato3 = {
  talla: 5,
  marca:  'rebook'
};
let zapato4 = {
  talla: 6,
  marca: 'nike'
};
```

### Paso 2: Crea un array que incluya a todos los zapatos.

```javascript
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

### Paso 3: Crea la función.

```javascript
function esTalla6(articulo){
  return articulo.talla == 6;
}
```

### Paso 4: Aplica el método filter y lo muestra el resultado con un console.log()

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