import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#390808',
            contrastText: '#6d6d6d',
            light: '#6b1a1a',
            dark: '#270202',
        },
        secondary: {
            main: '#9e9e9e',
            contrastText: '#ffffff',
            light: '#bdbdbd',
            dark: '#6c6c6c',
        },
        background: {
            default: '#820000',
            paper: '#1d1d1d',
        },
        text: {
            primary: '#ffffff', // Cor principal do texto
            secondary: '#b0b0b0', // Cor secundária do texto
            disabled: '#000000', // Cor para textos desabilitados
        },
        action: {
            active: '#ffffff', // Cor de itens ativos
            hover: 'rgba(255, 255, 255, 0.08)', // Cor de hover
            selected: 'rgba(255, 255, 255, 0.16)', // Cor de itens selecionados
            disabled: 'rgba(255, 255, 255, 0.3)', // Cor para itens desabilitados
            disabledBackground: 'rgba(255, 255, 255, 0.12)', // Fundo de itens desabilitados
            focus: 'rgba(255, 255, 255, 0.12)', // Cor ao focar
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
        divider: 'rgba(255, 255, 255, 0.12)', // Cor de divisores
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
                    borderRadius: '8px', // Adiciona bordas arredondadas
                    padding: '10px 20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#6b1a1a',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1d1d1d',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                },
            },
        },
    },
});

export default DarkTheme;
