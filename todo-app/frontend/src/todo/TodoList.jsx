import React from 'react';
import IconButton from '../templates/IconButton.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markAsDone, markAsUndone, remove} from '../main/store/actions/todoAction.js';

const TodoList = props => {

    const renderRows = _ => {

        console.log(props.list)

        const list = props.list || []

        return (
            list.map(todoItem => {
                return (
                    <tr className={todoItem.done ? 'markAsDone' : '' } key={todoItem._id}>
                        <td>{todoItem.description}</td>
                        <td >    
                            <IconButton type='success' icon='check'
                            onClick={_ => props.markAsDone(todoItem)} hide={todoItem.done} />

                            <IconButton type='warning' icon='undo'
                            onClick={_ => props.markAsUndone(todoItem)} hide={!todoItem.done}/>

                            <IconButton type='danger' icon='trash-o'
                            onClick={_ => props.remove(todoItem)} hide={!todoItem.done}/>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}


const mapStateToProps = state => {
    return {
        list: state.todo.list,
        done: state.todo.list.done
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        markAsDone,
        markAsUndone,
        remove
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(TodoList);