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
import getWeb3 from "../../getWeb3";
import BehindTheScenes from "components/incubed/BehindTheScenes.jsx";
import InterceptAndLog from "../../InterceptAndLog.js";

class ReceiptProofData extends Component {
  state = { web3: null, transactionReceipt: null, transactionHash: '0xb68a3b5ea9b7b39314b5da7f3983e21ec1df4ef2daeca34a9178612ee26c690f' };
  functionName = 'eth_getTransactionReceipt';

  componentDidMount = async () => {

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

    this.setState({ transactionReceipt: 'Calling `web3.eth.getTransactionReceipt(\'' + this.state.transactionHash + '\');` ...' });

    new InterceptAndLog().incerceptJsonRpcCalls(this.functionName);

    try {
      //getting Transaction
      web3.eth.getTransactionReceipt(this.state.transactionHash).then(
        (transactionReceipt) => {
          console.log('Transaction Receipt for the Transaction Receipt for ' + this.state.transactionHash + ':');
          console.log(transactionReceipt);
          this.setState({ transactionReceipt: transactionReceipt });
        }, (error) => {
          console.log('Error happen when getting the Transaction Receipt for ' + this.state.transactionHash + '!');
          console.log(error);
          this.setState({ transactionReceipt: 'Error happen when getting the Transaction Receipt! Try refresh the page or open the Console for more information.' });
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
            <div>{this.state.transactionReceipt ?
              typeof this.state.transactionReceipt !== "string" ?
                <Card className="shadow border-0 bg-primary my-3">
                  <CardBody className="py-5">
                    <div className="display-4 text-white">The Data of the inquired Transaction Receipt</div>
                    <Container>
                      <Row>
                        <Col>
                          <span className="font-weight-bold">Transaction Hash : </span>{this.state.transactionReceipt.transactionHash}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <span className="font-weight-bold">From: </span><br />{this.state.transactionReceipt.from}
                        </Col>
                        <Col>
                          <span className="font-weight-bold">To: </span><br />{this.state.transactionReceipt.to}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <span className="font-weight-bold">Gas Used: </span>{this.state.transactionReceipt.gasUsed} Wei
                        </Col>
                        <Col>
                          <span className="font-weight-bold">Block Number: </span>{this.state.transactionReceipt.blockNumber}
                        </Col>
                      </Row>
                      <Row>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col>
                          <span className="font-weight-bold">Logs: </span>{this.state.transactionReceipt.logs
                            ? 'Number of emitted events in the inquired transaction: ' + this.state.transactionReceipt.logs.length
                            : 'No events emitted in the transaction'}
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
                      {this.state.transactionReceipt}
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

export default ReceiptProofData;
