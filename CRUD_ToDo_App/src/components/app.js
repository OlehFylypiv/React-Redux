import React from 'react';
import TodoList from './todo-list';
import CreateTodo from './create-todo';

const todolist = [
    {
        task: 'Plant a tree',
        isCompleted: false
    },
    {
        task: 'Make a dinner',
        isCompleted: true
    }
];

export default class App extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            todolist
        };
    }

    render() {
        
        return (
            <div>
                <h1>Todo React App</h1>
                <CreateTodo todolist = { this.state.todolist } createTask = { this.createTask.bind(this) }/>
                <TodoList 
                    todolist = { this.state.todolist }
                    toggleTask = { this.toggleTask.bind(this) }
                    saveTask = { this.saveTask.bind(this) }
                    deleteTask = { this.deleteTask.bind(this) }
                />
            </div>
        );
    }

    toggleTask(task) {
        
        const foundTodo = _.find(this.state.todolist, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        
        this.setState({ todolist : this.state.todolist });
    }

    createTask(task) {
        
        this.state.todolist.push({
            task,
            isCompleted: false
        });

        this.setState({ todolist: this.state.todolist });
    }

    saveTask(oldTask, newTask) {
        
        const foundTodo = _.find(this.state.todolist, todo => todo.task === oldTask);
        foundTodo.task = newTask;

        this.setState({ todolist: this.state.todolist });
    }

     deleteTask(taskToDelete) {
        
        _.remove(this.state.todolist, todo => todo.task === taskToDelete);

        this.setState({ todolist: this.state.todolist })
    }
}