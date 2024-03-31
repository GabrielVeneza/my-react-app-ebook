// const userName = "Gabriel"
// var  isLoggedIn = false

// function validaLogin(){
//     isLoggedIn = true;
// }

// const loginMsg = (
//     <div>
//         <h1>Faça o Login:</h1>
//         <button onClick={validaLogin()}>LogIn</button>
//     </div>
// )

// const bemVindo = (
//     <div>
//         <h1>Bem-vindo, {userName}!</h1>
//         <br />
//         {perfilCard}
//     </div>
// )

// function handleClick(){
//     alert('Botão Clicado')
// }

// function Button(props){
//     return(
//         <button onClick={handleClick} className="{props.className">{props.label}</button>
//     )
// }

// const perfilCard = (
//     <div className="perfil-card">
//         <img src="https://avatars.githubusercontent.com/u/51462122?v=4" alt="foto de perfil" className="perfil-imagem"/>
//         <h2>Gabriel Oliveira</h2>
//         <p>Sou peoframador Jr da Lopes Rio</p>
//     </div>
// 


// const names = ['Ana', 'Bruno', 'Carla']

// function NameList(){
//     return(
//         <ul>
//             {names.map(name => <li>{name}</li>)}
//         </ul>
//     )
// }

import NameList from "./NameList"


function Greeting(){
    return(
        <div>
            {/* <h1>
                {isLoggedIn? {bemVindo}:{loginMsg}}
            </h1> */}

            {/* {perfilCard}

            <Button click = "handleClick()" className = "button" label = "Me CLique"/> */}

            <NameList />

        </div>
    )
}

export default Greeting