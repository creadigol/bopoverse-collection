import { useState } from "react";
import "./CreateCollection.css";
import { Container , Row , Col } from "react-bootstrap";
import combine from "../../assets/image/combineimg.png";
import Layer from "./Layer";
import { Link } from "react-router-dom";
import Input from "../../components/Common/Input";
import pink from "../../assets/image/pink.png";
import img from "../../assets/image/image.png";
 /* @ts-ignore */
import saveImage from 'save-image';
import { fabric } from "fabric";
const CreateCollection = () =>{
    const canvas = document.getElementById("myCanvas");
    /* @ts-ignore */
   const ctx = canvas?.getContext('2d');
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [layerName1, setLayerName1] = useState("");
    const [layerName2, setLayerName2] = useState("");
    const imageOnchange = (evnt : any)=>{
        const reader = new FileReader();
        const img = new Image();
        var URL = window.URL;
        var url = URL.createObjectURL(evnt.target.files[0]);
        setImage1(url);
        img.src = url;
        //saveImage(img, './public/download.jpeg');
        reader.onload = () => {
            img.onload = () => {
                /* @ts-ignore */
            canvas.width = img.width;
                /* @ts-ignore */
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            };
            /* @ts-ignore */
            img.src = reader.result;
        };
        reader.readAsDataURL(evnt.target.files[0]);
    }
    const imageOnchange2 = (evnt : any)=>{
        const reader = new FileReader();
        const img = new Image();
        var URL = window.URL;
        var url = URL.createObjectURL(evnt.target.files[0]);
        setImage2(url);
        img.src = url;
        // reader.onload = () => {
            img.onload = () => {
                /* @ts-ignore */
            canvas.width = img.width;
                /* @ts-ignore */
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            };
            /* @ts-ignore */
            img.src = url;
        //};
        //reader.readAsDataURL(evnt.target.files[0]);
    }
    const loadImage = (src : any, onload : any) =>{
        const img = new Image();
        img.onload = onload;
        img.src = src;
        return img;
    }
   const drawImage = () =>{
    const canvas =   document.getElementById('myCanvas');
        if (!canvas) return;
          /* @ts-ignore */
        const ctx = canvas.getContext('2d');
        /* @ts-ignore */
        canvas.width = 200;
            /* @ts-ignore */
        canvas.height = 100;
    }

     
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
                                                {/* <img src={combine} alt="combineimg" /> */}
                                                <canvas id="myCanvas"></canvas>
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
                                       
                                        {/* Start  Layer */}

                                        <div className="layer_main">
                                            <div className="card">
                                                <div className="layer_section">
                                                    <div className="layer_name">
                                                        <Input 
                                                            label={ `Layer :`}
                                                            type= "text"
                                                            name="LayerName"
                                                            placeholder= "Enter layer name"
                                                            onChange={(e : any)=>setLayerName1( e.target.value)}
                                                            value={layerName1}
                                                        />
                                                    </div>
                                                    <hr />
                                                    <div className="layer_list">
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} >
                                                                <img src={image1 ? image1 : pink} alt="pink" className="layer_img" />
                                                            </Col>
                                                            <Col lg={4} md={4} sm={6} >
                                                                <div className="upload_img">
                                                                    <Input
                                                                        type= "file"
                                                                        placeholder= "Enter layer name"
                                                                        onChange={(evnt : any)=>imageOnchange(evnt)}
                                                                    />
                                                                    <div className="upload_custom" >
                                                                        <div>
                                                                            <img src={image1 ? image1 : img} alt="image" />
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
                                        {/* First  Layer Over */}

                                        <div className="layer_main">
                                            <div className="card">
                                                <div className="layer_section">
                                                    <div className="layer_name">
                                                        <Input 
                                                            label={ `Layer :`}
                                                            type= "text"
                                                            name="LayerName"
                                                            placeholder= "Enter layer name"
                                                           
                                                            onChange={(e : any)=>setLayerName2( e.target.value)}
                                                            value={layerName2}
                                                        />
                                                    </div>
                                                    <hr />
                                                    <div className="layer_list">
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} >
                                                                <img src={image2 ? image2 : pink} alt="pink" className="layer_img" />
                                                            </Col>
                                                            <Col lg={4} md={4} sm={6} >
                                                                <div className="upload_img">
                                                                    <Input
                                                                        type= "file"
                                                                        placeholder= "Enter layer name"
                                                                        onChange={(evnt : any)=>imageOnchange2(evnt)}
                                                                    />
                                                                    <div className="upload_custom" >
                                                                        <div>
                                                                            <img src={image2 ? image2 : pink} alt="image" />
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
                                        {/* End  Layer */}
                                        {/* <Layer /> */}
                                        {/* <button className="add_layer" onClick={addInputField}>+ Add layer</button> */}
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