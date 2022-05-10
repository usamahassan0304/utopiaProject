import React from 'react';
import { Container } from 'react-bootstrap';
import { RoadmapContentStyle, RoadmapHeadingStyle, RoadmapStyle, ListImageStyle } from '../styles/roadmapStyle'

const Roadmap: React.FC = () => {
    return (
        <>
            <RoadmapStyle>
                <Container>
                    <RoadmapHeadingStyle>
                        <p>Roadmap</p>
                    </RoadmapHeadingStyle>

                    <RoadmapContentStyle>
                        <h1>Q1 Genesis</h1>
                        <ul>
                            <li><span><ListImageStyle /></span>$MSK Token Launch</li>
                            <li><span><ListImageStyle /></span>5,555 Genesis Bad Bears Released + Bad Bears Platform</li>
                            <li><span><ListImageStyle /></span>DAO Treasury Vote</li>
                            <li><span><ListImageStyle /></span>Passive Yield Claim : Bad Bear Rewards Paid in $MSK</li>
                            <li><span><ListImageStyle /></span>Bad Cub Serum Drop</li>
                            <li><span><ListImageStyle /></span>Bad Cub Reveal</li>
                            <li><span><ListImageStyle /></span>NFTworlds Metaverse Land Purchase</li>
                        </ul>
                    </RoadmapContentStyle>

                    <RoadmapContentStyle>
                        <h1>Q2 Evolution</h1>
                        <ul>
                        <li><span><ListImageStyle /></span>$MSK Token Launch</li>
                            <li><span><ListImageStyle /></span>5,555 Genesis Bad Bears Released + Bad Bears Platform</li>
                            <li><span><ListImageStyle /></span>DAO Treasury Vote</li>
                            <li><span><ListImageStyle /></span>Passive Yield Claim : Bad Bear Rewards Paid in $MSK</li>
                            <li><span><ListImageStyle /></span>Bad Cub Serum Drop</li>
                            <li><span><ListImageStyle /></span>Bad Cub Reveal</li>
                            <li><span><ListImageStyle /></span>NFTworlds Metaverse Land Purchase</li>
                        </ul>
                    </RoadmapContentStyle>

                    <RoadmapContentStyle>
                        <h1>Q3 Take Over</h1>
                        <ul>
                        <li><span><ListImageStyle /></span>$MSK Token Launch</li>
                            <li><span><ListImageStyle /></span>5,555 Genesis Bad Bears Released + Bad Bears Platform</li>
                            <li><span><ListImageStyle /></span>DAO Treasury Vote</li>
                            <li><span><ListImageStyle /></span>Passive Yield Claim : Bad Bear Rewards Paid in $MSK</li>
                            <li><span><ListImageStyle /></span>Bad Cub Serum Drop</li>
                            <li><span><ListImageStyle /></span>Bad Cub Reveal</li>
                            <li><span><ListImageStyle /></span>NFTworlds Metaverse Land Purchase</li>
                        </ul>
                    </RoadmapContentStyle>
                </Container>
            </RoadmapStyle>
        </>
    )
}

export default Roadmap