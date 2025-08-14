import React from "react";

import {GlobalContext} from '../context/GlobalState';

function Transaction ({transaction}) {
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
			<button className="delete-btn">x</button>
		</li>
	)


}

export default Transaction