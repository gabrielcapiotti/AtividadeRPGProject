import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, IconButton } from "@mui/material";

export const CabecalhoEstilo = styled.div`
    background-color: ${(props) => props.theme?.palette?.primary.main || "#1b1b1b"};
    color: ${(props) => props.theme?.palette?.text.primary || "white"};
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease;
`;

export const IconButtonEstilizado = styled(IconButton)`
    color: ${({ theme }) => theme.palette.primary.light} !important;
    color: ${({ theme }) => theme.palette.secondary.contrastText} !important;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.palette.primary.dark} !important;
        color: ${({ theme }) => theme.palette.text.disable} !important;
    }
`;


export const BotaoArvoreGenealogica = styled(Button)`
    color: ${({ theme }) => theme.palette.text.primary} !important;
    background-color: ${({ theme }) => theme.palette.primary.main};
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.dark};
        color: white !important;
    }
`;

// Estilização do Botão para o Modal de Sobrenomes com a cor personalizada sem interferência do tema
export const BotaoModal = styled(Button) <{ cor: string }>`
    font-style: italic;
    font-weight: bolder;
    font-size: 18px;
    width: 100%;
    height: 10%;
    margin-bottom: 15px;
    padding: 15px;
    color: white !important;
    border: 4px solid rgba(255, 215, 0, 0.8);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5),
                inset 0 0 5px rgba(255, 215, 0, 0.5);
    border-radius: 12px;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: ${({ cor }) => cor} !important;
        filter: brightness(1.2);
        transform: scale(1.08);
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7),
                    inset 0px 0px 10px rgba(255, 215, 0, 0.8);
    }
`;


export const ModalEstilo = styled(motion.div)`
    background-color: #1b1b1b;
    color: white;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: fixed;
    display: flex;
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

// Variantes de animação do modal
export const ModalVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 70, damping: 20 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 70, damping: 20 } },
};

// Array de botões com cores personalizadas
export const Botoes = [
    { nome: "Venusia-MorningStar", cor: "#000000" },
    { nome: "Venusia-Kerrigan", cor: "#700101" },
    { nome: "Venusia-Breakheart", cor: "#ad2e00" },
    { nome: "Venuttia", cor: "#006d00" },
    { nome: "VenuStar", cor: "#026ec1" },
    { nome: "Venusia-Capiotti", cor: "#5a05a0" },
    { nome: "Venusia-Heartfire", cor: "#144d00" },
    { nome: "Venusia-Howlett", cor: "#01015d" },
];
