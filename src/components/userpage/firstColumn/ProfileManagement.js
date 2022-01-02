import React, { useEffect, useRef } from 'react'

export default function ProfileManagement(props) {

    const ref = useRef()

    const buttonStyle = {
        marginLeft: '70px',
        marginRight: '70px',
        width: '100px'
    }

    useEffect(() => {
        ref.current.focus()
    }, [ref])

    return (
        <div className="panel panel-default" >
            <div className="panel-body">
                <h4>Edit profile</h4>
                <form>
                    <div className="form-group">
                        <input id="status" className="form-control" list='statuses' name="status" id='status' autoComplete='off' onChange={props.handleMaritalStatusChange} />
                        <datalist id="statuses">
                            <option value="Single" />
                            <option value="In a Relationship" />
                            <option value="Married" />
                            <option value="Polyamorous" />
                            <option value="Complicated" />
                            <option value="Other" />
                        </datalist>
                    </div>
                    <div className="form-group">
                        <input id="loc" className="form-control" type="text" name="location" placeholder="Location" autoComplete='off' onChange={props.handleLocationChange} />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-primary' style={buttonStyle} onClick={props.handleClick} ref={ ref }>Save</button>
                        <button className='btn btn-info' style={buttonStyle} onClick={props.handleClickCancel} ref={ ref }>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
