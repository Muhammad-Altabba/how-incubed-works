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

class BehindTheScenes extends React.Component {
    state = { JsonRpcLog: null };
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container>
            <Card className="bg-gradient-gray-dark shadow-lg border-0">
              <div className="p-5">
                <Row className="align-items-center">
                  <Col>
                    <div className="display-4">
                      What Happens Behind the Scenes!
                  </div>
                    <p className="lead text-white mt-3">
                      This occurs for every request from the Ethereum network. You can check the captured request and response above to understand more.
                      {/* It could do so as it is the provider of the Web3 object. */}
                    </p>
                    <ul>
                      <li>Incubed Client injectes an <strong>"in3"</strong> attribute at the JSON request.</li>
                      <li>Incubed Client sends multiple/single request(s) to multiple/single server(s).</li>
                      <li>Incubed Client asks those servers to get the blockhash signed by other servers (specified in the "in3" section).</li>
                      <li>Incubed Servers sends back the requested data along with the blockhash that is signed by the requested other servers.</li>
                      <li>Incubed Servers adds all the additional proof information in the <strong>"in3"</strong> section.</li>
                      <li>Incubed Client receives the data from all the inquired servers, and validates all the responses.</li>
                      <li>Incubed Client validate all the proof of the validatable-data received from each server.</li>

                    </ul>
                    <p>Note: Incubed Servers (Nodes) cannot provide fake signatures since there are always <strong>`watch-dogs`</strong> who will be pleased to get the node's deposits in such a case (anyone can act as a watchdog!).</p>
                  </Col>
                  {/* <Col className="ml-lg-auto" lg="3">
                    <Button
                      block
                      className="btn-white"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >
                      Download React
                </Button>
                  </Col> */}
                </Row>
                <Row>
                  <Col>
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/ill/incubedclient.svg")}
                    /></Col>
                </Row>
                <Row className="justify-content-start">
                  <Col className="col-3">
                    <Card className="shadow shadow-lg--hover mt--100">
                      <CardBody>
                        <Container>
                          <Row className="justify-content-start align-items-center">
                            <Col className="col-md-auto px-0">
                              <div className="icon icon-shape bg-gradient-gray-dark rounded-circle text-white">
                                <i className="fa fa-book" />
                              </div>
                            </Col>

                            <Col className="pr-0 pl-2">
                              <div className="h6 text-gray-dark">
                                More details?
                              </div>
                            </Col>
                          </Row>
                          <Row className="justify-content-start">
                            <Col className="text-primary px-2 pt-3">
                              <div>
                                What you see here is enough for start using Incubed.
                              </div>
                              <div>
                                However, it alway recommended to {" "}
                                <a className="text-gray-dark font-weight-700"
                                  target="_blank"
                                  href="https://in3.readthedocs.io/en/latest/">Read the Docs</a>.
                                </div>
                            </Col>
                          </Row>
                        </Container>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Card>
          </Container>
        );
    }
}

export default BehindTheScenes;