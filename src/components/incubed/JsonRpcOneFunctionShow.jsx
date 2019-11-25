import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class JsonRpcOneFunctionShow extends React.Component {
    state = {
        isOpen: false
    };
    constructor(props) {
        super(props);
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <div className="pb-3">
                <Button color="primary" onClick={this.toggle} >{this.props.item.Url.slice(this.props.item.Url.indexOf('://') + 3)}</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <Card>
                        <CardBody>
                            <div><div> Incubed Server: {this.props.item.Url} </div>
                                <div>
                                    <pre className="prettyprint">
                                        Request:
                                            {JSON.stringify(this.props.item.Request, null, 4)} {window.PR.prettyPrint()}
                                    </pre>
                                </div>
                                <div>
                                    {typeof this.props.item.Response !== "string" ?
                                        <pre className="prettyprint">
                                            Response:
                                                {JSON.stringify(this.props.item.Response, null, 4)} {window.PR.prettyPrint()}
                                        </pre> :
                                        <div>Response: {this.props.item.Response}</div>
                                    }
                                </div>
                                <br />
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}
export default JsonRpcOneFunctionShow;