import "./Project.css";
import { Container , Row , Col } from "react-bootstrap";
import project from "../../assets/image/project_icon.svg";
import { Link } from "react-router-dom";

const Project = () =>{

    const projectlist = [
        {
            id: 1,
            projectimg: project,
            projectname: "Membership",
        },
        {
            id: 2,
            projectimg: project,
            projectname: "Art , Avatars and PFP",
        },
        {
            id: 3,
            projectimg: project,
            projectname: "ERC 1155",
            coming: "(soon)"
        },
        {
            id: 4,
            projectimg: project,
            projectname: "Tickets",
            coming: "(soon)"
        },
        {
            id: 5,
            projectimg: project,
            projectname: "Music",
            coming: "(soon)"
        },
    ]

    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <div className="project_list">
                        <h4 className="title" >Choose project type</h4>
                        <Row>
                            {projectlist.map((l) => (
                                <Col lg={4} >
                                    <div className="project_section">
                                        <div className="card">
                                            <div className="project_detail">
                                                <img src={l.projectimg} alt="project_icon" />
                                                <h5>{l.projectname} <span>{l.coming}</span></h5>
                                                <Link to="/addlayer" >Create collection</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Project;