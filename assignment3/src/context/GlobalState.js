import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
	transactions: [
		{id:1, description: "flower", amount:-20, date:"23/07/2025", category:"other"},
	]
}


// Create context
export const GlobalContext = createContext(initialState);



// Provider component
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);


	return (<GlobalContext.Provider value= {{
		transactions: state.transactions
	}}>
		{children}
	</GlobalContext.Provider>)
}