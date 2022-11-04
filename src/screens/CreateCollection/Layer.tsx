import { useState } from "react";
import { Container , Row , Col } from "react-bootstrap";
import Input from "../../components/Common/Input";
import pink from "../../assets/image/pink.png";
import img from "../../assets/image/image.png";

const Layer = () =>{

    const [LayerName , setLayerName] = useState("");
    const addlayer = [
        {
            id: 1,
        },
        {
            id: 1,
        },
    ]

    return(
        <>
            {addlayer.map((d) => (
                <div className="layer_main">
                    <div className="card">
                        <div className="layer_section">
                            <div className="layer_name">
                                <Input 
                                    label= "Layer 1 :"
                                    type= "text"
                                    placeholder= "Enter layer name"
                                    onChange={setLayerName}
                                    value={LayerName}
                                />
                            </div>
                            <hr />
                            <div className="layer_list">
                                <Row>
                                    <Col lg={4} md={4} sm={6} >
                                        <img src={pink} alt="pink" className="layer_img" />
                                    </Col>
                                    <Col lg={4} md={4} sm={6} >
                                        <div className="upload_img">
                                            <Input
                                                type= "file"
                                                placeholder= "Enter layer name"
                                                onChange={setLayerName}
                                                value={LayerName}
                                            />
                                            <div className="upload_custom" >
                                                <div>
                                                    <img src={img} alt="image" />
                                                    <h6>+ upload</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Layer;