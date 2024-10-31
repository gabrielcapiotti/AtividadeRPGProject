import { useState, useEffect, useCallback } from "react";
import { Modal, Button, Tooltip, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../store/slices/ThemeSlices";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { BotaoModal, Botoes, CabecalhoEstilo, ModalEstilo, ModalVariants } from "./NavListEstilizacao";
import { useTheme } from "@mui/material/styles";

export function BarraNavegacao() {
    const theme = useTheme();
    const currentThemeMode = useSelector((state: RootState) => state.theme.theme);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [canGoForward, setCanGoForward] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const checkCanGoForward = useCallback(() => {
        setCanGoForward(window.history.state?.idx < window.history.length - 1);
    }, []);

    useEffect(() => {
        checkCanGoForward();
        window.addEventListener("popstate", checkCanGoForward);
        return () => window.removeEventListener("popstate", checkCanGoForward);
    }, [checkCanGoForward]);



    return (
        <CabecalhoEstilo>
            <Toolbar>
                <IconButton onClick={() => navigate(-1)} sx={{ mr: 2, color: theme.palette.primary.dark }}>
                    <ArrowBackIcon />
                </IconButton>

                <IconButton
                    onClick={() => navigate(1)}
                    disabled={!canGoForward}
                    sx={{ mr: 2, color: theme.palette.text.primary }}
                >
                    <ArrowForwardIcon />
                </IconButton>

                <IconButton onClick={() => navigate("/")} sx={{ mr: 2, color: theme.palette.text.primary }}>
                    <HomeIcon />
                </IconButton>
            </Toolbar>

            <Button
                style={{ color: theme.palette.text.primary }}
                onClick={handleOpen}
            >
                Páginas
            </Button>

            <Modal
                open={openModal}
                onClose={handleClose}
                BackdropProps={{ timeout: 300 }}
                closeAfterTransition
            >
                <ModalEstilo initial="hidden" animate="visible" exit="exit" variants={ModalVariants}>
                    <Typography variant="h2">Selecione uma Página</Typography>
                    {Botoes.map((botao, index) => (
                        <BotaoModal
                            key={index}
                            cor={botao.cor}
                            onClick={() => {
                                navigate(botao.rota);
                                handleClose();
                            }}
                        >
                            {botao.nome}
                        </BotaoModal>
                    ))}
                    <Button
                        variant="contained"
                        onClick={handleClose}
                        fullWidth
                    >
                        Fechar
                    </Button>
                </ModalEstilo>
            </Modal>

            <Tooltip title="Alternar Tema">
                <IconButton size="large" color="inherit" onClick={handleToggleTheme} sx={{ ml: 2 }}>
                    {currentThemeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
            </Tooltip>
        </CabecalhoEstilo>
    );
}
