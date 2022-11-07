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

const TokenCollection = () =>{

    const data = [
        {
            id: 1,
            nftimage: pizza1,
            nftrank: "#0",
        },
        {
            id: 1,
            nftimage: pizza2,
            nftrank: "#1",
        },
        {
            id: 1,
            nftimage: pizza3,
            nftrank: "#2",
        },
        {
            id: 1,
            nftimage: pizza4,
            nftrank: "#3",
        },
        {
            id: 1,
            nftimage: pizza5,
            nftrank: "#4",
        },
        {
            id: 1,
            nftimage: pizza6,
            nftrank: "#5",
        },
    ]

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
                                        <Link to="" className="transparency_btn" ><img src={arrow} alt="arrow" />Back to edit</Link>
                                        <Link to="" className="transparency_btn" ><img src={refresh} alt="refresh" />Regenerate Image</Link>
                                    </div>
                                    <Link to="" className="orange_btn" >Add collection to blockchain</Link>
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