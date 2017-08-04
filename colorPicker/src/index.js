import React from 'react';
import { render } from 'react-dom';

class ColorPicker extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            color: 'yellow'
        }
    }

    changeColor(event) {
        
        this.setState({
            color: event.target.value
        });
    }

    render() {
        
        const styleObj = {
            backgroundColor: this.state.color
        }

        return (
            <section style = { styleObj } id = "main-section">
                <h1>{ this.state.color }</h1>
                <input value = { this.state.color } onChange = { this.changeColor.bind(this) }/>                
            </section>
        );
    }
}


render(
    <ColorPicker />,
    document.getElementById('app')
);