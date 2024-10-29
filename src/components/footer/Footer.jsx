import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  background-color: black;
  width: 100%;
  margin-top: 5%;
  height: 40%;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 2%;
`;

const Description = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const MenuItems = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
`;

const CopyRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    background-color: gray;
    color: white;
    font-size: 20px;
`

const Footer = () => {
  return (
    <>
    <Container>
      <Description>
        <Title>About Us</Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae illo,
        officia dolores ab quo ut porro commodi. Recusandae possimus autem
        dignissimos neque adipisci. Nihil.
      </Description>
      <MenuItems>
        <Menu>
          <Title>Our Services</Title>
          <MenuItem href="#">Training Courses</MenuItem>
          <MenuItem href="#">Services Desk</MenuItem>
          <MenuItem href="#">Proative Services</MenuItem>
          <MenuItem href="#">User Support</MenuItem>
          <MenuItem href="#">28/10 Services</MenuItem>
        </Menu>
      </MenuItems>
      <MenuItems>
        <Title>Our Polices</Title>
        <Menu>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem>Data Policy</MenuItem>
        </Menu>
      </MenuItems>
    </Container>

    <CopyRight>&copy;2024  Pedro Freitas, O milior - Todos os direitos reservados.</CopyRight>
    </>
    
  );
};

export default Footer;
