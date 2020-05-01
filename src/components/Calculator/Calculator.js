import React, { PureComponent } from "react";
import './Calculator.scss';

export default class Calculator extends PureComponent {

    state= {
        value:'',
        expression: '',
        controls: ['CE', 'C', 'Del', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='],
    }
    handleInputChange = (event) => {
        const { currentTarget : { value } } = event; 
        this.setState({ value });
    }

    evaluate(fn) {
        return new Function('return ' + fn)();
    }

    handleControls = (control) => {
        const { value } = this.state;
        let newValue = value;
        switch(control) {
            case 'CE':
                newValue = '';
                this.setState({ expression: ''});
                break;
            case 'C':
                    newValue = '';
                    break;
            case 'Del':
                newValue = '';
                break;
            case '=':
                newValue = this.evaluate(value.replace('x','*'));
                this.setState({ expression: value+'='});
                break;
            default: newValue+=control;
            

        }
        this.setState({ value: newValue });

    };
    renderControls = () => {
        return this.state.controls.map(control => (
            <button className="controls" onClick={() => this.handleControls(control)}>{control}</button>
        ));
    };
    render() {
        const { value, expression } = this.state;
        return (
            <div className="cal__container">
                <div>
                    <h1>Basic Calculator</h1>
                </div>
                <div className="cal__fields display">
                    <div className="expression">{expression}</div>
                    <input className="result" value={value} onChange={this.handleInputChange}/>
                </div>
                <div className="cal__no__container">
                    {this.renderControls()}
                </div>
            </div>
        )
    }
} 