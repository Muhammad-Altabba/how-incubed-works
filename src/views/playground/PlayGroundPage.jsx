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
import PlayGroundData from "./PlayGroundData.jsx";

class PlayGroundPage extends React.Component {
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
                        Incubed Playground!
                      </h1>
                      <div className="lead text-white">
                        <p className="lead text-white">
                          Incubed enable trustless comunication between Ethereum Clients and Nodes.
                        </p>
                        <p>
                          Bellow, Incubed Client will ask for a `Transaction by Hash` from Incubed Servers. Then it will catch the request and response from the first server. And enable you to change/manipulate the request and response and experiment how Incubed Client will react accordingly.
                        </p>
                        <p className="display-4 text-white">So feel free to manipulate the text-areas of the request/response and check with Incubed Client.</p>
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
          <PlayGroundData />
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

export default PlayGroundPage;
