import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/models/Hooks";
import { Personagem, removerFavorito, adicionarFavorito } from "../store/slices/PersonagensSlice";
import { ComponentePesquisa } from "../components/NavegacaoConteudo/NavList";
import { MenuListagem } from "../components/PaginaConteudo/ConteudoListagem";
import styled from "styled-components";

// Contêiner estilizado para a Listagem de Sobrenomes
const ListagemContainer = styled.div`
    height: 100vh;
    overflow-y: auto;
    background-color: #1e1e1e;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const PaginacaoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
        margin: 0 5px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        background-color: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.primary.contrastText};
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;

        &:hover {
            background-color: ${(props) => props.theme.palette.primary.light || "#6b1a1a"};
            transform: scale(1.05);
        }

        &:disabled {
            background-color: ${(props) => props.theme.palette.action.disabledBackground};
            color: ${(props) => props.theme.palette.action.disabled};
            cursor: not-allowed;
        }
    }
`;


export const ListagemSobrenome: React.FC = () => {
    const { sobrenome } = useParams<{ sobrenome: string }>(); // Captura o sobrenome da URL
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredPersonagens, setFilteredPersonagens] = useState<Personagem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const personagensPorPagina = 10;

    const dispatch = useAppDispatch();

    // Seleciona personagens e favoritos do Redux
    const personagens = useAppSelector((state) => state.personagens.personagens) || [];
    const favoritos = useAppSelector((state) => state.personagens.favoritos) || [];

    // Função para remover personagem favorito
    const handleRemoverFavorito = (personagemId: number) => {
        dispatch(removerFavorito(personagemId));
    };

    // Função para adicionar personagem favorito
    const handleAdicionarFavorito = (personagem: Personagem) => {
        dispatch(adicionarFavorito(personagem));
    };

    // Função para capturar o termo de busca
    const handleSearch = (termo: string) => {
        setSearchTerm(termo);
    };

    // Filtra os personagens com base no sobrenome e no termo de busca
    useEffect(() => {
        const filtered = personagens.filter(
            (personagem) =>
                personagem.sobrenome?.toLowerCase() === sobrenome?.toLowerCase() &&
                personagem.nome?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPersonagens(filtered);
        setCurrentPage(1); // Reseta para a primeira página após a busca
    }, [searchTerm, sobrenome, personagens]);

    // Função para verificar se um personagem está nos favoritos
    const isPersonagemFavorito = (personagem: Personagem) =>
        favoritos.some((fav) => fav.id === personagem.id);

    // Função para alternar favoritos
    const toggleFavorite = (personagem: Personagem) => {
        isPersonagemFavorito(personagem)
            ? handleRemoverFavorito(personagem.id)
            : handleAdicionarFavorito(personagem);
    };

    // Funções de navegação entre páginas
    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredPersonagens.length / personagensPorPagina)) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <ListagemContainer>
            <ComponentePesquisa onSearch={handleSearch} />

            <MenuListagem
                personagensFiltrados={filteredPersonagens.slice(
                    (currentPage - 1) * personagensPorPagina,
                    currentPage * personagensPorPagina
                )}
                onRemove={handleRemoverFavorito}
                onToggleFavorite={toggleFavorite}
            />

            <PaginacaoContainer>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Página Anterior
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage >= Math.ceil(filteredPersonagens.length / personagensPorPagina)}
                >
                    Próxima Página
                </button>
            </PaginacaoContainer>
        </ListagemContainer>
    );
};
