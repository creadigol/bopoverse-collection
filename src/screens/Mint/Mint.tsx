import { Container, Row, Col } from "react-bootstrap";
import "./Mint.css";
import minus from "../../assets/image/minus.svg";
import plus from "../../assets/image/plus.svg";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Mint = () =>{
    const [ number, setNumber] = useState(1);
    const increamentHandler = () =>{
        let value = number;
        setNumber(value + 1);
    }
    const decreamenttHandler = () =>{
        let value = number;
        if(value > 1){
            setNumber(value - 1);
        }
        
    }
    const mintHandler = () =>{
        toast.success("Nfts Mint Successfully.");
    }
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
                                            <button><img src={minus} onClick={decreamenttHandler}  alt="minus" /></button>
                                            <span>{number}</span>
                                            <button><img src={plus} onClick={increamentHandler} alt="plus" /></button>
                                        </div>
                                        <p className="minted" >Minted : 05/10</p>
                                        <hr />
                                        <button className="mint_now" onClick={mintHandler}>Mint  now</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            {/* Same as */}
            <ToastContainer />
        </>
    );
}

export default Mint;