import React from 'react'
import styled from 'styled-components'
import avatarImage1 from "../../img/staff1.jpg";
import avatarImage2 from "../../img/staff2.jpg";
import avatarImage3 from "../../img/staff3.jpg";
import avatarImage4 from "../../img/staff4.jpg";
import TextBanner from '../textbanner/TextBanner'



const Container = styled.div`
  padding: 5%;
`

const Wrapper = styled.div` 
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  margin: 1%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
`

const CardImgae = styled.img`
  height: 100%;
  width: 100%;  
  object-fit: cover;
  &:hover{
    cursor: pointer;
    opacity: 0.5;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MemberName = styled.div`
  color: ${(props) => props.theme.colors.primary};
`

const TeamPosition = styled.div`
  color: ${(props) => props.theme.colors.textDark};
`

const Teams = () => {
  return (
    <Container>
      <TextBanner title={'Wir union'} subtitle={'Our team'} />
      <Wrapper>
      <Card>
        <CardImgae src={avatarImage1}/>
        <TextWrapper>
          <MemberName>Joao</MemberName>
          <TeamPosition>Postion</TeamPosition>
        </TextWrapper>
      </Card>
      <Card>
        <CardImgae src={avatarImage2}/>
        <TextWrapper>
          <MemberName>Zika</MemberName>
          <TeamPosition>Postion</TeamPosition>
        </TextWrapper>
      </Card>
      <Card>
        <CardImgae src={avatarImage3}/>
        <TextWrapper>
          <MemberName>Shura</MemberName>
          <TeamPosition>Postion</TeamPosition>
        </TextWrapper>
      </Card>
      <Card>
        <CardImgae src={avatarImage4}/>
        <TextWrapper>
          <MemberName>Saga</MemberName>
          <TeamPosition>Postion</TeamPosition>
        </TextWrapper>
      </Card>
      </Wrapper>
    </Container>
  )
}

export default Teams
