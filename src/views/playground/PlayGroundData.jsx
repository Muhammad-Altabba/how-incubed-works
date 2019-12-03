import React, { Component } from "react";

import In3Client from 'in3'

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Button
} from "reactstrap";

import JsonRpcMultiFunctionsShow from "../../components/incubed/JsonRpcMultiFunctionsShow.jsx";
import InterceptAndLog from "../../InterceptAndLog.js";
import getWeb3 from "../../getWeb3";
import BehindTheScenes from "components/incubed/BehindTheScenes.jsx";

class PlayGroundData extends Component {
  state = {
    web3: null, transaction: null, transactionHash: '0xfc2786e12ba6f9f25587e618a0fbc407bf34afce137a1f695fcda3a1dacbe3eb',
    sampleRequest: '', sampleResponse: '',
    userRequest: '', userResponse: '',
    resultOfCheck: '', isUserInputVerified: true
  };
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
    
    this.setState({ transaction: 'Calling `web3.eth.getTransaction(\'' + this.state.transactionHash + '\');` and waiting for the response.' });

    window.JsonRpcLogs[this.functionName] = [];
    try {
      //getting Transaction
      web3.eth.getTransaction(this.state.transactionHash).then(
        (transaction) => {
          console.log('Transaction for the transaction ' + this.state.transactionHash + ':');
          console.log(transaction);
          this.setState({ transaction: transaction });

          const request = JSON.stringify(window.JsonRpcLogs[this.functionName][0].Request, null, 4);
          const response = JSON.stringify(window.JsonRpcLogs[this.functionName][0].Response, null, 4);

          this.setState({
            transaction: transaction,
            sampleRequest: request, sampleResponse: response,
            userRequest: request, userResponse: response
          });

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
  checkUserManipulation = async () => {
    let request = {};
    let response = {};
    try {
      request = JSON.parse(this.state.userRequest);
    } catch (error) {
      console.log('Not valid JSON for Request!');
      this.setState({ resultOfCheck: 'Not a valid JSON for the Request! Correct your JSON or refresh the page!', isUserInputVerified: false });
      return;
    }

    try {
      response = JSON.parse(this.state.userResponse);
    } catch (error) {
      console.log('Not valid JSON for Response!');
      this.setState({ resultOfCheck: 'Not a valid JSON for the Response! Correct your JSON or refresh the page!', isUserInputVerified: false });
      return;
    }

    try {
      console.log('Verify on the Fly:');
      console.log(await new In3Client().verifyResponse(request, response));

      this.setState({ resultOfCheck: 'The given response is valid for the given request.', isUserInputVerified: true });
    } catch (error) {
      console.log(error.message)
      this.setState({ resultOfCheck: error.message, isUserInputVerified: false });
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
                  <Alert color="blue" fade={false}>
                    <span className="alert-inner--icon">
                      <i className="fa fa-code fa-lg" />
                    </span>
                    <span className="alert-inner--text ml-1 display-5">
                      {this.state.transaction}
                    </span>
                  </Alert>
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
          {/* <BehindTheScenes /> */}

          <Container>
            <Form>
              <Card className="bg-gradient-gray-dark shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col>
                      <div className="display-3">
                        Try it yourself!
                      </div>
                      <p className="lead text-white mt-3">
                        Bellow is inistially a real captured request and response between Incubed Client and Incubed Server.
                      </p>
                      <p className="lead text-white mt-3">
                        Feel free to change (manipulate) the request and response to double check how Incubed Client does a validation on its side such that no need to trust the Node (the Server).
                      </p>
                      <p>Note: Incubed Servers (Nodes) cannot provide fake signatures since there are always <strong>`watch-dogs`</strong> who will be pleased to get the node's deposits in such a case (anyone can act as a watchdog!).</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="display-4"> Request
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="requestTextarea"
                        placeholder="Write or manipulate the request here ..."
                        value={this.state.userRequest}
                        rows="15"
                        type="textarea"
                        onChange={(event) => this.setState({ userRequest: event.target.value })}
                      />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col className="display-4"> Response
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="responseTextarea"
                        placeholder="Write or manipulate the response here ..."
                        value={this.state.userResponse}
                        rows="25"
                        type="textarea"
                        onChange={(event) => this.setState({ userResponse: event.target.value })}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-2 pt-4">
                      <Button
                        className="btn-icon mb-3 mb-sm-3"
                        color="warning"
                        size="lg"
                        onClick={this.checkUserManipulation}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-flask" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="mr-1">Check!</span>
                        </span>
                      </Button>
                    </Col>
                    <Col className="pt-3">
                      {this.state.isUserInputVerified ?
                        this.state.resultOfCheck ?
                          <Alert color="success" fade={false}>
                            <span className="alert-inner--icon">
                              <i className="ni ni-like-2" />
                            </span>
                            <span className="alert-inner--text ml-1">
                              <strong>Success!</strong> {this.state.resultOfCheck ?
                                this.state.resultOfCheck
                                : 'Change the texts above and press `CHECK!`'}
                            </span>
                          </Alert >
                          :
                          <Alert color="warning" fade={false}>
                            <span className="alert-inner--icon">
                              <i className="fa fa-exclamation" />
                            </span>
                            <span className="alert-inner--text ml-1">
                              <strong>
                                Change the texts above and press `CHECK!`
                              </strong>
                            </span>
                          </Alert >
                        :
                        <Alert color="danger" fade={false}>
                          <span className="alert-inner--icon">
                            <i className="ni ni-support-16" />
                          </span>
                          <span className="alert-inner--text ml-1">
                            <strong>Error!</strong> {this.state.resultOfCheck}
                          </span>
                        </Alert >
                      }
                    </Col>
                  </Row>
                </div>
              </Card>
            </Form>
          </Container>

        </section>
      </>
    );
  }
}

export default PlayGroundData;
