import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import VeiculosLista from './components/VeiculosLista';
import Cadastro from './components/Cadastro';
import Atualizar from './components/Atualizar';
import './App.css';

export default class App extends Component {

  render(){
      return(
          <BrowserRouter>
          <>
              <Header />
              <Switch>
                  <Route exact path='/' component={VeiculosLista}/>
                  <Route path='/cadastrar' component={Cadastro}/>
                  <Route path='/atualizar/:id' component={Atualizar}/>
              </Switch>
          </>
          </BrowserRouter>
      )
  }
}

