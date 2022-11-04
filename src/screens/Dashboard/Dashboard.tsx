import "./Dashboard.css";
import { Container , Row , Col } from "react-bootstrap";
import metamask from "../../assets/image/metamask.svg";
import phantom from "../../assets/image/phantom.svg";
import coinbase from "../../assets/image/coinbase.svg";
import walletconnect from "../../assets/image/walletconnect.svg";
import arrow from "../../assets/image/arrow.svg";
import { Link } from "react-router-dom";
import { useConnectedMetaMask, useMetaMask } from 'metamask-react';
import detectEthereumProvider from '@metamask/detect-provider';
interface ConnectInfo {
    chainId: string;
  }
  
const Dashboard = () =>{
    const { status, connect, account, chainId, ethereum } = useMetaMask();
    
    const walltlist = [
        {
            id: 2,
            walletimg: phantom,
            walletname: "Phantom",
            walletnetwork: "solana",
        },
        {
            id: 3,
            walletimg: coinbase,
            walletname: "Coinbase wallet",
        },
        {
            id: 4,
            walletimg: walletconnect,
            walletname: "Wallet connect",
        },
    ]
    const metamaskConnect = async ()  => {
       
        const provider = await detectEthereumProvider();
        if (provider) {

            console.log('Ethereum successfully detected!')
          
            /* @ts-ignore */
            const chainId = await provider.request({
              method: 'eth_chainId'
            })
          } else {
          
            // if the provider is not detected, detectEthereumProvider resolves to null
            
          }
    } 
    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <Row className="justify-content-center" >
                        <Col lg={5} >
                            <div className="select_wallet">
                                <div className="card">
                                    {/* Wallet Header */}
                                    <div className="connectwallet_header">
                                        <h5>Connect wallet</h5>
                                        <p>select wallet & create collection</p>
                                    </div>
                                    <hr />
                                    {/* Network List */}
                                    <div className="connectwallet_body">
                                        <ul>
                                        <li onClick={metamaskConnect}>
                                            <Link to="#" >
                                                <div className="network_name" >
                                                    <img src={metamask} alt="metamask" />
                                                    <h6>Metamask</h6>
                                                </div>
                                                <div className="address_list" >
                                                    <span>ethereum</span>
                                                    <img src={arrow} alt="arrow" />
                                                </div>
                                            </Link>
                                        </li>
                                            {walltlist.map((w) => (
                                                <li>
                                                    <Link to="/project" >
                                                        <div className="network_name" >
                                                            <img src={w.walletimg} alt="metamask" />
                                                            <h6>{w.walletname}</h6>
                                                        </div>
                                                        <div className="address_list" >
                                                            <span>{w.walletnetwork}</span>
                                                            <img src={arrow} alt="arrow" />
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
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

export default Dashboard;