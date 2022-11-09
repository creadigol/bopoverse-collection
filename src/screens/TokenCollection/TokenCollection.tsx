import { Col, Container, Row } from "react-bootstrap";
import "./TokenCollection.css";
import pizza1 from "../../assets/image/31.png";
import pizza2 from "../../assets/image/32.png";
import pizza3 from "../../assets/image/33.png";
import pizza4 from "../../assets/image/34.png";
import pizza5 from "../../assets/image/35.png";
import pizza6 from "../../assets/image/36.png";
import { Link } from "react-router-dom";
import arrow from "../../assets/image/back_arrow.svg";
import refresh from "../../assets/image/refresh.svg";
import { useEffect, useState } from "react";
const TokenCollection = () =>{
    const [image, setImage ] = useState(pizza1);
    var x = localStorage.getItem("nftImage");
    const data = [
        {
            id: 1,
            nftimage: image,
            nftrank: "#0",
        },
        {
            id: 1,
            nftimage: image,
            nftrank: "#1",
        },
        {
            id: 1,
            nftimage: image,
            nftrank: "#2",
        },
        {
            id: 1,
            nftimage: image,
            nftrank: "#3",
        },
        {
            id: 1,
            nftimage: image,
            nftrank: "#4",
        },
        {
            id: 1,
            nftimage: image,
            nftrank: "#5",
        },
    ]
    useEffect(()=>{
        const img = localStorage.getItem("nftImage");
        if(img){
            setImage(img);
        }
    },[localStorage.getItem("nftImage")]);
    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <div className="preview_image">
                        <h4 className="title" >Preview image</h4>
                        <Row className="justify-content-center" >
                            <Col xl={10} >
                                <div className="preview_image_header">
                                    <div>
                                        <Link to="/addlayer" className="transparency_btn" ><img src={arrow} alt="arrow" />Back to edit</Link>
                                        <Link to="/" className="transparency_btn" ><img src={refresh} alt="refresh" />Regenerate Image</Link>
                                    </div>
                                    <Link to="/blockchain" className="orange_btn" >Add collection to blockchain</Link>
                                </div>
                                <Row>
                                    {data.map((d) => (
                                        <Col xl={4} >
                                            <div className="preview_image_section">
                                                <div className="card">
                                                    <img src={d.nftimage} alt="pizza" />
                                                    <h5><span>{d.nftrank}</span> of 10</h5>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default TokenCollection;