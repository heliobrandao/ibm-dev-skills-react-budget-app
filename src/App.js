import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import CurrencySelection from './components/CurrencySelection';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                        }        
                
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        {
                            /* Add Remaining component here*/
                        }        
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        {
                            /* Add ExpenseTotal component here */
                        }        
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>    
                            <div className='col-sm'>
                                <CurrencySelection />
                            </div>    
                    </div>
                    <div className='row mt-3'>
                        {
                            /* Add ExpenseList component here */
                        }         
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>                       
                    </div>
                    <div className='row mt-3'>
                        {
                            /* Add ExpenseItem component here */
                        }        

                        {
                            /* Add AllocationForm component here under */
                        }        
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>     
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
