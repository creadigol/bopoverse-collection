import "./Dashboard.css";
import { Container , Row , Col } from "react-bootstrap";
import metamask from "../../assets/image/metamask.svg";
import phantom from "../../assets/image/phantom.svg";
import coinbase from "../../assets/image/coinbase.svg";
import walletconnect from "../../assets/image/walletconnect.svg";
import arrow from "../../assets/image/arrow.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//@ts-ignore
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
//@ts-ignore
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useMetamask }         from "use-metamask";
import {useNavigate} from 'react-router-dom';
interface ConnectInfo {
    chainId: string;
  }
  export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
    ],
})
function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}
const Dashboard = () =>{
    const { connect, metaState } = useMetamask();
    const [walletKey, setWalletKey] = useState("");
    const navigate = useNavigate();
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
        if (!metaState.isConnected) {
            (async () => {
              try {
                await connect(Web3);
              } catch (error) {
                console.log(error);
              }
            })();
          }
    }
    useEffect(()=>{
        console.log("metaState : ", metaState?.account?.[0]);
        if(metaState.account){
            setWalletKey(metaState?.account?.[0]);
        }
    },[metaState]);
    useEffect(()=>{
        console.log("metaState : ", metaState?.account?.[0]);
        if(walletKey){
            navigate('/email');
        }
    },[walletKey]);
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
                                                    <Link to="/email" >
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