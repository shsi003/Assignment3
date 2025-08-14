import React, {useContext} from "react";
import Transaction from "./Transaction";


import {GlobalContext} from '../context/GlobalState';

function TransactionList () {
	const {transactions} = useContext(GlobalContext);
	const sign = transactions.amount < 0 ? '-' : '+';



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
		{transactions.map(transaction => (<Transaction key={transaction.id} transaction =
		{transaction}
		/>))}
		

	</ul>
</>

)

}

export default TransactionList