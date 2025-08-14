import './App.css';
import Balance from './components/Balance.js';
import Header from './components/Header.js';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


import { GlobalProvider } from './context/GlobalState';




function App() {



      return ( 
        <>
        <GlobalProvider>
         <Header/>
          <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
          </div>
        </GlobalProvider>
        
     


        </>
      );
    

}

export default App;
