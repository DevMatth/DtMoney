import styled from 'styled-components'

export const Container = styled.header`
    background: var(--gray);
`

export const Section = styled.section`
    max-width: 1120px;
    margin: 0 auto;
    align-items: center;

    padding: 2rem 1rem 13rem;

    align-items: center;
    display: flex;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: white;
        background: var(--gray-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: 0.2s;

    &:hover {
        filter: brightness(0.9)
    }
    }
`