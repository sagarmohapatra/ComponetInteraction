import React, { useState } from "react";
let CildComponet = ({ parentText, sendData }) => {
    let [start, setstart] = useState(
        {
            childText: ''
        }
    )
    let inputText = (event) => {
        setstart(
            {
                childText: event.target.value
            }
        )
        sendData(event.target.value)
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" name="" className="form-control" placeholder=" child text"
                                                    value={start.childText}
                                                    onChange={inputText} />
                                            </div>
                                        </form>
                                        <small>{parentText}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CildComponet;