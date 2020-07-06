<article>

Hola soy Oscar hoy quiero buscar a mi empleado del mes, se que solo hay un empleado con el nombre Leonidas y no quisiera buscar uno por uno hasta encontrarlo. ¿Puedes ayudarme?

</article>

## Lección

<article>

Hey! Otra vez yo Pepe y vengo a enseñarte el _método .find()_ que justo busca dentro los elementos de un array lo que tu le pidas mediante parametros, y te devuelve _el primer elemento del array que coincida con tu búsqueda_.

```javascript

let comida = [🍎 , 🌮 , 🍉, 🍔];

const garnacha = comida.find(esGarnacha(alimento));

console.log(garnacha);

[🌮]

```

Como puedes ver nos regresa _solo_ el primer elemento del array que cumple con ser una garnacha, en este caso el taco 🌮.

</article>

Usemos el ejemplo de la zapatería.
Llega a un cliente a pedirte un par de zapatos de una marca muy exclusiva llamada supreme, solo cuentas con un par en todo tu catálogo, con el método _.find()_ puedes encontrar ese par con exactitud.
¿Cómo se implementa?

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

### Paso 2: Crea un array con que contenga todos los zapatos.

```javascript
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

### Paso 3: Crea la función.

```javascript
function esSupreme(zapato) {
  return zapato.marca == 'supreme';
}
```

### Paso 4: Utiliza el método el .find() y muestra el resultado.

```javascript
const sonSupreme = zapatos.find(esSupreme);
console.log(sonSupreme);
```

El resultado es:

```javascript
{ talla: 3400, marca: 'supreme' }
```
