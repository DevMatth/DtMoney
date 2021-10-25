import LogoImg from '../../assets/logo.svg';
import { Container, Section } from './style';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Section> 
                <img src={LogoImg} alt="Logo"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New transaction
                </button>

            </Section>
        </Container>
    )
}