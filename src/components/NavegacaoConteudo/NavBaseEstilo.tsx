import { Button, Toolbar } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";

// Modal com animações e estilo refinado
export const ModalEstilo = styled(motion.div)`
    background-color: #1b1b1b;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 90%;
    max-width: 400px;
    right: 0;
    top: 0;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);

    @media (min-width: 768px) {
        width: 25vw;
    }
`;

// Variantes de animação para o modal
export const ModalVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 70, damping: 20 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 70, damping: 20 } },
};

// Cabeçalho estilizado
export const CabecalhoEstilo = styled(Toolbar)`
    background-color: #4d1010;
`;

// Botão personalizado para o modal com animação de hover
export const BotaoModal = styled(Button) <{ cor: string }>`
    font-style: italic;
    font-weight: bolder;
    font-size: 1.2rem;
    width: 100%;
    height: 10%;
    margin-bottom: 15px;
    padding: 15px;
    color: white !important;  /* Texto branco fixo */
    background-color: ${({ cor }) => cor}; /* Cor fixa para o botão */
    border: 4px solid rgba(255, 215, 0, 0.8);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5),
                inset 0 0 5px rgba(255, 215, 0, 0.5);
    border-radius: 12px;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: ${({ cor }) => cor}; 
        filter: brightness(1.2); 
        transform: scale(1.08);
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7),
                    inset 0px 0px 10px rgba(255, 215, 0, 0.8);
    }
`;

export const Botoes = [
    { nome: "Página Principal", rota: "/", cor: "#1E90FF" },
    { nome: "Registrar Personagem", rota: "/registro", cor: "#FF4500" },
    { nome: "Favoritos", rota: "/favoritos", cor: "#32CD32" },
];
