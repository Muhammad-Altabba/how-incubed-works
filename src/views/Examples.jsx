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

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledAlert
} from "reactstrap";

import { Link } from "react-router-dom";

// core components
import TopNavbar from "components/Navbars/TopNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

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
                <TopNavbar />
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
                    <section className="section section pt-lg-0 mt--250">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="fa fa-square" />
                                                    </div>
                                                    <h6 className="text-warning text-uppercase">
                                                        Block Proof
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Get a verified data of a block.
                                                    </p>
                                                    <div>
                                                        <Badge color="warning" pill className="mr-1">
                                                            Block Proof
                                                        </Badge>
                                                    </div>

                                                    <Button
                                                        className="mt-4"
                                                        color="warning"
                                                        tag={Link}
                                                        to="/examples/blockproof/"
                                                    >
                                                        Try it!
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="fa fa-exchange" />
                                                    </div>
                                                    <h6 className="text-success text-uppercase">
                                                        Transaction Proof
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Get a verified Transaction data.
                                                    </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            Transaction Proof
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="success"
                                                        tag={Link}
                                                        to="/examples/transactionproof/"
                                                    >
                                                        Try it!
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-gray-700 rounded-circle mb-4">
                                                        <i className="fa fa-file-o" />
                                                    </div>
                                                    <h6 className="text-gray-700 text-uppercase">
                                                        Receipt Proof
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Get a verified Transaction Receipt.
                                                    </p>
                                                    <div>
                                                        <Badge color="gray-700" pill className="mr-1">
                                                            Receipt Proof
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="gray-700"
                                                        tag={Link}
                                                        to="/examples/receiptproof/"
                                                    >
                                                        Try it!
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="fa fa-calendar-check-o" />
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Log Proof
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Get a verified Log or Event.
                                                    </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            Log Proof
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        tag={Link}
                                                        to="/examples/logproof/"
                                                    >
                                                        Try it!
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-indigo rounded-circle mb-4">
                                                        <i className="fa fa-user" />
                                                    </div>
                                                    <h6 className="text-indigo text-uppercase">
                                                        Account Proof
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Get a verified Account data.
                                                    </p>
                                                    <div>
                                                        <Badge color="indigo" pill className="mr-1">
                                                            Account Proof
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="indigo"
                                                        tag={Link}
                                                        to="/examples/accountproof/"
                                                    >
                                                        Try it!
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-goldenrod rounded-circle mb-4">
                                                        <i className="fa fa-eye" />
                                                    </div>
                                                    <h6 className="text-goldenrod text-uppercase">
                                                        Call Proof
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Get a verified data of an Ethereum Solidity read-only method call.
                                                    </p>
                                                    <div>
                                                        <Badge color="goldenrod" pill className="mr-1">
                                                            Call Proof
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="goldenrod"
                                                        tag={Link}
                                                        to="/examples/callproof/"
                                                    >
                                                        Try it!
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
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
                                    <strong><a target="_blank" rel="noopener noreferrer" className="text-white" href="https://in3.readthedocs.io/en/develop/Ethereum-Verification-and-MerkleProof.html">the documentation.</a></strong>
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
