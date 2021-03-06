import styled from "styled-components";
import { darken , transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        margin-top: 1.5rem;
        background: var(--green);

        border-radius: 0.25rem;
        border: 0;

        font-weight: 500;
        font-size: 1.2rem;
        color: #fff;

        transition: 0.2s;

        &:hover {
            filter: opacity(0.8);
        }
    }
`

export const Buttons = styled.div`
        
        margin: 1rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
`
interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: "#33cc95",
    red: "#e52e35",
}

export const RadioBox = styled.button<RadioBoxProps>`

        height: 4rem;
        border: 3px solid #d7d7d7;
        border-color: ${(props) => props.isActive 
            ?  transparentize(0.4, colors[props.activeColor])
            : 'transparent'
        };

        background: ${(props) => props.isActive 
            ? transparentize(0.6, colors[props.activeColor])
            : 'transparent'
        };
        
        
        border-radius: 0.25rem;
        
        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s; 

        &:hover {
            border-color: ${darken(0.1 , '#d7d7d7')}; 
        }

        img {
            width: 30px;
            height: 30px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-weight: 500;
            font-size: 1.2rem;
            color: ${(props) => props.isActive 
            ? '#ffffff'
            : 'var(--text-body)'
        };
        }
    
`