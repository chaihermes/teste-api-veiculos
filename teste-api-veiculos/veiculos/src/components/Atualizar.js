import React, { Component } from 'react';
import axios from 'axios';
import api from '../api';
import { withRouter } from 'react-router-dom';


export default class Atualizar extends Component {
    constructor(props){
        super(props);

        this.state ={
            veiculo: '',
            marca: '',
            ano: '',
            descricao: '',
            vendido: false
        }

        this.handleCampoChange = this.handleCampoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        const veiculoId = this.props.match.params.id

        axios.get(api.veiculos+'/${veiculoId}').then(response =>{
            this.setState({
                veiculo: response.data.veiculo,
                marca: response.data.marca,
                ano: response.data.ano,
                descricao: response.data.descricao,
                vendido: response.data.vendido
            })
        })
    }

    handleCampoChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        const { historico } = this.props
        const atualizar = {
            veiculo: this.state.veiculo,
            marca: this.state.marca,
            ano: this.state.ano,
            descricao: this.state.descricao,
            vendido: this.state.vendido
        }

        axios.post(api.veiculos+'/'+this.props.match.params.id, atualizar)
        .then(response => {
            historico.push('/')
        }).catch(error => {
            this.setState({
                errors: error.response.data.errors
            })
        })
    }


    render(){
        return(
            <section className="d-flex justify-content-center m-5">
            <form className="card col-lg-8 p-5"  onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <h3>Cadastro de Automóveis</h3>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="veiculo" className="col-sm-4 col-form-label"> Veículo</label>
                        <div className="col-sm-8">
                            <input 
                                id="veiculo" name="veiculo" type="text" className="form-control" placeholder="Nome do veículo" value={this.state.veiculo} 
                                onChange={this.handleCampoChange}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="marca" className="col-sm-4 col-form-label">Marca</label>
                        <div className="col-sm-8">
                            <input 
                            id="marca" name="marca" type="text" className="form-control" placeholder="Marca do veículo" 
                            value={this.state.marca} 
                            onChange={this.handleCampoChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="ano" class="col-sm-4 col-form-label">Ano</label>
                        <div className="col-sm-8">
                            <input id="ano" name="ano" type="text" className="form-control" placeholder="Ano do veículo" 
                            value={this.state.ano} 
                            onChange={this.handleCampoChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descricao" className="col-sm-4 col-form-label"> Descrição</label>
                        <div className="col-sm-8">
                            <input id="descricao" name="descricao" type="text" className="form-control" placeholder="Descrição do veículo"
                            value={this.state.descricao}
                            onChange={this.handleCampoChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="vendido" class="col-sm-4 col-form-label">Vendido</label>
                        <div className="col-sm-8">
                            <input type="checkbox" name="vendido" value="0" /><label>Sim</label>
                            <input type="checkbox" name="vendido" value="1" className="ml-5" /><label>Não</label>
                        </div>
                    </div>
                    <div className="form-group row d-flex flex-row-reverse">
                        <button onClick={ () => this.props.historico.goBack()} className="btn btn-default">Cancelar</button>
                        <button type="submit" className="btn btn-outline-primary" style="margin-right: 15px">Cadastrar</button>
                    </div>
            </form>
        </section>
        )
    }

}