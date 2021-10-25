import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import CloseIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import expenseIcon from '../../assets/expense.svg';

import { Container , Buttons , RadioBox} from './styles';
import { useTransactions } from '../../hooks/TransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })
    
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('')
    onRequestClose();
  }
    return (
        
      <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
          
          <button 
            type='button'
            onClick={onRequestClose}
            className="react-modal-close"
          >
              <img src={CloseIcon} alt="Close"/>
          </button>
        
        {/*----------- tag form ------------*/}
        <Container onSubmit={handleCreateNewTransaction}> 
          <h2>Cadastrar transação</h2> 
         
          <input 
            placeholder="Titulo"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <Buttons>
            
            <RadioBox 
              type='button'
              onClick={() => { setType('deposit')}}
              isActive={type === "deposit"}
              activeColor="green"
              >
                <img src={incomeIcon} alt="income"/>
                <span>
                  income
                </span>              
            </RadioBox>

            <RadioBox 
              type='button'
              onClick={() => { setType('withdraw')}}
              isActive={type === "withdraw"}
              activeColor="red"
            >
                <img src={expenseIcon} alt="expense"/>
                <span>
                  expense
                </span>              
            </RadioBox>

          </Buttons>

          <input 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>

        </Container>
      </Modal>  
    );
}