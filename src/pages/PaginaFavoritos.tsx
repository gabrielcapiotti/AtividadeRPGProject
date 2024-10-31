import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/models/Hooks";
import { Personagem, removerFavorito, adicionarFavorito } from "../store/slices/PersonagensSlice";
import { ComponentePesquisa } from "../components/NavegacaoConteudo/NavList";
import { MenuListagem } from "../components/PaginaConteudo/ConteudoListagem";
import styled from "styled-components";

// Contêiner específico para estilizar o MenuListagem sem afetar os outros componentes
const ListagemContainer = styled.div`
    height: 100vh;        
    overflow-y: auto;    
    background-color: #1e1e1e; 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

// Contêiner para os botões de paginação
const PaginacaoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap: 10px;

    button {
        padding: 10px 15px;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        background-color: #444;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #666;
        }

        &:disabled {
            background-color: #222;
            cursor: not-allowed;
        }
    }
`;

export const PersonagensFavoritos: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredPersonagens, setFilteredPersonagens] = useState<Personagem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const personagensPorPagina = 10;
    const favoritos = useAppSelector((state) => state.personagens.favoritos);
    const dispatch = useAppDispatch();

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

    // Filtra os personagens com base no termo de busca
    useEffect(() => {
        const filtered = favoritos.filter((personagem: Personagem) =>
            personagem.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPersonagens(filtered);
        setCurrentPage(1); // Reseta para a primeira página após a busca
    }, [searchTerm, favoritos]);

    // Função para verificar se um personagem está nos favoritos
    const isPersonagemFavorito = (personagem: Personagem) => {
        return favoritos.some((fav) => fav.id === personagem.id);
    };

    // Função para alternar favorito
    const toggleFavorite = (personagem: Personagem) => {
        isPersonagemFavorito(personagem)
            ? handleRemoverFavorito(personagem.id)
            : handleAdicionarFavorito(personagem);
    };

    // Calcular o número total de páginas
    const totalPages = Math.ceil(filteredPersonagens.length / personagensPorPagina);

    // Função para ir à página anterior
    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    // Função para ir à próxima página
    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
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
                <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
                    Próxima Página
                </button>
            </PaginacaoContainer>
        </ListagemContainer>
    );
};
