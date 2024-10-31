// LightTheme.ts
import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6f2b9f',
            contrastText: '#ffffff',
            light: '#9256c1',
            dark: '#31084d',
        },
        secondary: {
            main: '#ffcc80',
            contrastText: '#000000',
            light: '#ffe0b2',
            dark: '#ffffff',
        },
        background: {
            default: '#6f2b9f', // Fundo principal claro
            paper: '#ffffff', // Fundo de cartões e papéis
        },
        text: {
            primary: '#000000', // Texto principal escuro
            secondary: '#666666', // Texto secundário cinza
            disabled: '#9e9e9e', // Texto desabilitado
        },
        action: {
            active: '#6f2b9f', // Cor de itens ativos
            hover: 'rgba(111, 43, 159, 0.1)', // Hover leve
            selected: 'rgba(111, 43, 159, 0.2)', // Seleção leve
            disabled: 'rgba(0, 0, 0, 0.26)', // Itens desabilitados
            disabledBackground: 'rgba(0, 0, 0, 0.12)', // Fundo desabilitado
            focus: 'rgba(111, 43, 159, 0.2)', // Cor ao focar
        },
        error: {
            main: '#f44336',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#ffa726',
            contrastText: '#000000',
        },
        info: {
            main: '#29b6f6',
            contrastText: '#000000',
        },
        success: {
            main: '#66bb6a',
            contrastText: '#000000',
        },
        divider: 'rgba(0, 0, 0, 0.12)', // Cor dos divisores
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        h1: { fontSize: '2rem', fontWeight: 700 },
        h2: { fontSize: '1.75rem', fontWeight: 700 },
        h3: { fontSize: '1.5rem', fontWeight: 600 },
        h4: { fontSize: '1.25rem', fontWeight: 600 },
        h5: { fontSize: '1rem', fontWeight: 500 },
        h6: { fontSize: '0.875rem', fontWeight: 500 },
        body1: { fontSize: '1rem' },
        body2: { fontSize: '0.875rem' },
        button: { textTransform: 'none' },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '10px 20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#9256c1', // Hover para botões
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
});
