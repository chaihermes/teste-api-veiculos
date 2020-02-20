<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Veiculo;
use App\Http\Controllers\Controller;

class VeiculosController extends Controller
{
    //Função que mostra todos os veículos cadastrados:
    public function index(){
        return Veiculo::all();
    }

    //Função que armazena o cadastro de um novo veículo:
    public function store(Request $request){
        $novoVeiculo = new Veiculo();
        $novoVeiculo->veiculo = $request->veiculo;
        $novoVeiculo->marca = $request->marca;
        $novoVeiculo->ano = $request->ano;
        $novoVeiculo->descricao = $request->descricao;
        $novoVeiculo->vendido = $request->vendido;
        $novoVeiculo->save();

        return "Veículo cadastrado com sucesso!";
    }

    //Função que mostra cada veículo individualmente:
    public function show($id){
        return Veiculo::find($id);
    }

    //Função que atualiza o cadastro de um veículo:
    public function update(Request $request, $id){
        $veiculo = Veiculo::find($id);
        $veiculo->veiculo = $request->veiculo;
        $veiculo->marca = $request->marca;
        $veiculo->ano = $request->ano;
        $veiculo->descricao = $request->descricao;
        $veiculo->vendido = $request->vendido;

        $veiculo->save();

        return "Veículo ".$veiculo->id." editado com sucesso.";
    }

    //Função que deleta um veículo:
    public function destroy(Request $request, $id){
        $veiculo = Veiculo::find($id);
        $veiculo->delete();

        return "Veículo ".$veiculo->id." deletado com sucesso.";
    }
}
