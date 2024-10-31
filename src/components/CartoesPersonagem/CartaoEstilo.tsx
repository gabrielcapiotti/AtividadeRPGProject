import styled from "styled-components";
import { Button, CardContent } from "@mui/material";

// Estilização do conteúdo do cartão
export const CardContentEstilizado = styled(CardContent)`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.palette.background.default}cc,
        transparent
    );
    color: ${({ theme }) => theme.palette.text.primary};
    z-index: 1;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 160px;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.dark};
        color: ${({ theme }) => theme.palette.primary.contrastText};
    }
`;

// Estilização do container do cartão
export const CardEstiloContainer = styled.div`
    height: 480px; 
    width: 100%;
    max-width: 350px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};

    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;

// Estilização do container dos botões
export const BotoesContainer = styled.div`
    display: flex;
    justify-content: center;
`;

// Estilização dos botões
export const Botao = styled(Button)`
    width: 120px;
    padding: 10px 15px;
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-weight: bold;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2); /* Aplica a interação apenas na escala */
    }
`;
