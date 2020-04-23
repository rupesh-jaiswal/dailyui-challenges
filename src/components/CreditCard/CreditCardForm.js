import React, { PureComponent } from "react";
import './CreditCardForm.scss';

export default class CreditCardForm extends PureComponent {

    state= {
        cardno: '',
    }
    handleCardNumber = (event) => {
    const { currentTarget : { value } } = event;
        
    }
    render() {
        return (
            <div className="cc__container">
                <div className="cc__fields name">
                    <div> Name on card </div>
                    <input className="name" />
                </div>
                <div className="cc__fields card_no">
                    <div> Card Number </div>
                    <input value={this.state.cardno} placeHolder="XXXX-XXXX-XXXX-XXXX"className="card-no" />
                </div>
                <div className="card__details">
                    <div className="cc__fields card_no">
                        <div> Expires </div>
                        <input placeHolder="MM/YY"className="expiry-year" />
                    </div>
                    <div className="cc__fields cvv">
                        <div>CVV</div>
                        <input type="number" placeHolder="XXXX"className="security-code" />
                    </div>
                </div>
                <button onClick={() => {}}>Purchase</button>
            </div>
        )
    }
}