import styled from 'styled-components'
import Header from '../Header/Header'

export default function App() {
  return (
    <CommonWrapper>
      <Header />
    </CommonWrapper>
  )
}

const CommonWrapper = styled.div`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
`
