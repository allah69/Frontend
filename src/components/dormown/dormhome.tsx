/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DormList from './DormList';
import DormDetail from './DormDetail';

function DormHome() {
    const history = useHistory();
    useEffect(() => {
        document.body.style.backgroundColor = "#F55E61"
    }, [])
    return (
        <div>
            <Navbar style={{ padding: "1% 4%" }} bg="">
                <Nav className="text-center">
                    <Button variant="" onClick={() => history.goBack()}>
                        <ArrowBackIosIcon htmlColor="white" fontSize="large" />
                    </Button>
                    <h1 style={{
                        position: "absolute",
                        width: "100%",
                        textAlign: "center",
                        overflow: "visible",
                        height: "0",
                        left: "0%",
                        color: "white",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "45px",
                    }}>My Dorm</h1>
                </Nav>
            </Navbar>
            <div style={{ padding: "1% 4%" }}>
                <Row noGutters={true}>
                    <Col>
                        <Row noGutters={true}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>

                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                        <Row noGutters={true}>
                            <DormList />
                        </Row>
                        <Row noGutters={true}>
                            <div
                                style={{
                                    textAlign: "left",
                                    display: "inline-block",
                                    width: "100%",
                                    padding: "2% 0% "
                                }}
                            >
                                <Button variant="light" size="lg" block style={{ color: "red" ,width:"150px" }}>
                                    Add Dorm
                        </Button>
                            </div>
                        </Row>
                    </Col>
                    <Col style={{ maxWidth: "20px" }}>
                    </Col>
                    <Col className="bg-white">
                        <Row noGutters={true} style={{ height: "550px" }}>
                            <DormDetail />
                        </Row>
                        <Row noGutters={true} style={{ padding: "1% 2%" }}>
                            <Col>
                                <Button variant="danger">
                                    Generate Review Code
                            </Button>
                            </Col>
                            <Col style={{ width: "100px" }}>
                            </Col>
                            <Col>
                                <Button variant="warning" style={{ textAlign: "right", color: "white" }}>
                                    Generate Review Code
                            </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
export default DormHome;