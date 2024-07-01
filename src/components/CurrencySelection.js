import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelection = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const changeCurrency = (event) =>{
        setNewCurrency(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
<div className='alert currency-selection'>
<span>Currency (
    <select className="currency-selection" id="inputCurrencySelect01" onChange={changeCurrency}>
        <option className="currency-selection-values" value="$" name="dollar">$ Dollar</option>
        <option className="currency-selection-values" selected="selected" value="£" name="pound">£ Pound</option>
        <option className="currency-selection-values" value="€" name="euro">€ Euro</option>
        <option className="currency-selection-values" value="₹" name="ruppee">₹ Ruppee</option>
        <option className="currency-selection-values" value="R$" name="real">R$ BR Real</option>
    </select>)</span>
</div>
    );
};
export default CurrencySelection;
