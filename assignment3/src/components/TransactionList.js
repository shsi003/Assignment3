import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';

function TransactionList () {
	const {transactions} = useContext(GlobalContext);




return(
<>
	<h3>History</h3>
	<ul id="list" className="list" key={transactions.description}>
		<li>
			<h5>Decscription</h5>
			<span/>
			<h5>amount</h5>
			<h5>Date</h5>
			<h5>Category</h5>
		</li>
		{transactions.map(transaction => (<li key={transaction.id}>
			{transaction.description}
			<span/>
			{transaction.amount}
			<span/>
			{transaction.date} 
			<span/>
			{transaction.category}
		</li>))}
		

	</ul>
</>

)

}

export default TransactionList