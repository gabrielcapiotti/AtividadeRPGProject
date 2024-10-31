import React from "react";
import { Card, CardMedia, IconButton, Typography, useTheme } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { adicionarFavorito, removerFavorito, removerPersonagem, Personagem } from "../../store/slices/PersonagensSlice";
import { CardContentEstilizado, CardEstiloContainer, BotoesContainer, Botao } from "./CartaoEstilo";

interface PersonagemCartaoProps {
    personagem: Personagem;
}

export const CartaoPersonagem: React.FC<PersonagemCartaoProps> = ({ personagem }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const favoritos = useSelector((state: RootState) => state.personagens.favoritos);

    const isFavorited = favoritos.some((fav) => fav.id === personagem.id);

    const handleToggleFavorite = () => {
        if (isFavorited) {
            dispatch(removerFavorito(personagem.id));
        } else {
            dispatch(adicionarFavorito(personagem));
        }
    };

    const handleDelete = () => {
        dispatch(removerPersonagem(personagem.id));
    };

    return (
        <CardEstiloContainer>
            <Card
                sx={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                        color: theme.palette.error.main,
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 2,
                    }}
                    onClick={handleDelete}
                >
                    <DeleteIcon />
                </IconButton>

                <CardMedia
                    component="img"
                    height="300px"
                    image={personagem.avatar || 'https://via.placeholder.com/140'}
                    alt={personagem.nome}
                    sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />

                <CardContentEstilizado>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        <i><b>{personagem.nome}</b></i>
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        <i><b>Kanji:</b></i>{personagem.kanji}
                    </Typography>
                    <Typography variant="body2">
                        <i><b>Posição:</b></i> {personagem.description}
                    </Typography>

                    <BotoesContainer>
                        <Botao
                            onClick={handleToggleFavorite}
                            sx={{
                                color: isFavorited
                                    ? theme.palette.primary.light
                                    : theme.palette.primary.light,
                                '&:hover': {
                                    color: isFavorited
                                        ? theme.palette.primary.dark
                                        : theme.palette.primary.dark,
                                },
                            }}
                        >
                            {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </Botao>
                    </BotoesContainer>
                </CardContentEstilizado>
            </Card>
        </CardEstiloContainer>
    );
};
