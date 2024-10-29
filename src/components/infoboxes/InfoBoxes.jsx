import React from 'react'
import TextBanner from '../textbanner/TextBanner'
import styled from 'styled-components'
import { Card, CardContent, CardTitle, Description, Button } from '../styles/styled.Card'


const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`

const InfoBoxes = () => {
  return (
    <div>
      <TextBanner title={'What we provid'} subtitle={'Our Services'}/>
      <Container>
        <Card>
            <CardContent padding={'5%'}>
                <CardTitle>Training Courses</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!
                </Description>
                <Button>Read More...</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent padding={'5%'}>
                <CardTitle>Services Desk</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!
                </Description>
                <Button href='#'> Read More...</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent padding={'5%'}>
                <CardTitle>Data Recovery</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!
                </Description>
                <Button href='#'>Read More...</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent padding={'5%'}>
                <CardTitle>Proactive Services</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!
                </Description>
                <Button href='#'>Read More...</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent padding={'5%'}>
                <CardTitle>User Support</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!
                </Description>
                <Button href='#'>Read More...</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent padding={'5%'}>
                <CardTitle>23/10 Services</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!
                </Description>
                <Button href='#'>Read More...</Button>
            </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default InfoBoxes
