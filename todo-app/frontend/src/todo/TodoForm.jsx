import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Grid from '../templates/Grid.jsx';
import IconButton from '../templates/IconButton.jsx';

// Actions Creators
import { handleChange, search, addTodo, clear} from '../main/store/actions/todoAction.js';

class TodoForm extends Component {

    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentDidMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { addTodo, search, clear, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : addTodo(description)
        } else if (e.key === 'Escape') {
            clear() 
        }
    }

    render() {
        const { addTodo, search, clear, description } = this.props

        return (
            <div role='form' className='todoForm ' >

            <Grid cols='12 9 10' >
                <input id="description" className="form-control"
                    placeholder='Adicionar uma tarefa...' value={this.props.description}
                    onChange={e => this.props.handleChange(e.target.value)} 
                    onKeyUp={this.keyHandler}/>
            </Grid>

            <Grid cols='12 3 2' >
                <IconButton type='primary' icon='plus' hide={false}
                    onClick={_ => addTodo(description) } />

                <IconButton type='info' icon='search'
                    onClick={search} />

                <IconButton type='default' icon='close' 
                    onClick={clear}/>
            </Grid>
        </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        description: state.todo.description
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        handleChange,
        search,
        addTodo,
        clear
    }, dispatch)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(TodoForm);