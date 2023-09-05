import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const OpcaoLi = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const OpcoesUl =styled.ul`
    display: flex;
`

function OpcoesHeader() {
    return (
        <OpcoesUl>
            { textoOpcoes.map( (texto) => (
                <OpcaoLi><p>{texto}</p></OpcaoLi>
          ) ) }
        </OpcoesUl>
    )
}

export default OpcoesHeader