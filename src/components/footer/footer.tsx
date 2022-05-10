import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import CommonButton from '../../common/button'
import { FooterImageStyle, FooterButton, OpenseaIcon,  FooterLogo, FooterStyle, LowerFooter, FooterText } from '../styles/footerStyle'

const Footer: React.FC = () => {
    return (
        <>
            <FooterStyle>
                <FooterImageStyle />

                <LowerFooter>
                    <Container>
                        <Row>
                            <Col lg={6} className="text-center text-lg-start">
                                <FooterLogo />
                            </Col>

                            <Col lg={6} className='text-center text-lg-start'>
                                <FooterText>
                                    <h4>
                                        you're Early.<br />
                                        <span>#BB4L</span>
                                    </h4>

                                    <h6>Join the Discord and buy a Bad Bear.</h6>
                                    <CommonButton />
                                    <FooterButton className='ms-3'>
                                        <OpenseaIcon /> Opensea
                                    </FooterButton>
                                </FooterText>
                                
                            </Col>
                          
                                
                            
                        </Row>


                    </Container>
                </LowerFooter>
            </FooterStyle>
        </>
    )
}

export default Footer