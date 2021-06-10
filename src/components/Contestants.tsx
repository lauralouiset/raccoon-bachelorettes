import styled from 'styled-components'
import Contestant from './Contestant'

import { men } from '../data/men'

const ContestantContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Contestants = () => {
  return (
    <ContestantContainer>
      {
      Object.keys(men).map(man => (
        <Contestant contestant={men[man]} key={men[man].name} />
      ))
    }

    </ContestantContainer>
  )
}

export default Contestants
