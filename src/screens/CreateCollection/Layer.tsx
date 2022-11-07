import { useState } from "react";
import { Container , Row , Col } from "react-bootstrap";
import Input from "../../components/Common/Input";
import pink from "../../assets/image/pink.png";
import img from "../../assets/image/image.png";

const Layer = () =>{

    
    const [inputFields, setInputFields] = useState([{
        LayerName:'',
        image:'',
    } ]);
    const addInputField = ()=>{

        setInputFields([...inputFields, {
            LayerName:'',
            image:'',
        } ])
      
    }
    const handleChange = (index : any, evnt : any)=>{
        const url = URL.createObjectURL(evnt.target.files[0]);
        console.log(url);
        const { name, value } = evnt.target;
        const list : any = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    const imageOnchange = (index : any, evnt : any)=>{
        const url = URL.createObjectURL(evnt.target.files[0]);
        console.log(url);
        const { name, value } = evnt.target;
        const list : any = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    const addlayer = [
        {
            id: 1,
        },
        {
            id: 1,
        },
        {
            id: 1,
        },
    ]

    return(
        <>

{inputFields.map((data, index)=>{
                const {LayerName, image}= data;
                return(
                    <div className="layer_main">
            <div className="card">
                <div className="layer_section">
                    <div className="layer_name">
                        <Input 
                            label= "Layer 1 :"
                            type= "text"
                            name="LayerName"
                            placeholder= "Enter layer name"
                            onChange={(evnt : any)=>handleChange(index, evnt)}
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
                                        onChange={(evnt : any)=>imageOnchange(index, evnt)}
                                        value={image}
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
                )
            })
        }
            {/* {addlayer.map((d) => (
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
            ))} */}
            <button className="add_layer" onClick={addInputField}>+ Add layer</button>
        </>
    );
}

export default Layer;