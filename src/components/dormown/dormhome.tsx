/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
                    }}>My Dorm</h1>
                </Nav>
            </Navbar>
            <div style={{ padding: "0% 4%" }}>
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
                            list
                        </Row>
                        <div
                            style={{
                                textAlign: "left",
                                display: "inline-block",
                                width: "750px",
                                padding: "2% 0% "

                            }}
                        >
                            <Button variant="light">
                                Add Dorm
                        </Button>
                        </div>
                    </Col>
                    <Col>
                        inform
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default DormHome;