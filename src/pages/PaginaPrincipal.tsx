import { useState, useEffect, useCallback } from "react";
import { Modal, Typography, IconButton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack, ArrowForward, Home } from "@mui/icons-material";
import { BotaoModal, Botoes, CabecalhoEstilo, ModalEstilo } from "../components/NavegacaoConteudo/NavBaseEstilo";
import { BaseEstilo, ConteudoBase } from "../components/PaginaConteudo/ConteudoBaseEstilo";


export function PaginaPrincipal() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [canGoForward, setCanGoForward] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const checkCanGoForward = useCallback(() => {
        setCanGoForward(window.history.state?.idx < window.history.length - 1);
    }, []);

    useEffect(() => {
        checkCanGoForward();
        window.addEventListener("popstate", checkCanGoForward);
        return () => window.removeEventListener("popstate", checkCanGoForward);
    }, [checkCanGoForward]);

    const handleNavigate = (rota: string) => {
        navigate(rota);
        handleClose();
    };


    return (
        <>
            <CabecalhoEstilo>
                <IconButton onClick={() => navigate(-1)} sx={{ color: "white" }}>
                    <ArrowBack />
                </IconButton>
                <IconButton
                    onClick={() => navigate(1)}
                    disabled={!canGoForward}
                    sx={{ color: "white" }}
                >
                    <ArrowForward />
                </IconButton>
                <IconButton onClick={() => navigate("/")} sx={{ color: "white" }}>
                    <Home />
                </IconButton>
                <Button onClick={handleOpen} style={{ color: "white", marginLeft: "auto" }}>
                    Páginas
                </Button>
            </CabecalhoEstilo>

            <Modal open={openModal} onClose={handleClose}>
                <ModalEstilo>
                    <Typography variant="h6" color="white" gutterBottom>
                        Navegar para:
                    </Typography>
                    {Botoes.map((botao, index) => (
                        <BotaoModal
                            key={index}
                            onClick={() => handleNavigate(botao.rota)}
                        >
                            {botao.nome}
                        </BotaoModal>
                    ))}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                        fullWidth
                    >
                        Fechar
                    </Button>
                </ModalEstilo>
            </Modal>
            <BaseEstilo>
                <ConteudoBase />
            </BaseEstilo>
        </>
    );
}
