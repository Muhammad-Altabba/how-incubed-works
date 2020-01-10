import React from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Container,
    Row,
    Col,
} from 'reactstrap';

class JsonRpcOneFunctionShow extends React.Component {
    state = {
        isOpen: false
    };

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <Container className="pb-3">
                <Button color="gray-dark" className="w-100" onClick={this.toggle} >
                    <div>
                        <Row className="align-items-center">
                            <Col className="text-white h6">
                                <span className="align-middle">
                                    <i className="fa fa-chevron-right"></i> {" "}
                                    {this.props.item.Url.slice(this.props.item.Url.indexOf('://') + 3)}
                                </span>
                            </Col>
                            <Col className="mb-1">
                                (Click for more...)
                            </Col>
                            <Col className="col-auto">
                                <Button
                                    className="btn-neutral btn-icon"
                                    color="default"
                                    download={this.props.item.Request.method + "-server-response.json"}
                                    href={URL.createObjectURL(new Blob([this.props.item.OriginalResponse]))}
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-download mr-2" />
                                    </span>
                                    <span className="nav-link-inner--text ml-1">
                                        Download full response</span>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Button>
                <Collapse isOpen={this.state.isOpen}>
                    <Card>
                        <CardBody>
                            <div className="h6"><div> Incubed Server: {this.props.item.Url} </div>
                                <div>
                                    <pre className="prettyprint">
                                        Request:
                                            {JSON.stringify(this.props.item.Request, null, 4)} {window.PR.prettyPrint()}
                                    </pre>
                                </div>
                                <div>
                                    {typeof this.props.item.Response !== "string" ?
                                        <pre className="prettyprint">
                                            Response:
                                                {JSON.stringify(this.props.item.Response, null, 4)} {window.PR.prettyPrint()}
                                        </pre> :
                                        <div>Response: {this.props.item.Response}</div>
                                    }
                                </div>
                                {/* <div>
                                    {typeof this.props.item.Response !== "string" ?
                                        <pre className="prettyprint">
                                            Response:
                                                {JSON.stringify(JSON.parse(this.props.item.OriginalResponse), null, 4)} {window.PR.prettyPrint()}
                                        </pre> :
                                        <div>Response: {this.props.item.OriginalResponse}</div>
                                    }
                                </div> */}
                                <br />
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
            </Container>
        );
    }
}
export default JsonRpcOneFunctionShow;