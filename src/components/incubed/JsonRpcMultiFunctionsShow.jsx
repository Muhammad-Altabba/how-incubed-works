import React from 'react';

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

import JsonRpcOneFunctionShow from './JsonRpcOneFunctionShow.jsx';

import ReactLoading from 'react-loading';

class JsonRpcMultiFunctionsShow extends React.Component {

    render() {
        return (
                <div style={{ textAlign: 'left' }} >
                    {window.JsonRpcLogs && window.JsonRpcLogs[this.props.functionName] !== undefined && window.JsonRpcLogs[this.props.functionName].length !== 0 ?
                        <div>
                            <h3 className="text-white font-weight-bold">Number of calles to Incubed Servers: {window.JsonRpcLogs[this.props.functionName].length}</h3>
                            {window.JsonRpcLogs[this.props.functionName].map((item, index) => (
                                <JsonRpcOneFunctionShow key={index} item={item} />
                            ))}
                        </div>
                        :
                        <Container className="pb-100 text-center">
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
        );
    }
}

export default JsonRpcMultiFunctionsShow;