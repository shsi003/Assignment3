import React, {useState} from 'react';

const Expenseform = () => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const [category, setCategory] = useState('');
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const {name, value } = e.target;
		switch (name) {
			case 'title':
				setTitle(value);
				break;
			case 'amount':
				setAmount(value);
				break;
			case 'date':
				setDate(value);
				break;
			case 'category':
				setCategory(value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title || !amount || !date) {
			setErrors({ message: 'Please fill in all required fields'});
			return;
		}

		console.log('Form Submitted:', {title, amount, date, category });

		setTitle('');
		setAmount('');
		setDate('');
		setCategory('');
		setErrors({});

	};

	return(
		<form onSubmit={handleSubmit}>
			<div>
				<label>Title:</label>
				<input type="text" name="title" value={title} onChange={handleInputChange}/>
			</div>
			<div>
				<label>Amount:</label>
				<input type="number" name="amount" value={amount} onChange={handleInputChange}/>
			</div>
			<div>
				<label>Date:</label>
				<input type="date" name="date" value={date} onChange={handleInputChange}/>
			</div>
			<div>
				<label>Category</label>
				<select name="category" value={category} onChange={handleInputChange}><option value="">Select Category</option>
					<option value="housing">housing</option>
					<option value="grocery">grocery</option>
					<option value="transportation">transportation</option>
					<option value="clothes">clothes</option>
					<option value="other">other</option>
				</select>
					
			</div>
			{errors.message && <p className="error">{errors.message}</p>}
			<button type="submit">Add expense</button>
		</form>
	);
};

export default Expenseform;