import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FeatureHeadingStyle, FeatureContentStyle, FeatureTopImage1, FeatureTopImage2, FeatureTopImage3 } from '../styles/featureSectionStyle'

const Features: React.FC = () => {
    return (
        <>
            <FeatureHeadingStyle>
                <Container>
                    <p>Token Features</p>
                </Container>
            </FeatureHeadingStyle>

            <FeatureContentStyle>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <FeatureTopImage1 />
                            <h2 className='mt-4'>Fixed Supply</h2>
                            <p>
                                There is a fixed supply of 1,000,000,000 (1-billion)
                                MSK tokens. No new MSK tokens will ever be created.
                            </p>
                        </Col>

                        <Col lg={4}>
                            <FeatureTopImage2 />
                            <h2 className='mt-4'>Staking Rewards</h2>
                            <p>
                                There is a fixed supply of 1,000,000,000 (1-billion)
                                MSK tokens. No new MSK tokens will ever be created.
                            </p>
                        </Col>

                        <Col lg={4}>
                            <FeatureTopImage3 />
                            <h2 className='mt-4'>Organic Deflation</h2>
                            <p>
                                There is a fixed supply of 1,000,000,000 (1-billion)
                                MSK tokens. No new MSK tokens will ever be created.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </FeatureContentStyle>

        </>
    )
}

export default Features