import styled from 'styled-components'
import Image from 'next/image'
import { ContestantType } from 'src/types'

const ContestantWrapper = styled.div<{ eliminated: boolean }>`
  width: 250px;
  height: 310px;
  border: 1px solid maroon;
  margin: 5px;
  background-color: ${props => (props.eliminated ? 'grey' : 'lightblue')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  img {
    border-radius: 50%;
    margin: 0 auto;
    filter: ${props => (props.eliminated ? 'grayscale(100%)' : 'none')};
  }
`

const Name = styled.p`
  margin: 5px 0;
  text-align: center;
  font-size: 18px;
`

const P = styled.p`
  margin: 2px 0;
  text-align: center;
  font-size: 14px;
`

const Contestant = ({ contestant }: { contestant: ContestantType }) => {
  return (
    <ContestantWrapper eliminated={!!contestant.axedEpisode}>
      <Image src={`/assets/men/${contestant.image}`} alt={contestant.name} height="180px" width="180px" />
      <Name>
        {contestant.name}
        ,
        {' '}
        {contestant.age}
      </Name>
      {/* <P>{contestant.age}</P> */}
      <P>{contestant.job}</P>
      <P>{contestant.hometown}</P>
      {
        contestant.firstImpressionRose && (
          <P>🌹</P>
        )
      }

    </ContestantWrapper>
  )
}

export default Contestant
