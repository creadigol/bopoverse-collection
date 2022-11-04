import { useState } from "react";
import "./CreateCollection.css";
import { Container , Row , Col } from "react-bootstrap";
import combine from "../../assets/image/combineimg.png";
import Layer from "./Layer";
import { Link } from "react-router-dom";

const CreateCollection = () =>{
    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <div className="collection_main">
                        <h4 className="title" >Projects</h4>
                        <Row className="justify-content-center" >
                            <Col xl={9} lg={12} >
                                <Row>
                                    <Col xl={{ order: 0 , span: 4 }} lg={{ order: 0 , span: 4 }} md={{ order: 1 , span: 12 }} sm={{ order: 1 , span: 12 }} xs={{ order: 1 , span: 12 }} >
                                        <div className="view_nft">
                                            <div className="card">
                                                <img src={combine} alt="combineimg" />
                                                <button>Randomize</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={{ order: 1 , span: 8 }} lg={{ order: 1 , span: 8 }} md={{ order: 0 , span: 12 }} sm={{ order: 0 , span: 12 }} xs={{ order: 0 , span: 12 }} >
                                        <div className="generate_collection">
                                            <div className="card">
                                                <div className="generate_section">
                                                    <a>Size 1080*1080</a>
                                                    <Link to="/blockchain" >Generate collection</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Layer />
                                        <button className="add_layer" >+ Add layer</button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default CreateCollection;