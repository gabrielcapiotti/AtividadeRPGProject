import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definição da interface do personagem com o campo `sobrenome` incluído
export interface Personagem {
    id: number;
    nome: string;
    sobrenome: string;
    avatar: string;
    kanji: string;
    description: string;
}

interface PersonagemState {
    personagens: Personagem[];
    favoritos: Personagem[];
}

const initialState: PersonagemState = {
    personagens: [],
    favoritos: [],
};

const personagemSlice = createSlice({
    name: "personagens",
    initialState,
    reducers: {
        // Adiciona um novo personagem
        adicionarPersonagem: (state, action: PayloadAction<Personagem>) => {
            state.personagens.push(action.payload);
        },
        // Adiciona um personagem aos favoritos
        adicionarFavorito: (state, action: PayloadAction<Personagem>) => {
            // Evitar duplicatas
            const jaFavorito = state.favoritos.some(
                (fav) => fav.id === action.payload.id
            );
            if (!jaFavorito) {
                state.favoritos.push(action.payload);
            }
        },
        // Remove um personagem dos favoritos
        removerFavorito: (state, action: PayloadAction<number>) => {
            state.favoritos = state.favoritos.filter(
                (personagem) => personagem.id !== action.payload
            );
        },
        // Remove um personagem da listagem principal
        removerPersonagem: (state, action: PayloadAction<number>) => {
            state.personagens = state.personagens.filter(
                (personagem) => personagem.id !== action.payload
            );
        },
        // Filtra personagens pelo sobrenome
        filtrarPorSobrenome: (state, action: PayloadAction<string>) => {
            const sobrenome = action.payload.toLowerCase();
            return {
                ...state,
                personagens: state.personagens.filter(
                    (personagem) =>
                        personagem.sobrenome.toLowerCase() === sobrenome
                ),
            };
        },
    },
});

export const {
    adicionarPersonagem,
    adicionarFavorito,
    removerFavorito,
    removerPersonagem,
    filtrarPorSobrenome,
} = personagemSlice.actions;

export default personagemSlice.reducer;
