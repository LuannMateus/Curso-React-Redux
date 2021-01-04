import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Grid from '../templates/Grid.jsx';
import IconButton from '../templates/IconButton.jsx';

// Actions Creators
import { handleChange } from '../main/store/actions/todoAction.js';

const TodoForm = props => {

    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm ' >

            <Grid cols='12 9 10' >
                <input id="description" className="form-control"
                    placeholder='Adicionar uma tarefa...' value={props.description}
                    onChange={e => props.handleChange(e.target.value)} 
                    onKeyUp={keyHandler}/>
            </Grid>

            <Grid cols='12 3 2' >
                <IconButton type='primary' icon='plus' hide={false}
                    onClick={props.handleAdd} />

                <IconButton type='info' icon='search'
                    onClick={props.handleSearch} />

                <IconButton type='default' icon='close' 
                    onClick={props.handleClear}/>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        description: state.todo.description
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        handleChange
    }, dispatch)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(TodoForm);