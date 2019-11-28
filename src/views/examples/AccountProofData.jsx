
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

class AccountProofData extends Component {
  state = { web3: null, account: '0x00DaA9a2D88BEd5a29A6ca93e0B7d860cd1d403F', accountBalance: null };
  functionName = 'eth_getBalance';
  loadingMessage = 'Calling `web3.eth.getBalance(\'' + this.state.account + '\');` and waiting for the response.';

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

    window.JsonRpcLogs[this.functionName] = [];
    try {
      web3.eth.getBalance(this.state.account).then(
        (accountBalance) => {
          console.log('Account Balance:');
          console.log(accountBalance);
          this.setState({ accountBalance: this.state.web3.utils.fromWei(accountBalance) });
          console.log(typeof this.state.accountBalance);
          console.log(typeof accountBalance);
          console.log(this.state.web3.utils.fromWei);
        }, (error) => {
          console.log('Error happen when getting the Account Balance!');
          console.log(error);
          this.setState({ accountBalance: 'Error happen when getting the Account Balance! Try refresh the page or open the Console for more information.' });
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
            <div>{this.state.accountBalance ?
              <Card className="shadow border-0 bg-primary my-3">
                <CardBody className="py-5">
                  <div className="display-4 text-white">The balance of "{this.state.account}": </div>
                  <Container>
                    <Row>
                      <Col>
                        {/* <span className="font-weight-bold">Account Balance: </span><br />. */}
                        {this.state.accountBalance} Ether
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
                    {this.loadingMessage}
                  </span>
                </UncontrolledAlert>
              </Container>
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

export default AccountProofData;
