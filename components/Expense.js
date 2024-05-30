import React from 'react';

const Expense = ({ title, amount, date, category}) => {
	return (
		<div className="expense">
			<div className="expense-details">
				<h3>{title}</h3>
				<div>
					<span>Amount: ${amount}</span>
					<span>Date: {date}</span>
					<span>Category: {category}</span>
				</div>

			</div>
			<button>Delete expense</button>

		</div>
	);
};

export default Expense;