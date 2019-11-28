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
            <div className="pb-3">
                <Button color="primary" className="w-100" onClick={this.toggle} >
                    <Container>
                        <Row className="align-items-center">
                            <Col className="display-4">
                                {this.props.item.Url.slice(this.props.item.Url.indexOf('://') + 3)}
                            </Col>
                            <Col className="col-4">
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
                    </Container>
                </Button>
                <Collapse isOpen={this.state.isOpen}>
                    <Card>
                        <CardBody>
                            <div><div> Incubed Server: {this.props.item.Url} </div>
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
            </div>
        );
    }
}
export default JsonRpcOneFunctionShow;