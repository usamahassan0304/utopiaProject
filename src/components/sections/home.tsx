import React from 'react'
import { Container } from 'react-bootstrap';
import CommonButton from '../../common/button';
import { Header, HeaderText, StyledHome } from "../styles/homeStyle";


const Home: React.FC = () => {
    return (
        <>
            <StyledHome>
                    <Header />
                <HeaderText>
                    <Container>
                        <h3>5,555 Bad Bears Genesis NFTs</h3>
                        <h3>4,444 Serums/Bad Cubs</h3>
                        <h3>6700 + Twitter | 8000 + Discord</h3>
                        <h3>14500 + Instagram</h3>
                        <h3>Daily Passive Yield of $MSK</h3>
                        <CommonButton />
                    </Container>
                </HeaderText>
            </StyledHome>
        </>
    )
}

export default Home