import React, { useState, useEffect, useCallback } from "react";
import { Modal, Button, TextField, Typography, Tooltip, IconButton, Badge, Toolbar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../store/slices/ThemeSlices";
import { adicionarFavorito, removerFavorito, Personagem } from "../../store/slices/PersonagensSlice";
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import Rose from '../../assets/rose.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { BotaoArvoreGenealogica, BotaoModal, Botoes, CabecalhoEstilo, IconButtonEstilizado, ModalEstilo, ModalVariants } from "./NavListEstilizacao";

export function ComponentePesquisa({ onSearch }: { onSearch: (termoBusca: string) => void }) {
    const theme = useTheme();
    const favoritos = useSelector((state: RootState) => state.personagens.favoritos);
    const currentThemeMode = useSelector((state: RootState) => state.theme.theme);
    const [termoBusca, setTermoBusca] = useState<string>("");
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [canGoForward, setCanGoForward] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const toggleFavorite = (personagem: Personagem) => {
        const isFavorited = favoritos.some((fav) => fav.id === personagem.id);
        isFavorited
            ? dispatch(removerFavorito(personagem.id))
            : dispatch(adicionarFavorito(personagem));
    };

    const checkCanGoForward = useCallback(() => {
        setCanGoForward(window.history.state?.idx < window.history.length - 1);
    }, []);

    useEffect(() => {
        checkCanGoForward();
        window.addEventListener('popstate', checkCanGoForward);
        return () => window.removeEventListener('popstate', checkCanGoForward);
    }, [checkCanGoForward]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTermoBusca(event.target.value);
        onSearch(event.target.value);
    };

    const handleNavigateSobrenome = (sobrenome: string) => {
        navigate(`/familia/${sobrenome.toLowerCase()}`);
    };

    return (
        <CabecalhoEstilo>
            <Toolbar>
                <IconButtonEstilizado onClick={() => navigate(-1)} sx={{ mr: 2 }}>
                    <ArrowBackIcon />
                </IconButtonEstilizado>

                <IconButtonEstilizado onClick={() => navigate(1)} disabled={!canGoForward} sx={{ mr: 2 }}>
                    <ArrowForwardIcon />
                </IconButtonEstilizado>

                <IconButtonEstilizado onClick={() => navigate('/PaginaPrincipal')} sx={{ mr: 2 }}>
                    <HomeIcon />
                </IconButtonEstilizado>
            </Toolbar>

            <TextField
                placeholder="Buscar..."
                value={termoBusca}
                onChange={handleSearchChange}
                variant="outlined"
                size="small"
                style={{ backgroundColor: "white", width: "90%", marginRight: "5%" }}
            />

            <Tooltip title="Ver personagens favoritados">
                <IconButton onClick={() => navigate("/favoritos")} sx={{ padding: 2 }}>
                    <Badge
                        badgeContent={favoritos.length}
                        color="error"
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <img src={Rose} alt="Rose" style={{ width: '60px', height: '60px' }} />
                    </Badge>
                </IconButton>
            </Tooltip>

            <BotaoArvoreGenealogica onClick={handleOpen}>
                Árvores Genealógicas
            </BotaoArvoreGenealogica>

            <Modal open={openModal} onClose={handleClose} BackdropProps={{ timeout: 300 }} closeAfterTransition>
                <ModalEstilo initial="hidden" animate="visible" exit="exit" variants={ModalVariants}>
                    <Typography variant="h1"><i>Árvores Familiares</i></Typography>
                    {Botoes.map((botao, index) => (
                        <BotaoModal
                            key={index}
                            cor={botao.cor}
                            onClick={() => handleNavigateSobrenome(botao.nome)}
                            fullWidth
                        >
                            <Typography variant="h4">{botao.nome}</Typography>
                        </BotaoModal>
                    ))}
                    <Button variant="contained" onClick={handleClose} fullWidth>
                        Fechar
                    </Button>
                </ModalEstilo>
            </Modal>


            <Tooltip title="Alternar Tema">
                <IconButton size="large" color="inherit" onClick={handleToggleTheme}>
                    {currentThemeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
            </Tooltip>
        </CabecalhoEstilo>
    );
}
