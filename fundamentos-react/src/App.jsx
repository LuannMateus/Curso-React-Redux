import React from 'react';

import './App.css'

import Primeiro from './components/basics/Primeiro.jsx';
import ComParametros from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Random from './components/basics/Random';
import Card from './components/layout/Card';
import FamiliaMembro from './components/basics/FamiliaMembro';
import Familia from './components/basics/Familia';
import ListaDeAlunos from './components/loop/ListaDeAlunos';
import GunStore from './components/loop/TabelaProdutos';
import ParOuImpar from './components/conditional/ParOuImpar';

export default props => {
    return (
        <div className='app'>
            <h1 className='TitleApp'>Fundamentos React</h1>

            <div className="Cards">
                <Card title='#8 - Renderização Condicional' color='#080'>
                    <ParOuImpar num={21} />
                </Card>
                <Card title='#7 - Tabela Gun Store' color='#080'>
                    <GunStore />
                </Card>
                <Card title='#6 - Loop' color='#080'>
                    <ListaDeAlunos />
                </Card>
                <Card title='#5 - Familia' color='#080'>
                    <Familia lastName='Silva'>
                        <FamiliaMembro name='Mia' />
                        <FamiliaMembro name='Hidaila' />
                        <FamiliaMembro name='Eli' lastName='William' />
                    </Familia>
                </Card>
                <Card title='#4 - Random Values' color='#080'>
                    <Random min={0} max={10} />
                </Card>
                <Card title='#3 - Fragment' color='#08F'>
                    <Fragmento />
                </Card>
                <Card title='#2 - First Component' color='#08B'>
                    <Primeiro />
                </Card>
                <Card title='#1 - Grade Situation' color='#08C'>
                    <ComParametros title='Situação do Aluno' student='Pedro Silva' grade={9.3} />
                </Card>
            </div>





        </div>
    )
}
