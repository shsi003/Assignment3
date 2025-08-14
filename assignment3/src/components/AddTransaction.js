import React, {useState} from "react";

function AddTransaction () {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const [date, setDate] = useState('');
	const [category, setCategory] = useState('');
	const categories = ['housing', 'grocery', 'transportation', 'clothes', 'other'];

return(
<>
	<h3>
		<form>
			<div className="form-control">
				<label htmlFor="text">Text</label>
				<input type="text"  placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
			</div>
			<div className="form-control">
				<label htmlFor="amount">amount<br/>
				(negative - expense, positive - income)
				</label>
				<input type="number"  placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
			</div>
			<div className="form-control">
				<label htmlFor="date">date</label>
				<input type="date"  placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
			</div>
			<div className="from-control">
				<label htmlFor="category">category</label>
				<select
                  className="form-control"
                >
                  <option value="">Select a category (optional)</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                  ))}
                </select>
			</div>
			<button className="btn">Add transaction</button>
		</form>
	</h3>
</>

)

}

export default AddTransaction