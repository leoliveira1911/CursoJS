import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/1-primeiro'
import BomDia from './componentes/2-bomDia'
import Multi , {BoaNoite} from './componentes/3-multiplos'
import Saudacao from './componentes/4-saudacao'
import Pai from './componentes/6-pai'
import Filho from './componentes/5-filho'

/* const elemento = <h1>React</h1> 
ReactDOM.render(
    <div>
        <BomDia nome='Juquinha'/>
        <Multi.BoaTarde nome='Joãozinho'/> 
        <BoaNoite nome='Zequinha'/> 
    </div>
, document.getElementById('root')) */

/* ReactDOM.render(
    <div>
        <Saudacao tipo='Selecione uma saudação' nome='Selecione um nome'/> 
    </div>
, document.getElementById('root')) */

ReactDOM.render(
    <div>
        <Pai nome='Joaquim' sobrenome='Silva'>
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Silva"/>
        </Pai> 
    </div>
, document.getElementById('root'))