import "./AddBlockchain.css";
import { Container , Row , Col } from "react-bootstrap";
import Input from "../../components/Common/Input";
import { Link } from "react-router-dom";

const AddBlockchain = () =>{
    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <Row>
                        <Col lg={9} >
                            <div className="add_blockchain">
                                <div className="card">
                                    <div className="add_block_header">
                                        <h5>Add NFTs to Blockchain</h5>
                                        <hr />
                                    </div>
                                    <div className="add_block_form">
                                        <Row>
                                            <Col lg={6} >
                                                <Row>
                                                    <Col lg={8} >
                                                        <Input 
                                                            label= "Collection name"
                                                            type= "text"
                                                            placeholder= "Enter layer name"
                                                            className= "generate_contract"
                                                        />
                                                    </Col>
                                                    <Col lg={4} >
                                                        <Input 
                                                            label= "Symbol"
                                                            type= "text"
                                                            placeholder= "Symbol"
                                                            className= "generate_contract"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={6} >
                                                <Row>
                                                    <Col lg={8} >
                                                        <Input 
                                                            label= "Minting Fee"
                                                            type= "text"
                                                            placeholder= "Enter minting fee"
                                                            className= "generate_contract"
                                                        />
                                                    </Col>
                                                    <Col lg={4} >
                                                        <Input 
                                                            label= "Symbol"
                                                            type= "text"
                                                            placeholder= "ETH"
                                                            className= "generate_contract"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={6} >
                                                <Input 
                                                    label= "Max mints per person"
                                                    type= "text"
                                                    placeholder= "Enter max minti per person"
                                                    className= "generate_contract"
                                                />
                                            </Col>
                                            <Col lg={6} >
                                                <Input 
                                                    label= "Royalty (%)"
                                                    type= "text"
                                                    placeholder= "Enter royalty"
                                                    className= "generate_contract"
                                                />
                                            </Col>
                                            <Col lg={6} >
                                                <Input 
                                                    label= "Royalty (%)"
                                                    type= "text"
                                                    placeholder= "Enter royalty"
                                                    className= "generate_contract"
                                                />
                                            </Col>
                                            <Col lg={6} >
                                                <div className="custom_radio" >
                                                    <label>Delayed Reveal</label>
                                                    <div className="custom_radio_section" >
                                                        <div>
                                                            <input type="radio" id="rdo1" checked className="radio-input" name="radio-group" />
                                                            <label htmlFor="rdo1" className="radio-label" > 
                                                                <span className="radio-border"></span> Yes 
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="rdo2" checked className="radio-input" name="radio-group" />
                                                            <label htmlFor="rdo2" className="radio-label" > 
                                                                <span className="radio-border"></span> No 
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} >
                                                <div className="custom_radio" >
                                                    <label>Mint allocation</label>
                                                    <div className="custom_radio_section" >
                                                        <div>
                                                            <input type="radio" id="rdo3" checked className="radio-input" name="mint-allo" />
                                                            <label htmlFor="rdo3" className="radio-label" > 
                                                                <span className="radio-border"></span> Sequential (lower gas)
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="rdo4" checked className="radio-input" name="mint-allo" />
                                                            <label htmlFor="rdo4" className="radio-label" > 
                                                                <span className="radio-border"></span> Random 
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} >
                                                <div className="custom_radio" >
                                                    <label>Who can mint</label>
                                                    <div className="custom_radio_section" >
                                                        <div>
                                                            <input type="radio" id="rdo5" checked className="radio-input" name="mint" />
                                                            <label htmlFor="rdo5" className="radio-label" > 
                                                                <span className="radio-border"></span> Sequential (lower gas)
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="rdo6" checked className="radio-input" name="mint" />
                                                            <label htmlFor="rdo6" className="radio-label" > 
                                                                <span className="radio-border"></span> Random 
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="add_block_header add_block_footer">
                                        <hr />
                                        <Link to="/mint" >Mint & Generate contract</Link>
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

export default AddBlockchain;