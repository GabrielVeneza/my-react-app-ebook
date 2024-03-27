<h1><b>Arrow Function</b></h1>

• Função tradicional:

```js
function greet(name){
    return "olá," +name+"!";
}
```

• Arrow Function

```js
const greet2 = name => "olá," +name+"!";
```

<br>
<h1><b>Destructuring em objetos</b></h1>

<b>• Exemplo básico</b> 

```js
const person ={
        firstName: "João",
        lastName: "Silva",
        age: 30
    };

    const {firstName, lastName} = person;
    
    console.log(firstName)
```

<p>Com essa funcionalidade conseguimos imprimir uma variável sem precisar passar todo o caminho do objeto.</p>


<b>• Arrays</b>

```js
    const colors = ['vermelho','azul','verde'];

    const [firstColor, SecondColor] = colors;

    console.log(firstColor)
    console.log(SecondColor)
```