import React, { useState } from "react";
import ChildComponet from './ChildComponet'
let ParentCard = () => {
    let [start, setstart] = useState(
        {
            parentText: '',
            childText: ''
        }
    )
    let updateinput = (event) => {
        setstart(
            {
                ...start,
                parentText: event.target.value
            }
        )
    }
    let receiveData = (value) => {
        setstart(
            {
                ...start,
                childText: value
            }
        )
    }
    return (
        <React.Fragment>
            <div className="continer mt-3">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="parent text"
                                                    value={start.parentText}
                                                    onChange={updateinput} />
                                            </div>
                                        </form>
                                        <small >{start.childText}</small>
                                    </div>
                                    <ChildComponet parentText={start.parentText} sendData={receiveData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}
export default ParentCard;
