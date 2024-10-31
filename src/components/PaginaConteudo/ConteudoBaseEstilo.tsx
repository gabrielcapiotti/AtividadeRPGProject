import styled from 'styled-components';
import { Typography } from '@mui/material';
import rose from '../../assets/rose.png';
import Lysandriel from '../../assets/Lysandriel.jpg';
import Codice from '../../assets/Codice.jpg';

// Contêiner principal do layout
export const BaseEstilo = styled.div`
    display: grid;
    gap: 20px;
    height: 100%;
    background-color: #120700;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// Estilo para cada "caixa" de quadrinho
const CaixaQuadrinho = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
    color: white;
    background-color: #0101014f;
`;

// Estiliza uma área maior (equivalente a duas colunas no layout)
const CaixaGrande = styled(CaixaQuadrinho)`
    grid-column: span 2;
`;

// Estilo específico para a imagem
const ImagemEstilo = styled.img`
    height: auto;
    object-fit: contain;
    border-radius: 5px;
    height: 800px;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

// Estilo para tipografia com ajuste de margens e espaçamento
const Tipografia = styled(Typography)`
    text-align: justify;
    margin: 10px 0;
    padding: 0 10px;
    font-style: italic;
`;

export function ConteudoBase() {
    return (
        <BaseEstilo>
            <CaixaGrande>
                <Tipografia style={{ display: "block", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <h1 style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>Bem-vindo!</h1>
                    <h4 style={{ marginRight: "500px", marginLeft: "500px" }}>
                        Essa página é completamente dedicada a fazer parte do meu portifólio
                        e consequentemente também desejo que explorem as funcionalidades
                        dela enquanto absorvem um minimo conteúdo baseado em histórias de
                        fantasia originais minha.
                    </h4>
                </Tipografia>
            </CaixaGrande>
            <CaixaQuadrinho>
                <ImagemEstilo src={Lysandriel} alt="Ichigo" />
                <Tipografia>
                    <h1 style={{ justifyContent: "center", display: "flex" }}>A Grande Matriarca</h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, culpa error vero quisquam delectus nemo, harum
                    explicabo labore dolorem doloribus incidunt nisi magni.
                    Officia asperiores minima ab, eligendi vel temporibus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, culpa error vero quisquam delectus nemo, harum
                    explicabo labore dolorem doloribus incidunt nisi magni.
                    Officia asperiores minima ab, eligendi vel temporibus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, culpa error vero quisquam delectus nemo, harum
                    explicabo labore dolorem doloribus incidunt nisi magni.
                    Officia asperiores minima ab, eligendi vel temporibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique aut excepturi incidunt, unde rem blanditiis
                    itaque dolor quisquam alias assumenda vitae earum tempore.
                    Ea ducimus animi earum perspiciatis tempore dolor.
                </Tipografia>
            </CaixaQuadrinho>

            {/* Segunda Caixa com texto e imagem */}
            <CaixaQuadrinho>
                <Tipografia>
                    <h1 style={{ justifyContent: "center", display: "flex" }}>Familia Venusia</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus, molestias iusto iure sit nemo unde perferendis,
                    itaque facilis voluptatibus qui possimus, nihil ad architecto
                    quis deleniti illum nobis vitae corrupti.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, culpa error vero quisquam delectus nemo, harum
                    explicabo labore dolorem doloribus incidunt nisi magni.
                    Officia asperiores minima ab, eligendi vel temporibus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, culpa error vero quisquam delectus nemo, harum
                    explicabo labore dolorem doloribus incidunt nisi magni.
                    Officia asperiores minima ab, eligendi vel temporibus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, culpa error vero quisquam delectus nemo, harum
                    explicabo labore dolorem doloribus incidunt nisi magni.
                    Officia asperiores minima ab, eligendi vel temporibus.
                </Tipografia>
                <ImagemEstilo src={rose} alt="Rose" style={{ height: "400px" }} />
            </CaixaQuadrinho>

            <CaixaGrande>
                <Tipografia variant="body1">
                    <h1 style={{ justifyContent: "center", display: "flex" }}>O Códice Venusia</h1>

                    <p style={{ textAlign: "justify", marginBottom: "15px", marginRight: "550px", marginLeft: "550px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae quae ullam. Porro, quasi,
                        ipsa eveniet quam necessitatibus accusamus voluptate commodi quod, eos earum consectetur expedita
                        doloribus consequatur voluptatum alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Ratione cum atque veniam placeat alias impedit facilis, eveniet recusandae. Nesciunt repellendus
                        quam velit porro! Eaque quos molestias nihil, illo sapiente facilis. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Modi quasi, eveniet culpa numquam unde mollitia optio. Exercitationem
                        laborum, vitae, ab numquam voluptates at soluta, rem a laboriosam placeat sunt pariatur?
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                        <img
                            src={Codice}
                            alt="Imagem do Códice Venusia"
                            style={{ borderRadius: "10px", height: "500px", width: "auto", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)" }}
                        />
                    </div>
                </Tipografia>
            </CaixaGrande>
        </BaseEstilo>
    );
}
