import "./Header.css";
import { Navbar , Container , Nav } from "react-bootstrap";

const Header = () =>{
    return(
        <>
            <div className="header_main">
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/">Bopoverse</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav>
                                <Nav.Link href="#action1">Home</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;