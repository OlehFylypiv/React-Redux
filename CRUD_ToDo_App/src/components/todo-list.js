import React from 'react';
import TodoListHeader from './todo-list-header';
import _ from 'lodash';
import TodoListItem from './todo-list-items'

export default class TodoList extends React.Component {
    
    renderItems() {
        
        const props = _.omit(this.props, 'todolist');
        
        return _.map(this.props.todolist, (todo, index)  => <TodoListItem key = { index } { ...todo } { ...props }/>);
    }

    render() {
        
        return(
            <table>
               <TodoListHeader/>
               <tbody>
                   { this.renderItems() }
               </tbody>
            </table>
        );
    }
}