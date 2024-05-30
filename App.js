import React, {useState} from 'react';
import Expenseform from './components/ExpenseForm.js';
import './App.css';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };
  return (
    <div className="App">
   <h1>Expense Tracker App</h1>
 
   <Expenseform onAddExpense={addExpense}/>
   <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />

    </div>
  );
}

export default App;
