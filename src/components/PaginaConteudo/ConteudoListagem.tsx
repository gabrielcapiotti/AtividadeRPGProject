import React from "react";
import { CartaoPersonagem } from "../CartoesPersonagem/CartaoConteudo";
import { ConteudoEstilo } from "../PaginaConteudo/ConteudoEstilo";
import { Personagem } from "../../store/slices/PersonagensSlice";

interface MenuListagemProps {
    personagensFiltrados: Personagem[];
    onRemove: (personagemId: number) => void;
    onToggleFavorite: (personagem: Personagem) => void;
}


export const MenuListagem: React.FC<MenuListagemProps> = ({ personagensFiltrados }) => {
    return (
        <ConteudoEstilo>
            {personagensFiltrados.length > 0 ? (
                personagensFiltrados.map((personagem) => (
                    <CartaoPersonagem
                        key={personagem.id}
                        personagem={personagem}
                        isFavorited={false}
                        onToggleFavorite={() => { }}
                    />
                ))
            ) : (
                <p>Nenhum personagem encontrado.</p>
            )}
        </ConteudoEstilo>
    );
};
