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
import { Button, Container, Row, Col } from "reactstrap";

class Top extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-sm">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="7">
                    <h1 className="text-white">
                      How Incubed Works
                    </h1>
                    <div>
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="How Incubed Works?" className="embed-responsive-item" src="https://www.youtube.com/embed/wlUlypmt6Oo"></iframe>
                      </div>
                    </div>

                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/Illu_7_final_3JUNI_A.png")}
                      style={{ width: "auto" }}
                    /> */}
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="9">
                    <div className="lead text-white">
                      <p>
                        Good to Go with Blockchain and IoT!
                    </p>
                      <p>
                        Connect IoT devices to the blockchain with secure interoperability.
                    </p>
                    </div>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-3"
                        color="default"
                        target="_blank"
                        href="https://in3.readthedocs.io/en/latest/"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-book" />
                        </span>
                        <span className="btn-inner--text">Read the Docs</span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-3"
                        color="github"
                        href="/examples"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-flask" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Check examples</span>
                        </span>
                      </Button>{" "}
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-3"
                        color="default"
                        target="_blank"
                        href="https://www.trufflesuite.com/boxes"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/icons/common/truffle-logo-light.svg")}
                            style={{ width: "20px" }}
                          />
                        </span>
                        <span className="btn-inner--text">
                        {/* Update the link once Incubed Truffle Box is ready */}
                          <span className="mr-1">Truffle with IN3</span>
                        </span>
                      </Button>{" "}
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-3"
                        color="default"
                        target="_blank"
                        href="https://in3-setup.slock.it/"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-magic" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Incubed Server Setup Wizard</span>
                        </span>
                      </Button>{" "}
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-3"
                        color="default"
                        target="_blank"
                        href="https://in3.slock.it/"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-tachometer" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Incubed Servers Dashboard</span>
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
        </div>
      </>
    );
  }
}

export default Top;
