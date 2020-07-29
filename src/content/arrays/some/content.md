# Untitled

Hola! Soy pepe y te voy a enseñar un nuevo método que todo array tiene, es `.some()` este método comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada

```jsx
let cursos = ['React' ,'Angular', 'App Engine', 'Kubernetes', 'Docker'];

// comprueba si un curso es angular
const existeAlMenosUno = (element) => element === 'Angular';

console.log(cursos.some(existeAlMenosUno));
// Salida esperada: true
```

Como podemos ver solo regresa `TRUE` si al menos un elemento cumple con la condición

## Ejemplo

Usemos el ejemplo de la zapatería.

Si en tu inventario quieres verificar si al menos un par de zapatos de una marca en espeficico se puede utilizar el metodo `.some()`

### Paso 1: Tener todos los zapatos como objetos dentro de un array.

```jsx
let zapatos = [
{
  talla: 1200,
  marca: 'adidas'
},
{
  talla: 800,
  marca: 'adidas'
},
{
  talla: 3400,
  marca: 'supreme'
},
{
  talla: 1600,
  marca: 'nike'
}];
```

### Paso 2: Crear la función

```jsx
function marcaAdidas(zapato) {
  return zapato.marca == 'adidas';
}
```

### Paso 3: Utilizar el método **.some** y mostrar el resultado

```jsx
const adidas = zapatos.some(marcaAdidas);
console.log(adidas);
```

El resultado es:

```jsx
true
```