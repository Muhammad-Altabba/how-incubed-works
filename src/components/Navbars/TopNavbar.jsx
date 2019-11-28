import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class TopNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/in3_logo_white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/in3_logo.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar href="ttt">
                  <NavbarBrand to="/" tag={Link}>
                    How it Works!
                  </NavbarBrand>
                  <UncontrolledDropdown nav >
                    <DropdownToggle nav onClick={() => { window.location.href = '/examples' }}>
                      <span >Examples</span>
                    </DropdownToggle>
                    {/* 
                    Note: For some reason if those links are used, Web3 instantiation has some issues. To check after uncomment, try visit multible pages after each others.
                    For now this sub-menu is not preset.

                    <DropdownMenu>
                      <DropdownItem to="/examples/blockproof/" tag={Link}>
                        Block Proof
                      </DropdownItem>
                      <DropdownItem to="/examples/transactionproof/" tag={Link}>
                        Transaction Proof
                      </DropdownItem>
                      <DropdownItem to="/examples/receiptproof/" tag={Link}>
                        Receipt Proof
                      </DropdownItem>
                      <DropdownItem to="/examples/logproof/" tag={Link}>
                        Log Proof
                      </DropdownItem>
                      <DropdownItem to="/examples/accountproof/" tag={Link}>
                        Account Proof
                      </DropdownItem>
                      <DropdownItem to="/examples/callproof/" tag={Link}>
                        Call Proof
                      </DropdownItem>
                    </DropdownMenu> */}
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Components</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="https://github.com/slockit/in3"
                          target="_blank"
                        >

                          <div className="icon rounded-circle text-white">
                            <img alt="..." className="img-fluid" src={require("assets/img/brand/in3-client.png")}
                              style={{ width: "100px" }} />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-danger mb-md-1">
                              Incubed Client
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Typescript-version of the in3 client. The a minimal verification client for blockchain networks.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://github.com/slockit/in3-server"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="fa fa-server" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-success mb-md-1">
                              Incubed Server
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              The Incubed Node/Server. For callers, this is an Ethereum full node but with extra IN3 features.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://github.com/slockit/in3-contracts/"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="fa fa-file" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              IN3 Smart Contracts
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              The source code of the smart contracts that mainly register servers and convict any misbehavioured one.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://slock.it/usn/"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-info rounded-circle text-white">
                            <i className="fa fa-mobile" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-info mb-md-1">
                              Universal Sharing Network (USN)
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              The Future of Sharing Rent and share anything with the USN, the first decentralized application
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Other Links</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="https://in3.slock.it/"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="fa fa-tachometer" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-warning mb-md-1">
                              Incubed Server Dashboard
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Typescript-version of the in3 client. The a minimal verification client for blockchain networks.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://in3-setup.slock.it/"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="fa fa-magic" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-success mb-md-1">
                              Incubed Server Setup Wizard
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              The Incubed Node/Server. For callers, this is an Ethereum full node but with extra IN3 features.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.youtube.com/channel/UCPOrzp3CZmdb5HJWxSjv4Ig"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-youtube-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        YouTube
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Watch us on YouTube
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://blog.slock.it/"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-medium" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Slock.it Blog
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Read from our Blog
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/slockitproject/"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/slockit/"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://in3.readthedocs.io/en/latest/"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-book mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Read the Docs
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default TopNavbar;
