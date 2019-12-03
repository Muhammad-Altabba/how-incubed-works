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

class TransactionProofData extends Component {
  state = { web3: null, transaction: null, transactionHash: '0xfc2786e12ba6f9f25587e618a0fbc407bf34afce137a1f695fcda3a1dacbe3eb' };
  functionName = 'eth_getTransactionByHash';

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

    this.setState({ transaction: 'Calling `web3.eth.getTransaction(\''+this.state.transactionHash+'\');` and waiting for the response.' });

    window.JsonRpcLogs[this.functionName] = [];
    try {
      //getting Transaction
      web3.eth.getTransaction(this.state.transactionHash).then(
        (transaction) => {
          console.log('Transaction for the transaction ' + this.state.transactionHash + ':');
          console.log(transaction);
          this.setState({ transaction: transaction });
        }, (error) => {
          console.log('Error happen when getting the transaction ' + this.state.transactionHash + '!');
          console.log(error);
          this.setState({ transaction: 'Error happen when getting the Transaction! Try refresh the page or open the Console for more information.' });
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
            <div>{this.state.transaction ?
              typeof this.state.transaction !== "string" ?
                <Card className="shadow border-0 bg-primary my-3">
                  <CardBody className="py-5">
                    <div className="display-4 text-white">The Data of the inquired Transaction </div>
                    <Container>
                      <Row>
                        <Col>
                          <span className="font-weight-bold">Hash: </span>{this.state.transaction.hash}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <span className="font-weight-bold">From: </span><br />{this.state.transaction.from}
                        </Col>
                        <Col>
                          <span className="font-weight-bold">To: </span><br />{this.state.transaction.to}
                        </Col>
                        <Col>
                          <span className="font-weight-bold">Value: </span><br />{this.state.web3.utils.fromWei(this.state.transaction.value.toString())} Ether
                        </Col>
                        <Col>
                          <span className="font-weight-bold">Transaction Fee: </span>
                          {this.state.web3.utils.fromWei(this.state.transaction.gas.toString()) * this.state.transaction.gasPrice} Ether
                        </Col>
                        <Col>
                          <span className="font-weight-bold">Gas Used: </span>{this.state.transaction.gas} Wei
                        </Col>
                        <Col>
                          <span className="font-weight-bold">Gas Price: </span>{this.state.transaction.gasPrice / 1000000000} Gwei
                        </Col>
                        <Col>
                          <span className="font-weight-bold">Block Number: </span>{this.state.transaction.blockNumber}
                        </Col>
                        <Col>
                          <span className="font-weight-bold">Nonce: </span><br />{this.state.transaction.nonce}
                        </Col>
                        <Col>
                          <span className="font-weight-bold">Data: </span>{this.state.transaction.input}
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
                      {this.state.transaction}
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

export default TransactionProofData;
