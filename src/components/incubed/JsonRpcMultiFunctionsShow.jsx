import React, { useState } from 'react';
// reactstrap components

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

import JsonRpcOneFunctionShow from './JsonRpcOneFunctionShow.jsx';

import ReactLoading from 'react-loading';

class JsonRpcMultiFunctionsShow extends React.Component {
    state = { JsonRpcLog: null };
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <div style={{ textAlign: 'left' }} >
                    {window.JsonRpcLogs && window.JsonRpcLogs[this.props.functionName] !== undefined && window.JsonRpcLogs[this.props.functionName].length !== 0 ?
                        <div>
                            <div className="text-white h4 font-weight-bold">Number of calles to Incubed Servers: {window.JsonRpcLogs[this.props.functionName].length}</div>
                            {window.JsonRpcLogs[this.props.functionName].map((item, index) => (
                                <JsonRpcOneFunctionShow key={index} item={item} />
                            ))}
                        </div>
                        :
                        <Container className="pb-5 text-center">
                            <Row>
                                <Col>

                                </Col>
                                <Col>
                                    <ReactLoading type="cubes" color="#fff" width="100%" />
                                    <div>Loading...</div>
                                </Col>
                                <Col>

                                </Col>
                            </Row>
                        </Container>
                    }
                </div>
            </>
        );
    }
}

export default JsonRpcMultiFunctionsShow;