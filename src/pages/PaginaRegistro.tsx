import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adicionarPersonagem, Personagem } from '../store/slices/PersonagensSlice';
import { Button, TextField, Typography, Box, Alert } from '@mui/material';
import styled from 'styled-components';

// Contêiner principal para manter o layout consistente
const RegistroContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;
`;

const FormContainer = styled.div`
    background-color: #2a2a2a;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 400px;
`;

const CustomFileInput = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4d4d4d;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;
    margin-right: 10px;
    height: 40px;

    &:hover {
        background-color: #3a3a3a;
    }

    input {
        display: none;
    }
`;

const CustomButton = styled(Button)`
    margin-top: 20px;
    background-color: #4d1010;

    &:hover {
        background-color: #700000;
    }
`;

const AvatarPreview = styled.img`
    margin-top: 10px;
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 5px;
`;

export function PaginaRegistroBleach() {
    const [nome, setNome] = useState<string>('');
    const [kanji, setKanji] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isFormValid = () => nome && kanji && description && avatar;

    const limparFormulario = () => {
        setNome('');
        setKanji('');
        setAvatar('');
        setDescription('');
    };

    const extractSobrenome = (nomeCompleto: string): string => {
        const partes = nomeCompleto.trim().split(' ');
        return partes.length > 1 ? partes[partes.length - 1] : partes[0];
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!isFormValid()) {
            setErrorMessage(true);
            return;
        }

        const sobrenome = extractSobrenome(nome);

        const novoPersonagem: Personagem = {
            id: Date.now(),
            nome,
            sobrenome,
            kanji,
            avatar,
            description,
        };

        dispatch(adicionarPersonagem(novoPersonagem));
        limparFormulario();
        setSuccessMessage(true);

        navigate(`/familia/${sobrenome.toLowerCase()}`);

        setTimeout(() => setSuccessMessage(false), 3000);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => setAvatar(reader.result as string);
            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecione um arquivo de imagem válido.');
        }
    };

    return (
        <RegistroContainer>
            <FormContainer>
                <Typography variant="h4" align="center" gutterBottom color="white">
                    Registro de Personagem
                </Typography>

                {successMessage && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        Personagem registrado com sucesso!
                    </Alert>
                )}

                {errorMessage && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        Por favor, preencha todos os campos corretamente.
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Nome Completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        margin="normal"
                        required
                        style={{ backgroundColor: "#838383" }}
                    />
                    <TextField
                        fullWidth
                        label="Kanji"
                        value={kanji}
                        onChange={(e) => setKanji(e.target.value)}
                        margin="normal"
                        required
                        style={{ backgroundColor: "#838383" }}
                    />
                    <TextField
                        fullWidth
                        label="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="normal"
                        required
                        style={{ backgroundColor: "#838383" }}
                    />

                    <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                        <CustomFileInput>
                            Selecionar Imagem de Avatar
                            <input type="file" accept="image/*" onChange={handleFileChange} />
                        </CustomFileInput>

                        <CustomButton variant="contained" type="submit">
                            Registrar Personagem
                        </CustomButton>
                    </Box>

                    {avatar && <AvatarPreview src={avatar} alt="Avatar Preview" />}
                </form>
            </FormContainer>
        </RegistroContainer>
    );
}
