import React from 'react' /* links de importação */
import styled from 'styled-components'

const Container = styled.div` /*Container poai, lista de navegaçção */
    position: fixed;
    width: 100%;
    height: 10%;
    background-color: ${(props) => props.theme.colors.bgDefault};
    display: flex;
    justify-content: space-between;
    align-items: center;

    // Para celulares
    @media only screen and (min-width: 600px) {
      width: 100%;
      height: 8%;
    }   

    // para tablets ou celulares medios 
    @media only screen and (min-width: 600px) {
      width: 100%;
      height: 5%;
    }   
    
    // para pc e notbook
    @media only screen and (min-width: 992px) {
      width: 100%;
      height: 10%;
    }   

    `

const Logo = styled.h1` /* LOGO, IT SUPPORT */
    font-size: 20px;
    text-decoration: underline;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
`

const Left = styled.div` 
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
`
const Center = styled.div`
  display: flex;
  flex: 2;

  // Para celulares
  @media only screen and (min-width: 600px) {
    display: none;
  }

  // para tablets ou celulares medios
  @media only screen and (min-width: 600px) {
    display: flex;
  }

  // para pc e notbook
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
`
const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  // Para celulares
  @media only screen and (min-width: 600px) {
    font-size: 15px;
    margin-right: 15px;
  }

  // para tablets ou celulares medios
  @media only screen and (min-width: 600px) {
    font-size: 20px;
    margin-right: 30px;
  }

  // para pc e notbook
  @media only screen and (min-width: 992px) {
     font-size: 20px;
     margin-right: 30px;
  }
`;

const Button = styled.button`
    font-weight: bold;
    background-color:  ${(props) => props.theme.colors.primary};
    border: 2px solid white;
    cursor: pointer;
    color:  ${(props) => props.theme.colors.bgDefault};
    padding: 10px 20px;
    border-radius: 10px;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color:  ${(props) => props.theme.colors.bgLight};
        border: 2px solid darkblue;
    }
`

const Navbar = () => {
  return (
    <Container>
      <Left><Logo>IT Support</Logo></Left>
      <Center><Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About us</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Blog</MenuItem>
        </Menu></Center>
      <Right><Button>call us Now!</Button></Right>
    </Container>
  )
}

export default Navbar
