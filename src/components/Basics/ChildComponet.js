import React, { useState } from "react";
let ChildComponet = ({ message, sendData }) => {
    let [ChildState, SetChildState] = useState(
        {
            childMessage: 'Iam from ChildComponet....'
        }
    )
    let clickbutton = () => {
        sendData(ChildState.childMessage)
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h3>ChildComponet</h3>
                                <small>{message}</small>
                                <br />
                                <button className="btn btn-primary " onClick={clickbutton}>Child to Parent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ChildComponet;