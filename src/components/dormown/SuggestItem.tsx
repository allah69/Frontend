import React from "react";
import { Button, Col, Row } from "react-bootstrap"
import { propsSuggestItem } from "./type";
function SuggestItem(props: propsSuggestItem) {
    const { id, name } = props
    return (
        <Row noGutters={true} className="mb-3">
            <Col style={{width:"700px"}}>
                <Button variant="light" size="lg" block style={{textAlign:"left"}}>
                    {name}
                </Button>
            </Col>
        </Row>
    )
}
export default SuggestItem