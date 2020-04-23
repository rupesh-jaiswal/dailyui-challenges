import React, { PureComponent } from "react";
import './Calculator.scss';

export default class Calculator extends PureComponent {

    state= {
        cardno: '',
    }
    handleCardNumber = (event) => {
    const { currentTarget : { value } } = event;
        
    }
    render() {
        return (
            <div className="cc__container">
                <div className="cc__fields display">
                    <div className="expression"> </div>
                    <input className="result" />
                </div>
                <div className="no__container">
                    <button className="controls">CE</button>
                    <button className="controls">C</button>
                    <button className="controls">Del</button>
                    <button className="controls">\</button>
                    <button className="controls">7</button>
                    <button className="controls">8</button>
                    <button className="controls">9</button>
                    <button className="controls">x</button>
                    <button className="controls">4</button>
                    <button className="controls">5</button>
                    <button className="controls">6</button>
                    <button className="controls">-</button>
                    <button className="controls">1</button>
                    <button className="controls">2</button>
                    <button className="controls">3</button>
                    <button className="controls">+</button>
                    <button className="controls">+/-</button>
                    <button className="controls">0</button>
                    <button className="controls">.</button>
                    <button className="controls">=</button>
                </div>
            </div>
        )
    }
}