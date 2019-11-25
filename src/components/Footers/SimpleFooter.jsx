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
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for trying Incubed!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's communicate on our channels.
                </h4>
              </Col>
              <Col className=" text-lg-center btn-wrapper" lg="6">
                <Button
                  className=" btn-neutral btn-icon-only btn-round"
                  color="twitter"
                  href="https://twitter.com/slockitproject/"
                  id="tooltip126536702"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536702">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="youtube"
                  href="https://www.youtube.com/channel/UCPOrzp3CZmdb5HJWxSjv4Ig"
                  id="tooltip383967593"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-youtube-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="medium"
                  href="https://blog.slock.it/"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-medium" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Read our Blog
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="github"
                  href="https://github.com/slockit"
                  id="tooltip626177562"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip626177562">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://slock.it"
                    target="_blank"
                  >
                     Slock.it GmbH - A Blockchains Company
                  </a>
                  
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://slock.it/"
                      target="_blank"
                    >
                      slock.it GmbH
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.blockchains.com/"
                      target="_blank"
                    >
                      BLOCKCHAINS LLC
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      href="http://blog.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE"
                      target="_blank"
                    >
                      License (Website Design)
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
