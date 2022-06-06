import styled from 'styled-components'
import logo from '../../images/logo.jpg'

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <LogoWrapper href="/">
          <Logo src={logo} />
          <NameWrapper>
            <Name>Heorhii</Name>
            <Surname>Aksiuk</Surname>
          </NameWrapper>
        </LogoWrapper>
        <Navigation>
          <NavigationList>
            <NavigationItem>
              <NavigationLink>Home</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>Bio</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>Blog</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>Contacts</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </Navigation>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 80px;
  background-color: ${(props) => props.theme.colors.black};
  box-shadow: rgb(20 20 20 / 30%) 1px 1px 20px;
`

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const LogoWrapper = styled.a`
  display: flex;
  width: fit-content;
  color: ${(props) => props.theme.colors.white};
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.3);
  }
`

const Logo = styled.img`
  height: 75px;
  width: 75px;
  display: block;
  border-radius: 50%;
  box-shadow: rgb(20 20 20 / 30%) 1px 1px 20px;
`
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
  font-weight: 700;
`
const Name = styled.span`
  letter-spacing: -1px;
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.orange};
  }
`

const Surname = styled.span`
  letter-spacing: 1px;
  margin-top: -15px;
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.orange};
  }
`
const Navigation = styled.nav``

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`
const NavigationItem = styled.li`
  :not(:last-child) {
    margin-right: 50px;
  }
`
const NavigationLink = styled.a`
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.orange};
  }
`
