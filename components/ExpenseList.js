import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense}) => {
	if (!expenses || expenses.length === 0) {
		return <p>No expenses to display.</p>;
	  }
	
	  
	return (
		<div>
			{expenses.map((expense) => (
				<div key={expense.id}>
					{/*Render each expense item*/}
					<p>{expense.title}</p>	
					<p>{expense.amount}</p>	
					<p>{expense.date}</p>	
					<p>{expense.category}</p>
					<button onClick={() => onDeleteExpense(expense.id)}>Delete expense</button>	
				</div>
			)

			)}
		</div>
	)
}

export default ExpenseList;