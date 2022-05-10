import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LogoStyle, StyledTopbar, DashboardButton, DiscordIconStyle, TwitterIconStyle, OpenseaIconStyle } from '../styles/topbarStyle'


const Topbar = () => {
    return (
        <>
                <Navbar expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand><LogoStyle /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="ms-auto text-sm-center">
                                <Nav.Link><DiscordIconStyle /></Nav.Link>
                                <Nav.Link><TwitterIconStyle /></Nav.Link>
                                <Nav.Link><OpenseaIconStyle /></Nav.Link>
                                <Nav.Link><DashboardButton>Dashboard</DashboardButton></Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </>
    )
}

export default Topbar