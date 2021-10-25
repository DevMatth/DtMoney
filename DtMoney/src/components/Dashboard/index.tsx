import { Summary } from "../summary";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export function DashBoard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}