import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
`

const icones = [perfil,sacola]

function IconesHeader() {
    return (
        <IconesContainer>
          { icones.map((icones) => (
            <Icone><img src={icones}></img></Icone>
          ))}
        </IconesContainer>
    )
}

export default IconesHeader