import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';


export default class VeiculosLista extends Component {
    constructor(props){
        super(props);

        this.state = {
            veiculos: []
        }
    }

    componentDidMount(){
        axios.get(api.veiculos).then(response => {
            this.setState({
                veiculos: response.data
            })
        })
    }


    deletarVeiculo(veiculoId){
        axios.delete(api.veiculos+'/'+'${veiculoId}')
        .then( () => {
            return axios.get(api.veiculos)
        }).then(res => {
            const veiculos = res.data;
            this.setState({ veiculos });
        })
    }


    render(){
        const { veiculos } = this.state
        return(
            <>
            <div className="container">
                <h2>Lista de Veículos</h2>
                <table className="table">
                <thead>
                    <tr>
                        <th>Veículo</th>
                        <th>Marca</th>
                        <th>Ano</th>
                        <th>Descrição</th>
                        <th>Vendido</th>
                        <th><Link className="btn btn-primary btn-xs" to='/cadastrar'>Cadastrar Veículo</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {veiculos.map((veiculo) => (                    
                        <tr key = {veiculo.id}>
                            <td>{veiculo.veiculo}</td>
                            <td>{veiculo.marca}</td>
                            <td>{veiculo.ano}</td>
                            <td>{veiculo.descricao}</td>
                            <td>{veiculo.vendido}</td>
                            <td><Link className="btn btn-default btn-xs" to={'/veiculo/${veiculo.id}'}>Atualizar</Link>
                                <button className="btn btn-danger btn-xs btn-delete" onClick={() => this.deletarVeiculo(veiculo.id)}>Excluir</button>
                            </td>
                        </tr>  
                    )) 
                }
                </tbody>
            </table>
        </div>
        </>
        )
    }


}