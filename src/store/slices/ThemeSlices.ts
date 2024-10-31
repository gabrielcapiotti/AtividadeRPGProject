import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    theme: 'light' | 'dark';

}

const initialTheme = (): ThemeState => {
    if (typeof window !== 'undefined') {
        try {
            const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
            if (storedTheme === 'light' || storedTheme === 'dark') {
                return { theme: storedTheme };
            }

        } catch (error) {
            console.error("Erro ao acessar localStorage:", error);
        }
    }
    return { theme: 'light' };
};

const initialState: ThemeState = initialTheme();

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            if (typeof window !== 'undefined') {
                try {
                    localStorage.setItem('theme', state.theme);
                } catch (error) {
                    console.error("Erro ao salvar tema no localStorage:", error);
                }
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;





