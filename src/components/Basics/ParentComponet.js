import React, { useState } from "react";
import ChildComponet from './ChildComponet'
let ParentComponet = () => {
    let [ParentComponet, setParentComponet] = useState(
        {
            ParentComponetMesaage: 'i am from Parent componet',
            childMessage: ''
        }

    )
    let recieveData = (value) => {
        setParentComponet(
            {
                ...ParentComponet,
                childMessage: value
            }
        )
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h2>ParentComponet</h2>
                                <small>{ParentComponet.childMessage}</small>
                                <ChildComponet message={ParentComponet.ParentComponetMesaage} sendData={recieveData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ParentComponet;