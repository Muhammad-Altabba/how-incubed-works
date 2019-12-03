import React, { Component } from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledAlert
} from "reactstrap";

import JsonRpcMultiFunctionsShow from "../../components/incubed/JsonRpcMultiFunctionsShow.jsx";
import InterceptAndLog from "../../InterceptAndLog.js";
import getWeb3 from "../../getWeb3";
import BehindTheScenes from "components/incubed/BehindTheScenes.jsx";

class BlockProofData extends Component {
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

    this.setState({ latestBlock: 'Calling `web3.eth.getBlock(\'latest\');` and waiting for the response.' });

    window.JsonRpcLogs[this.functionName] = [];
    try {
      web3.eth.getBlock('latest').then(
        (latestBlock) => {
          console.log('Latest Block:');
          console.log(latestBlock);
          this.setState({ latestBlock: latestBlock });
        }, (error) => {
          console.log('Error happen when getting the Latest Block!');
          console.log(error);
          this.setState({ latestBlock: 'Error happen when getting the Latest Block! Try refresh the page or open the Console for more information.' });
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
              typeof this.state.latestBlock !== "string" ?
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
                <Container>
                    <UncontrolledAlert color="blue" fade={false}>
                        <span className="alert-inner--icon">
                            <i className="fa fa-code fa-lg" />
                        </span>
                        <span className="alert-inner--text ml-1 display-5">
                          {this.state.latestBlock}
                        </span>
                    </UncontrolledAlert>
                </Container>
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

        <section className="section section-lg pt-0 mt--250 text-white">
          <BehindTheScenes />
        </section>
      </>
    );
  }
}

export default BlockProofData;
