<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
    protected $table = 'veiculos';
    protected $primaryKey = 'id'; 

    protected $fillable = [
        'veiculo',
        'marca',
        'ano',
        'descricao',
        'vendido'
    ];
}
