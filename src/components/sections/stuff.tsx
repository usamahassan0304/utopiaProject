import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
    StuffHeadingStyle,
    StuffContentStyle,
    StuffContentListStyle,
    StuffSideContentHeadingStyle,
    StuffHeadingImageStyle,
    StuffButtonsStyle1,
    StuffButtonsStyle2,
    SerumButtonStyle,
    VirusButtonStyle,
    QueueButtonStyle,
    StuffListImageStyle1,
    StuffListImageStyle2,
    StuffListImageStyle3,
    SerumButtonImageStyle,
    VirusButtonImageStyle,
    QueueButtonImageStyle,
    FirstSideImageStyle,
    SecondSideImageStyle,
    ThirdSideImageStyle
} from "../styles/stuffSectionStyle";



const Stuff: React.FC = () => {
    return (
        <>
            <StuffHeadingStyle>
                <Container>
                    <p>Science & Stuff</p>
                </Container>
            </StuffHeadingStyle>

            <StuffContentStyle>
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <FirstSideImageStyle />
                        </Col>
                        <Col lg={6}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Voluptatibus perspiciatis vero at sequi, repellat magni atque nam cumque dolorum hic rem magnam officia quae nisi! Quos voluptates impedit non beatae.</p>
                            <StuffButtonsStyle1>
                                <SerumButtonStyle>
                                    <SerumButtonImageStyle /> Serum Released
                                </SerumButtonStyle>

                                <VirusButtonStyle >
                                    <VirusButtonImageStyle /> Virus isolated
                                </VirusButtonStyle>
                            </StuffButtonsStyle1>

                            <StuffButtonsStyle2>
                                <QueueButtonStyle>
                                    <QueueButtonImageStyle /> metabears in queue
                                </QueueButtonStyle>
                            </StuffButtonsStyle2>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <SecondSideImageStyle />
                        </Col>
                        <Col lg={6}>
                            <StuffSideContentHeadingStyle>
                                bear labs serum <StuffHeadingImageStyle />
                            </StuffSideContentHeadingStyle>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Voluptatibus perspiciatis vero at sequi, repellat magni atque nam cumque dolorum hic rem magnam officia quae nisi! Quos voluptates impedit non beatae.</p>

                            <StuffContentListStyle>
                                <p>
                                    <StuffListImageStyle1 />Mintable Exclusively by bad Bears Holder<br />
                                    <StuffListImageStyle2 />Produces a Bad Cub when consumed
                                </p>
                            </StuffContentListStyle>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <ThirdSideImageStyle />
                        </Col>
                        <Col lg={6}>
                            <StuffSideContentHeadingStyle>
                                bear labs serum
                            </StuffSideContentHeadingStyle>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Voluptatibus perspiciatis vero at sequi, repellat
                                magni atque nam cumque dolorum hic rem magnam officia quae nisi! Quos
                                voluptates impedit non beatae.
                            </p>

                            <StuffContentListStyle>
                                <p>
                                    <StuffListImageStyle2 />Passive yield paid in $MSK (100 per day)<br />
                                    <StuffListImageStyle1 />Exclusive access to Bear Labs drops<br />
                                    <StuffListImageStyle3 />Full commercial Rights (CCO)
                                </p>
                            </StuffContentListStyle>
                        </Col>
                    </Row>
                </Container>
            </StuffContentStyle>
        </>
    )
}

export default Stuff