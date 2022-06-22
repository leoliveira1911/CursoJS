import React , {Component} from "react";

export default class Saudacao extends Component {

    
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    //esse construtor serve para na chamada onChange não precisar usar uma arrow function
    constructor(props) {
        super(props) //linha obrigatória para essa função

        this.setTipo = this.setTipo.bind(this) //faz o this enxergar o componente que está sendo utilizado.
    }

    setTipo(e) {
        this.setState({tipo: e.target.value})
    }
    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render () {
        const { tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}
