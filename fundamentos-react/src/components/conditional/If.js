/*
    <If test={aluno.nota >= 7}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>
*/

const If = props => {

    // Pegando todos os filhos do If caso eles sejam o Else.
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    // Pegando todos os filhos do If caso eles sejam diferente do Else.
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if (props.test) {
        return ifChildren

    } else if (elseChild) {
        return elseChild

    } else {
        return false
    }

}

const Else = props => {
    return (
        props.children
    )
}

export { If, Else };