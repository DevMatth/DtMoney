import incomeIcon from '../../assets/income.svg'
import expenseIcon from '../../assets/expense.svg'
import totalIcon from '../../assets/total.svg'

import { Container } from "./styles";
import { useTransactions } from '../../hooks/TransactionsContext';


export function Summary() {

   const {transactions} = useTransactions();

   const summary = transactions.reduce((acc, transaction) => {
       if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
       } else {
           acc.withdraws += transaction.amount;
           acc.total -= transaction.amount;
       }
       return acc;
   }, {
        deposits: 0,
        withdraws: 0,
        total:0,
    });

   return (
        <Container>
            <div>
                <header>
                <p>Incomes</p>
                <img src={incomeIcon} alt="incomes"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                <p>Expenses</p>
                <img src={expenseIcon} alt="expenses"/>
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className='total'>
                <header>
                <p>Total</p>
                <img src={totalIcon} alt="total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}