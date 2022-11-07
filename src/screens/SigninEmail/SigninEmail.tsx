import { Col, Container, Row } from "react-bootstrap";
import "./SigninEmail.css";
import Input from "../../components/Common/Input";
import { Link } from "react-router-dom";
const SigninEmail = () =>{
    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <Row className="justify-content-center" >
                        <Col xl={5} >
                            <div className="signin">
                                <div className="card">
                                    <div className="connectwallet_header">
                                        <h5>Complete registration</h5>
                                        <p>Enter email to get instant access</p>
                                    </div>
                                    <hr />
                                    <div className="add_block_form">
                                        <Input 
                                            label= "Email"
                                            type= "text"
                                            placeholder= "Enter youe email address"
                                            className= "generate_contract"
                                        />
                                    </div>
                                    <Link className="orange_btn"  to="/createproject">Start now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SigninEmail;