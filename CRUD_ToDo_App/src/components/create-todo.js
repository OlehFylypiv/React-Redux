import React from 'react';

export default class CreateTodo extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            error: null 
        };
    }
    
    renderError() {
        
        if (!this.state.error) {
            return null;
        }

        return <div style = {{ color: 'red' }}>{ this.state.error }</div>;
    }

    render() {
        
        return(
            <form onSubmit = { this.hadleCreate.bind(this) }>
                <input type = "text" placeholder = "What I need to do ?" ref = "createInput"/>
                <button>Create</button>
                { this.renderError() }
            </form>
        );
    }

    hadleCreate(event) {
        
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        
        if (!task) {
            return 'Please, write a task !';
        }
        else if (_.find(this.props.todolist, todo => todo.task === task)) {
            return 'Task already exist !';
        }
        else {
            return null;
        }
    }
}