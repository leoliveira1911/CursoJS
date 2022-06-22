import React from "react";
/* import Filho from "./5-filho"; */


function childrenWithPros(props) {
    
    return    React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props, ...child.props })
        })
     {/* faz o filho pegar as propriedades do pai, mas mantem as dele. 
        com o React.Children.map podemos ter mais de um filho.*/}
}
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithPros(props)}
            {/* <Filho nome="Pedro" sobrenome = {props.sobrenome} />
            <Filho {...props} />
            <Filho {...props} nome="Carla" /> {/* o nome="Carla" tem que vir depois, para sobrescrever o nome que veio dentro de {...props} */}
        </ul>
    </div>