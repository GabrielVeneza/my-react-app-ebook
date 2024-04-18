export default function Jsbasico(){


    //Destructuring --------------------

    // const person ={
    //     firstName: "João",
    //     lastName: "Silva",
    //     age: 30
    // };

    // const {firstName, lastName, age} = person

    // const colors = ['vermelho','azul','verde']

    // const [firstColor, SecondColor] = colors

//    function displayInfo({firstName, age}){
//         console.log(`${firstName} tem ${age} anos!`)    
//    }


    // PROMISES ----------------------

    // const promise = new Promise ((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("Dados Recebidos!");
    //         reject("Erro ao buscar os dados!");
    //     },2000)
    // })
    
    // promise
    // .then(result => console.log(result))
    // .catch(error => console.log(error))

    
    //ASYNC/AWAIT --------------------

    // async function fatchData(){
    //     try{
    //         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         let data = await response.json()
    //         console.log(data)
    //     }catch(error){
    //         console.error("Houve um erro doido:",error)
    //     }
    // }

    // fatchData()


    // // MAP ---------------------------------
    
    // const numbers = [1,2,3,4,5]
    // const doubled = numbers.map(num => num*2)
    // console.log(doubled)


    // //FILTER -------------------------------

    // const numbers2 = [1,2,3,4,5]
    // const evens = numbers2.filter(num => num % 2 === 0)
    // console.log(evens)


    // //Reduce -------------------------------

    // const numbers3 = [1,2,3,4,5]
    // const sum = numbers3.reduce((accumulator, current) => accumulator + current, 0)
    // console.log(sum)


    //UTILIZAÇÃO NO REACT ----------------

    // function TodoList({tasks}){
    //     return(
    //         <ul>
    //             {tasks.map(task => <li key={task.id}>{task.name}</li>)}
    //         </ul>
    //     )
    // }



    // EXERCÍCIOS ----------------------------------------------

    // const numeros = [1,2,3]

    // const [n1,,n3] = numeros

    // const soma = n1 + n3;

    // const numeros2 = [1,2,3,4,5,6,7,8,9]

    // const ev = numeros2.filter(num => num >4)

    // const ev2 = ev.map(num => num * 3)

    // const ev3 = ev2.filter(num => num % 2 === 0)


    // console.log(ev)
    // console.log(ev2)
    // console.log(ev3)

<<<<<<< HEAD
    // EXERCÍCIOS ----------------------------------------------

    const alunos = [
        {id: 1, nome:"Ana"},
        {id: 2, nome:"Carlos"},
        {id: 3, nome:"Beatriz"},
        {id: 4, nome:"João"},
    ]

    function ListarAlunos(){
        return(
            <ul>
                {alunos.map(aluno => <li key={aluno.id}>{aluno.nome}</li>)}
            </ul>
        )


    }
=======
    // EXERCÍCIOS ----------------------------------------------    
    
>>>>>>> 42802b9cf4c3fa900bfe0a7a08a476e7fac7034e

    return(
        <>

            {/* Destructuring -----------------------------*/}

            {/* <h1>{firstName} {lastName} {person.age}</h1>
            <h2>{firstColor}, {SecondColor}</h2> */}

            {/* {displayInfo(person)} */}

            {/* <h1>
                Bem-vindo, {firstName}! Você tem {age} anos.
            </h1> */}

            {/* {TodoList} */}

            <ListarAlunos />

        </>
    )
} 