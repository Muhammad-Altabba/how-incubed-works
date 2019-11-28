import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import TopNavbar from "components/Navbars/TopNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

// index page sections
import AccountProofData from "./AccountProofData.jsx";

class AccountProofPage extends React.Component {
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
            <section className="section section-sm section-shaped">
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
              <Container className="pt-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Account Proof example
                      </h1>
                      <div className="lead text-white">
                        <p className="lead text-white">
                          Prooving an account-value applies to these functions:
                        </p>
                        <ul>
                          <li>eth_getBalance</li>
                          <li>eth_getCode</li>
                          <li>eth_getTransactionCount</li>
                          <li>eth_getStorageAt</li>
                        </ul>
                        {/* Note: eth_getProof
                            For the Transaction or Block Proofs all needed data can be found in the block itself and retrieved through standard rpc calls, 
                            but if we want to approve the values of an account, we need the MerkleTree of the state, which is not accessable through the standard rpc. 
                            That’s why we have created a EIP to add this function and also implemented this in geth and parity:
                            parity (Status: merged pull request) - Docker
                            geth (Status: merged pull request) - Docker */}
                        <p className="display-4 text-white">In this sample, Incubed Client asks for the balance of an account.</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              {/* <div className="separator separator-bottom separator-skew">
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
              </div> */}
            </section>
            {/* 1st Hero Variation */}
          </div>
          <AccountProofData />
          {/* SVG separator */}
          {/* <div className="separator separator-bottom separator-skew zindex-100">
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
            </div> */}
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default AccountProofPage;
