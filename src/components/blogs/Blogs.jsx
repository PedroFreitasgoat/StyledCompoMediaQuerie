import React from 'react'
import styled from 'styled-components'
import  {Card, Button, CardContent, CardTitle, Description, CardImage } from '../styles/styled.Card'
import cardImage1 from '../../img/card1.jpg';
import cardImage2 from '../../img/card2.jpg';
import cardImage3 from '../../img/card3.png';
import TextBanner from '../textbanner/TextBanner';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Blogs = () => {
  return (
    <>
    <TextBanner title={'Our Blogs'} subtitle={'Recent News'} />
    <Container>
      <Card>
        <CardContent padding={'0.5%%'}>
            <CardImage src={cardImage1}/>
            <CardTitle>Title</CardTitle>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi aliquam repellendus, numquam beatae ea voluptatem culpa officia impedit eum. Dolore, minima?
            </Description>
            <Button>Read more..</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent padding={'0.5%%'}>
            <CardImage src={cardImage2}/>
            <CardTitle>Title</CardTitle>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi aliquam repellendus, numquam beatae ea voluptatem culpa officia impedit eum. Dolore, minima?
            </Description>
            <Button>Read more..</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent padding={'0.5%%'}>
            <CardImage src={cardImage3}/>
            <CardTitle>Title</CardTitle>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi aliquam repellendus, numquam beatae ea voluptatem culpa officia impedit eum. Dolore, minima?
            </Description>
            <Button>Read more..</Button>
        </CardContent>
      </Card>
    </Container>
    </>
  )
}

export default Blogs
