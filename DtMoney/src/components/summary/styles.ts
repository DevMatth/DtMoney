import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;
    
    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            align-items: center;
            display: flex;
            justify-content: space-between;
        }
        
        strong {
            display: block;
            font-size: 2rem;
            margin-top: 1rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.total {
            background: var(--green);
            color: var(--shape)
        }
        
    }
`