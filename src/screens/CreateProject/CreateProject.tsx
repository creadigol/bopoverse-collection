import { Container , Row , Col } from "react-bootstrap";
import "./CreateProject.css";
import pizza1 from "../../assets/image/31.png";
import pizza2 from "../../assets/image/32.png";
import pizza3 from "../../assets/image/33.png";
import edit from "../../assets/image/edit.svg";
import delete1 from "../../assets/image/delete.svg";
import { Link } from "react-router-dom";

const CreateProject = () =>{

    const data = [
        {
            id: 1,
            nftimage: pizza1,
            nftrank: "#0",
        },
        {
            id: 2,
            nftimage: pizza2,
            nftrank: "#1",
        },
        {
            id: 3,
            nftimage: pizza3,
            nftrank: "#2",
        },
    ]

    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <h4 className="title" >Project Draft</h4>
                    <Row className="justify-content-center" >
                        <Col xl={10} >
                            <Link to="/project" className="orange_btn mb-4" >Create new collection</Link>
                            <Row>
                                {data.map((d) => (
                                    <Col xl={4} >
                                        <div className="preview_image_section">
                                            <div className="card">
                                                <img src={d.nftimage} alt="pizza" />
                                                <div className="nft_action" >
                                                    <Link to="/addlayer" ><img src={edit} alt="edit" /></Link>
                                                    <img src={delete1} alt="delete" />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default CreateProject;