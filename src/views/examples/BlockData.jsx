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
import React, { Component } from "react";
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
  Col
} from "reactstrap";

import JsonRpcMultiFunctionsShow from "../../components/incubed/JsonRpcMultiFunctionsShow.jsx";
import InterceptAndLog from "../../InterceptAndLog.js";
import getWeb3 from "../../getWeb3";
import BehindTheScenes from "components/incubed/BehindTheScenes.jsx";

class BlockData extends Component {
  state = { web3: null, latestBlock: null };
  functionName = 'eth_getBlockByNumber';

  componentDidMount = async () => {

    new InterceptAndLog().interceptingAllHttpCalls();

    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3(true);
      // Set web3 to the state.
      this.setState({ web3: web3 }, this.getWithIn3);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }


  getWithIn3 = async () => {
    console.log(this)
    const web3 = this.state.web3;

    // web3.eth.net.getId().then((networkId) => {
    //   console.log('Network Id:');
    //   console.log(networkId);
    //   this.setState({ networkId: networkId });
    // }, (error) => {
    //   console.log('Error happen when getting the Latest Block!');
    //   console.log(error);
    //   this.setState({ networkId: 'Error!' });
    // });

    window.JsonRpcLogs[this.functionName] = [];
    try {
      web3.eth.getBlock('latest').then(
        (latestBlock) => {
          console.log('Latest Block:');
          console.log(latestBlock);
          this.setState({ latestBlockNumber: latestBlock.number });
          this.setState({ latestBlock: latestBlock });
        }, (error) => {
          console.log('Error happen when getting the Latest Block!');
          console.log(error);
          this.setState({ latestBlockNumber: 'Error!' });
        });
    }
    catch (error) {
      alert(error)
      console.log(error)
    }
  }
  render() {
    return (
      <>
        <section className="section pb-300 bg-gradient-warning text-white">
          <Container>
            <div>{this.state.latestBlock ?

              <Card className="shadow border-0 bg-primary my-3">
                <CardBody className="py-5">
                  <div className="display-4 text-white">The Data of the `latest` Block </div>
                  <Container>
                    <Row>
                      <Col>
                        <span className="font-weight-bold">Block Number: </span><br />{this.state.latestBlock.number}
                      </Col>
                      <Col>
                        <span className="font-weight-bold">Gas Limit: </span><br />{this.state.latestBlock.gasLimit}
                        {/* To get the value in Ether {this.state.web3.utils.fromWei(this.state.latestBlock.gasLimit.toString())} */}
                      </Col>
                      <Col>
                        <span className="font-weight-bold">Gas Used: </span><br />{this.state.latestBlock.gasUsed}
                      </Col>
                      <Col>
                        <span className="font-weight-bold">Transactions Count: </span><br />{this.state.latestBlock.transactions.length}
                      </Col>
                      <Col>
                        <span className="font-weight-bold">Timestamp: </span><br />{new Date(this.state.latestBlock.timestamp * 1000).toUTCString()}
                      </Col>
                      <Col>
                        <span className="font-weight-bold">Hash: </span>{this.state.latestBlock.hash}
                      </Col>
                      <Col>
                        <span className="font-weight-bold">Receipts Root: </span>{this.state.latestBlock.receiptsRoot}
                      </Col>
                      <Col>
                        <span className="font-weight-bold">State Root: </span>{this.state.latestBlock.stateRoot}
                      </Col>
                      <Col>
                        <span className="font-weight-bold">Transactions Root: </span>{this.state.latestBlock.transactionsRoot}
                      </Col>
                    </Row>
                  </Container>
                </CardBody>
              </Card>
              :
              <></>
            }
            </div>
            <JsonRpcMultiFunctionsShow functionName={this.functionName} />
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

        <section className="section section-lg pt-0 mt--200 text-white">
          <BehindTheScenes />
        </section>
      </>
    );
  }
}

export default BlockData;
