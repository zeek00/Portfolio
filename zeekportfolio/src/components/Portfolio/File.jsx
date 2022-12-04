import {React} from "react";
import {AiFillFolder} from "react-icons/ai";
import './Portfolio.styles.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const File = (props) => {
    return (
        <Container>
            <Row>
                <Col md={12} lg={4}>
                    <div className="design">
                        <a target={"_blank"} href={props.link}>
                           <span> <AiFillFolder/></span>
                        </a>
                        <div className="title">
                            <a target={"_blank"} href={props.link}>
                                <p>{props.name}</p>
                            </a>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default File