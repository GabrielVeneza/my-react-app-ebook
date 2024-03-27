export default function Jsbasico(){

    const person ={
        firstName: "João",
        lastName: "Silva",
        age: 30
    };

    const {firstName, lastName} = person

    const colors = ['vermelho','azul','verde']

    const [firstColor, SecondColor] = colors

    console.log(firstColor)
    console.log(SecondColor)

    return(
        <>
            <h1>{firstName} {lastName} {person.age}</h1>
            <h2>{firstColor}, {SecondColor}</h2>
        </>
    )
} 