import React from 'react'
import { Container } from '../infoSectionTwo/InfoSectionTwo'
import sectionImage4 from '../../img/bg2.jpg'
import styled from 'styled-components'

const Card = styled.div`
    width: 250px;
`

const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Number = styled.div`
    font-weight: bold;
    font-size: 50px;
    color: ${(props) => props.theme.colors.text};
`

const Subtitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: white;
`

const InfoSectionFour = () => {
  return (
    <Container sectionImage={sectionImage4} Height={"300px"}>
      <Card>
        <CardContent>
            <Number>7M+</Number>
            <Subtitle>Subscribers</Subtitle>
        </CardContent>
        </Card>
      <Card>
        <CardContent>
            <Number>10000+</Number>
            <Subtitle>Complete Projects</Subtitle>
        </CardContent>
        </Card>
      <Card>
        <CardContent>
            <Number>80K+</Number>
            <Subtitle>5 Stars Rating</Subtitle>
        </CardContent>
        </Card>
      <Card>
        <CardContent>
            <Number>10000+</Number>
            <Subtitle>Likes</Subtitle>
        </CardContent>
        </Card>
    </Container>
  )
}

export default InfoSectionFour
