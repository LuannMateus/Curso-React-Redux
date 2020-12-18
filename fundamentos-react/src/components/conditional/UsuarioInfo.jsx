import React from 'react';

import { If, Else } from './If';

const UsuarioInfo = props => {
    const user = props.user || {}
    const { name, age } = user

    return (
        <div>
            {/* <If test={user && name}>
                <p>Seja Bem-Vindo <strong> {name} </strong> que tem {age} anos de idade.</p>
            </If> */}

            <If test={user && name}>
                <p>Seja Bem-Vindo <strong> {name} </strong> que tem {age} anos de idade.</p>

                <Else>
                    <p>Seja Bem-Vindo <strong>Desconhecido</strong>!</p>
                </Else>
            </If>

        </div>
    )
}

export default UsuarioInfo;