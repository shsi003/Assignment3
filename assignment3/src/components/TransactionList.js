import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';

function TransactionList () {
	const {transactions} = useContext(GlobalContext);




return(
<>
	<h3>History</h3>
	<ul id="list">

	</ul>
	<ul id="list" className="list" key={transactions.description}>
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