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
        </>
    )
} 

