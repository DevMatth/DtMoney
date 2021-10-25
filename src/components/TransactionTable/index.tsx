
import { useTransactions } from "../../hooks/TransactionsContext";
import { Container } from "./style";


export function TransactionTable() {

    const {transactions} = useTransactions();
    return (
        <Container>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Value</th>
                    <th>Category</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'                                
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR', {
                                }).format(new Date(transaction.createdAt))}
                            </td>
                        </tr>  
                        );
                    })}            
                </tbody>
            </table>
        </Container>
    )
}