import styled from "styled-components";

export const ConteudoEstilo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    background-color: ${(props) => props.theme.palette.primary.dark};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 10px;
    padding: 10px;
    color: ${(props) => props.theme.palette.text.primary};
    transition: background-color 0.3s ease;
`;



