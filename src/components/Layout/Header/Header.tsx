import "./Header.css";
import { Navbar , Container , Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
            <div className="header_main">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Bopoverse</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav>
                                <Link to="/" className="nav-link" >Home</Link>
                                <Link to="/project" className="nav-link" >Projects</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;