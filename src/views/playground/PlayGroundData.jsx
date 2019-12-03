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
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
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
    const request = { "jsonrpc": "2.0", "id": 1, "method": "eth_getTransactionByHash", "params": ["0xfc2786e12ba6f9f25587e618a0fbc407bf34afce137a1f695fcda3a1dacbe3eb"], "in3": { "latestBlock": 6, "verification": "proofWithSignature", "signatures": ["0x945F75c0408C0026a3CD204d36f5e47745182fd4", "0x45d45e6Ff99E6c34A235d263965910298985fcFe"], "version": "2.0.0" } };
    const response = { "jsonrpc": "2.0", "id": 1, "result": { "blockHash": "0x3ed2c49fd7cf14c078262507b8fcb4e0351c581026444ce204d8ca4e488680f1", "blockNumber": "0x8304c2", "from": "0x62ece170a83997d1ae948bcf52e57b215cdf67b8", "gas": "0x5208", "gasPrice": "0x484548200", "hash": "0xfc2786e12ba6f9f25587e618a0fbc407bf34afce137a1f695fcda3a1dacbe3eb", "input": "0x", "nonce": "0x1508", "r": "0x97d539d2057b7c7b31286d5a3f22f29b40c0b49e38f0b67d144e0ef8d5f41c3c", "s": "0x21bd76255a0ac4aebdbb9599b267d53dbd2ce8dae6115ab183f1da8d2d46ee46", "to": "0x8e343eeee595c1cb230fdfdd80ab0f3de1bf1e45", "transactionIndex": "0x58", "v": "0x1c", "value": "0xe35fa931a0000" }, "in3": { "proof": { "type": "transactionProof", "block": "0xf9021aa04138f1cea840b64e4bf0b1a5018c283e40ab0953f454ff6f971d2e268d93e58ba01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347945a0b54d5dc17e0aadc383d2db43b0a0d3e029c4ca00138e529d86adeba29f3e72ba3a05d28531db1cc069a400b83d51e81adbead86a0431b23e5f08cb9458fdc88dc4ba134b02b7bd5d4dc452c3df1f0343117795021a0061a850cc79c9e7b5fc5b1d87467bb704046bb8a3ca0defe912723c41fa14a9bb901000804020c000228080088824010080850c0003090003b4400016082c09002002008484228200000400504404106282100820080070c41040302a0c100c0522215002828008101c0631094360a048a44012652260404810842054b0104804010888c0041128c08020118c4802020e0010414081000080821880b48233818000904060104500011803000000045240001904000094948102140211200c80415007240820002118074c0200102802080000020140008445d0a0208a022007b080860229104020324080842228181868904000c48e001040d0111014192a830632400609021c80300201a088344141c00010000948a30700100440684042c100202808708982bcb3dd566838304c283985d3883983526845d84d311995050594520737061726b706f6f6c2d6574682d636e2d687a33a0175d32b645f11a4ad83d1ca14ffb18d5a15a43c6d23543d61c8b00fe345fb0018813915ca013013d22", "merkleProof": ["0xf8f1a08be386344639b11339aee8eb17b12c1cf383bff8da5d0119db66d4de1038ab0ca0c6f8f1ec9534582e79d91fae3effdb09207e96a233e02f5c375c6d45552cd12ca04a09160daaebe876d0bfbcebebf45653ac75dea33c56a7138fb6dbcbca1b70f8a067d7b9fd2d6699f117aa79ab971037d3b4b8ad8c3f2eea67e6b694c235e8adbba0545e813f128ab66b5d68ab461930ea92117edb042da68d89ee46d36f4bd43504a0dcd47d1f7929d21f8f74bc4a3a266317f97c5c03704b6fc53372bdf786fb070f8080a002ad87e5a1de624b49b6368577ee99cfa992d827c03c7ed8ac80a98574cd5a218080808080808080", "0xf90131a0704ea6600865281e6966d503d576b03cc566dd595013e48de934a055b9d3e170a0dd6b1894ac99ae44e7be9b43ab08a6bcacc9ead227339e18c9d96cc38527cd94a0ecdb5bed3de86425e91a3f28d83f87605a1bf3a8b2a6f16722123b4c85dcb94fa0d4c69ab5efbd91827777b4bde589ffc2a3570ba6349ab9b9eae3d57637afb3f7a045fe5e2c100d58a25b69c8791f82ea8aa01c9323b7b4fa1a1e48a8b04d3f2c72a0486e8e51a3bceb72e8195038f166d08e3c32ef70505cd156cb22f43b0a7e87a2a08ac3fabb9231999f1eb34c488b09e7ab4406cf95d62880ab88153628305399c1a02baf2f57e114977f7e735fe180ec36a502bbeccf525fcdf83e8cbd4ec38195daa02d3b6c835d1f35fc73912b5fa9f5b2f65ef90317bc02ff5173536765b93bb8848080808080808080", "0xf87220b86ff86d821508850484548200825208948e343eeee595c1cb230fdfdd80ab0f3de1bf1e45870e35fa931a0000801ca097d539d2057b7c7b31286d5a3f22f29b40c0b49e38f0b67d144e0ef8d5f41c3ca021bd76255a0ac4aebdbb9599b267d53dbd2ce8dae6115ab183f1da8d2d46ee46"], "txIndex": 88, "signatures": [{ "blockHash": "0x3ed2c49fd7cf14c078262507b8fcb4e0351c581026444ce204d8ca4e488680f1", "block": 8586434, "r": "0xed066465e269ecbe8c044f79e18f00b5a546ea3e3b96b20b66290aa3e53eed8e", "s": "0x6cad554e88f09e24adc220eae6c9453d0409293b8abe44bbdd79977ffd305465", "v": 27, "msgHash": "0xf164f1bbe073469935881b186bef002c98ef11102b7ed6c1271c0fc9e907135c" }, { "blockHash": "0x3ed2c49fd7cf14c078262507b8fcb4e0351c581026444ce204d8ca4e488680f1", "block": 8586434, "r": "0xd5b27711311392ecb744ddda14ade13f5307db20222128ca8fe088bdaba9091f", "s": "0x2a584e9dd8284392dda463ee526f9d9b2217db490b5d89691828005e11eeba0a", "v": 28, "msgHash": "0xf164f1bbe073469935881b186bef002c98ef11102b7ed6c1271c0fc9e907135c" }] }, "version": "2.0.0", "currentBlock": 9037687, "lastValidatorChange": 0, "lastNodeList": 8669495, "execTime": 442, "rpcTime": 307, "rpcCount": 2 } };

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
