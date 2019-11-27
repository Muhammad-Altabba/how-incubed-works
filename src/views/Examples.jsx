/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

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
    Col,
    UncontrolledAlert
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

// index page sections
import Download from "./IndexSections/Download.jsx";

class Examples extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <DemoNavbar />
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-sm section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Examples of using Web3 that uses In3 as a provider
                                            </h1>
                                            <p className="lead text-white">
                                                In all the examples, the Web3 object will not use any injected Web3 provider (MetaMask) nor any tursted node as a provider.
                                                It will use In3 Client that connects to an In3 trustless Server. And it will get and validate proofs for any validatable remote call.
                                        </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                        {/* 1st Hero Variation */}
                    </div>
                    <section className="section section pt-lg-0 mt--200">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="fa fa-square" />
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Block Proof
                          </h6>
                                                    <p className="description mt-3">
                                                        Get a verified data of a block.
                          </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            Block Proof
                            </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        href="/examples/block/"
                                                    >
                                                        Try it!
                          </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        {/*  <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="ni ni-istanbul" />
                                                    </div>
                                                    <h6 className="text-success text-uppercase">
                                                        Build Something
                          </h6>
                                                    <p className="description mt-3">
                                                        Argon is a great free UI package based on Bootstrap
                                                        4 that includes the most important components and
                                                        features.
                          </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            business
                            </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            vision
                            </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            success
                            </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="success"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                          </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="ni ni-planet" />
                                                    </div>
                                                    <h6 className="text-warning text-uppercase">
                                                        Prepare Launch
                          </h6>
                                                    <p className="description mt-3">
                                                        Argon is a great free UI package based on Bootstrap
                                                        4 that includes the most important components and
                                                        features.
                          </p>
                                                    <div>
                                                        <Badge color="warning" pill className="mr-1">
                                                            marketing
                            </Badge>
                                                        <Badge color="warning" pill className="mr-1">
                                                            product
                            </Badge>
                                                        <Badge color="warning" pill className="mr-1">
                                                            launch
                            </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="warning"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                          </Button>
                                                </CardBody>
                                            </Card>
                                        </Col> */}
                                    </Row>
                                </Col>
                            </Row>
                        </Container>

                    </section>
                    <section className="section pt-0">
                        <Container>
                            <UncontrolledAlert color="warning" fade={false}>
                                <span className="alert-inner--icon">
                                    <i className="fa fa-lightbulb-o fa-lg" />
                                </span>
                                <span className="alert-inner--text ml-1">
                                    <strong>Info!</strong> {" "}
                                    Depending on the `Json RPC` method called, different proofs are needed, which are described in {" "}
                                    <strong><a target="_blank" className="text-white" href="https://in3.readthedocs.io/en/develop/Ethereum-Verification-and-MerkleProof.html">the documentation.</a></strong>
                                </span>
                            </UncontrolledAlert>
                        </Container>

                    </section>

                </main>
                <SimpleFooter />
            </>
        );
    }
}

export default Examples;
