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

class LogProofData extends Component {
  state = { web3: null, logs: null };
  functionName = 'eth_getLogs';

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

    this.setState({ logs: 'Calling `web3.eth.getPastLogs(options);` and waiting for the response.' });

    if (window.JsonRpcLogs) window.JsonRpcLogs[this.functionName] = [];
    try {
      const options = {
        fromBlock: 9013558,
        toBlock: 9013558,
        address: ['0xb22c1c159d12461ea124b0deb4b5b93020e6ad16']
      };
      web3.eth.getPastLogs(options).then(
        (logs) => {
          console.log('Logs (Events):');
          console.log(logs);
          this.setState({ logs: logs });
        }, (error) => {
          console.log('Error happen when getting the Logs (Events)!');
          console.log(error);
          this.setState({ logs: 'Error happen when getting the Logs (Events)! Try refresh the page or open the Console for more information.' });
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
            <div>{this.state.logs ?
              typeof this.state.logs !== "string" ?
                <Card className="shadow border-0 bg-primary my-3">
                  <CardBody className="py-5">
                    <div className="display-4 text-white">The Data of the inquired logs:</div>
                    {this.state.logs.map((item, index) => (
                      <Container key={index}>
                        <Row>
                          <Col>
                            <span className="font-weight-bold">Block Number: </span><br />{this.state.logs[index].blockNumber}
                          </Col>
                          <Col>
                            <span className="font-weight-bold">Transaction Hash: </span>{this.state.logs[index].transactionHash}
                          </Col>
                          <Col>
                            <span className="font-weight-bold">Id: </span><br />{this.state.logs[index].id}
                            {/* To get the value in Ether {this.state.web3.utils.fromWei(this.state.logs.gasLimit.toString())} */}
                          </Col>
                          <Col>
                            <span className="font-weight-bold">Contract (address): </span><br />{this.state.logs[index].address}
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <span className="font-weight-bold">Topics:</span>                          
                            <ul>
                            {this.state.logs[index].topics.map((topic, topicsIndex) => (
                              <li key={topicsIndex}>
                                <span className="font-weight-bold">Topic ({topicsIndex}): </span>{this.state.logs[index].topics[topicsIndex]}
                              </li>
                            ))}
                            </ul>
                          </Col>
                        </Row>
                      </Container>
                    ))}
                  </CardBody>
                </Card>
                :
                <Container>
                  <UncontrolledAlert color="blue" fade={false}>
                    <span className="alert-inner--icon">
                      <i className="fa fa-code fa-lg" />
                    </span>
                    <span className="alert-inner--text ml-1 display-5">
                      {this.state.logs}
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

export default LogProofData;
