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
import UsuarioInfo from './components/conditional/UsuarioInfo';
import DiretaPai from './components/comunication/DiretaPai';
import IndiretaPai from './components/comunication/IndiretaPai';
import Form from './components/forms/Input';

export default props => {
    return (
        <div className='app'>
            <h1 className='TitleApp'>Fundamentos React</h1>

            <div className="Cards">
                <Card title='#11 - Componente Controlado' color='#840101'>
                    <Form />
                </Card>
                <Card title='#10 - Comunicação Indireta' color='#FAC'>
                    <IndiretaPai />
                </Card>
                <Card title='#9 - Comunicação Direta' color='#F09729'>
                    <DiretaPai />
                </Card>
                <Card title='#8 - Renderização Condicional' color='#243C7A'>
                    <ParOuImpar num={21} />
                    <UsuarioInfo user={{ name: 'Silva Pereira', age: 19 }} />
                </Card>
                <Card title='#7 - Tabela Gun Store' color='#3C1249'>
                    <GunStore />
                </Card>
                <Card title='#6 - Loop' color='#120515'>
                    <ListaDeAlunos />
                </Card>
                <Card title='#5 - Familia' color='#0E1A40'>
                    <Familia lastName='Silva'>
                        <FamiliaMembro name='Mia' />
                        <FamiliaMembro name='Hidaila' />
                        <FamiliaMembro name='Eli' lastName='William' />
                    </Familia>
                </Card>
                <Card title='#4 - Random Values' color='#7289da'>
                    <Random min={0} max={10} />
                </Card>
                <Card title='#3 - Fragment' color='#08F'>
                    <Fragmento />
                </Card>
                <Card title='#2 - First Component' color='#000'>
                    <Primeiro />
                </Card>
                <Card title='#1 - Grade Situation' color='#A3F'>
                    <ComParametros title='Situação do Aluno' student='Pedro Silva' grade={9.3} />
                </Card>
            </div>





        </div>
    )
}
