import styled from "styled-components";

export const Titulo = styled.h2`
    margin: 0;
    padding-top: 25px ;
    width: 100vw;
    height: 15vh;
    text-align: ${props => props.alinhamento || 'center'} ;
    background-color: rgb(245, 241, 236);
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte  || '18px;' } 
`