import React, {useContext} from "react";

import {GlobalContext} from '../context/GlobalState';

function Transaction ({transaction}) {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? '-' : '+';


	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
			{transaction.description}
			<span/>
		   {sign}${Math.abs(transaction.amount)}
			<span/>
			{transaction.date}
			<span/>
			{transaction.category}
			<span/>
			<button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
		</li>
	)


}

export default Transaction