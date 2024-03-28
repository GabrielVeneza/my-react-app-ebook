<h1><b>Git</b></h1>

<b>Setar usuário</b>
```
    git config --global user.name "Leonardo Comelli"
```

<b>Setar email</b>
```
 git config --global user.email leonardo@software-ltda.com.br
```

<b>Setar editor</b>
```
 git config --global core.editor vim
```

<b>Setar ferramenta de merge</b>
```
 git config --global merge.tool vimdiff
```

<b>Searquivos a serem ignorados</b>
```
 git config --global core.excludesfile ~/.gitignore
```

<b>Listar configurações</b>
```
 git config --list
```


<br/>
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

<b>• Funções</b>

```js
    function displayInfo({firstName, age}){
            console.log(`${firstName} tem ${age} anos!`)    
    }
```

<b>• Aplicação em React</b>

```html
    <h1>
        Bem-vindo, {firstName}! Você tem {age} anos.
    </h1>
```

<h1>Promises e Asyns/await</h1>

<h2>• Promises</h2>
<p>Uma promise é um objeto que representa a eventual conclusão (ou a falha) de uma operação assíncrona e seu valor resultante</p>

<b>Exemplo:</b>

```js
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Dados Recebidos!");
            reject("Erro ao buscar os dados!");
        },2000)
    })
    
    promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
```

<h2>• Async/await</h2>

<p>uma função async sempre retorna uma promise. Dentro de uma função async você pode usar await para esperar que uma promise seja resolvida</p>

<b>Exemplo:</b>

```js
    async function fatchData(){
        try{
            let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            let data = await response.json()
            console.log(data)
        }catch(error){
            console.error("Houve um erro doido:",error)
        }
    }

    fatchData()
```
<br/>
<h1>Map, Filter e Reduce</h1>

<b>Map</b>

```js
 const numbers = [1,2,3,4,5]
    const doubled = numbers.map(num => num*2)
    console.log(doubled)
```

<b>Filter</b>

```js
    const numbers2 = [1,2,3,4,5]
    const evens = numbers2.filter(num => num % 2 === 0)
    console.log(evens)
```

<b>Reduce</b>

```js
    const numbers3 = [1,2,3,4,5]
    const sum = numbers3.reduce((accumulator, current) => accumulator + current, 0)
    console.log(sum)
```

<h3>Utilização no React<h3>

```js
    function TodoList({tasks}){
        return(
            <ul>
                {tasks.map(task => <li key={task.id}>{task.name}</li>)}
            </ul>
        )
    }
```

