import "./AddBlockchain.css";
import { Container , Row , Col } from "react-bootstrap";
import Input from "../../components/Common/Input";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import metamask from "../../assets/image/metamask.svg";
import wix from "../../assets/image/wix.svg";
const AddBlockchain = () =>{
    const navigate = useNavigate();
    const [collection, setCollection ] = useState("");
    const [symbol, setSymbol ] = useState("");
    const [mintfee, setMintFee ] = useState("");
    const [blockchain, setBlockchain ] = useState("");
    const [maxMintPersion, setMaxMintPersion ] = useState("");
    const [loyalty, setLoyalty ] = useState("");
    const [network, setNetwork ] = useState("");
    const [mintAllocation, setMintAllocation ] = useState("");
    const [whoMint, setWhoMint ] = useState("");
    const [errorObj,setErrorObj] = useState<any>({});
    const generateHandler = async () =>{
        let isValid = true;
        let error = {
            collectionError: '',
            symbolError : '',
            mintfeeError : '',
            blockchainError : '',
            maxMintPersionError : '',
            loyaltyError : '',
            networkError : '',
            mintAllocationError : '',
            whoMintError : '',
        }
        if (collection.trim().length === 0) {
            error = {...error,collectionError:'Enter Valid Collection Name.'};
            isValid = false;
        }
        if (symbol.trim().length === 0) {
            error = {...error,symbolError:'Enter Collection Symbol.'};
            isValid = false;
        }
        setErrorObj(error);
        if (isValid) {
            navigate('/mint');
        }

    }
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
                                                            onChange={(e : any)=>{setCollection(e.target.value); setErrorObj({ ...errorObj, collectionError: '' })}}
                                                            value={collection}
                                                        />
                                                        {errorObj?.collectionError && <p className="error" >{errorObj?.collectionError}</p>}
                                                    </Col>
                                                    <Col lg={4} >
                                                        <Input 
                                                            label= "Symbol"
                                                            type= "text"
                                                            placeholder= "Symbol"
                                                            className= "generate_contract"
                                                            onChange={(e : any)=>{setSymbol(e.target.value); setErrorObj({ ...errorObj, symbolError: '' })}}
                                                            value={symbol}
                                                        />
                                                        {errorObj?.symbolError && <p className="error" >{errorObj?.symbolError}</p>}
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
                                                            onChange={(e : any) =>{setMintFee(e.target.value)}}
                                                            value={mintfee}
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
                                                    label= "Change Network"
                                                    type= "text"
                                                    placeholder= "Select Network"
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
                                        {/* <Link to="/mint" >Mint & Generate contract</Link> */}
                                        <button onClick={generateHandler} className="orange_btn" ><img src={metamask} alt="metamask" />Mint & Generate contract (With crypto)</button>
                                        <button onClick={generateHandler} className="orange_btn " ><img src={wix} alt="wix" />Mint & Generate contract (With creditcard)</button>
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