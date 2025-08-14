import './App.css';
import Balance from './components/Balance.js';
import Header from './components/Header.js';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';




function App() {



      return ( 
        <>
        <Header/>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>



        </>
      );
    

}

export default App;
