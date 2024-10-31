import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { adicionarFavorito, removerFavorito, removerPersonagem, Personagem } from "../store/slices/PersonagensSlice";
import { MenuListagem } from "../components/PaginaConteudo/ConteudoListagem";
import { ComponentePesquisa } from "../components/NavegacaoConteudo/NavList";
import styled from "styled-components";

export const ListagemContainer = styled.div`
    background-color: ${(props) => props.theme.palette.primary.main};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-height: 100vh;
    padding-bottom: 20px;
    color: ${(props) => props.theme.palette.text.primary};
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
        background-color: ${(props) => props.theme.palette.primary.dark};
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


export function PaginaListagemBleach() {
    const dispatch = useDispatch();

    // Estado para pesquisa, filtragem e controle de página
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const personagensPorPagina = 10;

    // Recuperando personagens e favoritos do Redux
    const personagens = useSelector((state: RootState) => state.personagens.personagens);
    const favoritos = useSelector((state: RootState) => state.personagens.favoritos);

    // Função para saber se um personagem está nos favoritos
    const personagemFavoritos = (personagem: Personagem) =>
        favoritos.some((item) => item.id === personagem.id);

    // Funções para adicionar e remover personagens dos favoritos
    const AdicionarFavorito = (personagem: Personagem) => {
        dispatch(adicionarFavorito(personagem));
    };

    const RemoverFavorito = (personagemId: number) => {
        dispatch(removerFavorito(personagemId));
    };

    const RemoverPersonagem = (personagemId: number) => {
        console.log("Removendo personagem ID:", personagemId);
        dispatch(removerPersonagem(personagemId));
    };

    // Função de busca otimizada (debounce opcional para melhorar a performance)
    const handleSearch = (termo: string) => {
        setSearchTerm(termo);
    };

    // Filtrando os personagens com base no termo de busca
    const filteredPersonagens = useMemo(
        () =>
            personagens.filter((personagem: Personagem) =>
                personagem.nome.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        [searchTerm, personagens]
    );

    const totalPages = Math.ceil(filteredPersonagens.length / personagensPorPagina);

    // Funções de navegação entre páginas
    const handleNextPage = () => {
        if (currentPage < totalPages) {
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
            {/* Componente de pesquisa */}
            <ComponentePesquisa onSearch={handleSearch} />

            {/* Listagem dos personagens */}
            <MenuListagem
                personagensFiltrados={filteredPersonagens.slice(
                    (currentPage - 1) * personagensPorPagina,
                    currentPage * personagensPorPagina
                )}
                onRemove={RemoverPersonagem}
                onToggleFavorite={(personagem) =>
                    personagemFavoritos(personagem)
                        ? RemoverFavorito(personagem.id)
                        : AdicionarFavorito(personagem)
                }
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
}
