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

class CallProofData extends Component {
  state = { web3: null, account: '0x2819c144d5946404c0516b6f817a960db37d4929', callResult: null };
  loadingMessage = 'Calling `web3.eth.getBalance(\'' + this.state.account + '\');` and waiting for the response.';
  functionName = 'eth_call';

  componentDidMount = async () => {

    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3(true);
      // Set web3 to the state.
      this.setState({ web3: web3 }, this.getWithIn3);



      // calling a function
      var abi = [{ "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
      { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "decimals", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }]
      var contractAddr = "0xdac17f958d2ee523a2206206994597c13d831ec7"
      var contract = new web3.eth.Contract(abi, contractAddr);

      // Getting the 'decimals' of the smart contract will make a call to 'eth_call'.
      //  But for simplicity and easiness, we will not show those calls in the UI. To not be confused with the 'balanceOf'.
      var decimals = await contract.methods.decimals().call(
        {
          gas: 47000,
          gasPrice: 0,
          from: '0x71c24b85086928930f5dC2a6690574E7016C1A7F'
        }
      );
      
      new InterceptAndLog().incerceptJsonRpcCalls(this.functionName);

      var erc20Bal = await contract.methods.balanceOf(this.state.account).call(
        {
          gas: 47000,
          gasPrice: 0,
          from: '0x71c24b85086928930f5dC2a6690574E7016C1A7F'
        }
      )
      console.log('Balance of an ERC20 token (USDT) for the account ' + this.state.account + ':')
      var adjustedBalance = erc20Bal / Math.pow(10, decimals);
      console.log(adjustedBalance);
      this.setState({ callResult: adjustedBalance });

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <section className="section pb-300 bg-gradient-warning text-white">
          <Container>
            <div>{this.state.callResult ?
              <Card className="shadow border-0 bg-primary my-3">
                <CardBody className="py-5">
                  <div className="display-4 text-white">The balance of "{this.state.account}": </div>
                  <Container>
                    <Row>
                      <Col>
                        {/* <span className="font-weight-bold">Account Balance: </span><br />. */}
                        {this.state.callResult} USDT
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
            {/* There is also internal calls to `eth_getBlockByNumber` but we do not show them to not make confusion. 
              However, to see them, just uncomment the next line. */}
            {/* <JsonRpcMultiFunctionsShow functionName={'eth_getBlockByNumber'} /> */}
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

export default CallProofData;
