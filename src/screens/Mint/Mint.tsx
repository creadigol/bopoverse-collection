import { Container, Row, Col } from "react-bootstrap";
import "./Mint.css";
import minus from "../../assets/image/minus.svg";
import plus from "../../assets/image/plus.svg";

const Mint = () =>{
    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <Row className="justify-content-center" >
                        <Col lg={5} >
                            <div className="mint_main">
                                <div className="card">
                                    <div className="mint_section">
                                        <h5>BopoVerse<sup>TM</sup> BPVw NFT</h5>
                                        <p>Price : 0.10 ETH</p>
                                        <div className="mint_form">
                                            <button><img src={minus} alt="minus" /></button>
                                            <span>1</span>
                                            <button><img src={plus} alt="plus" /></button>
                                        </div>
                                        <p className="minted" >Minted : 05/10</p>
                                        <hr />
                                        <button className="mint_now" >Mint  now</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Mint;