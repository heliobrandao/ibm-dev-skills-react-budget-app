import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("The budget cannot exceed 20,000. Setting it to 20,000");
            setNewBudget(20000);
            return;
        }

        if(event.target.value < totalExpenses){
            alert("The budget cannot be below the Spent so far:[" + totalExpenses + "]. Setting the budget to the minimum.");
            setNewBudget(totalExpenses);
            return;

        }

        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
