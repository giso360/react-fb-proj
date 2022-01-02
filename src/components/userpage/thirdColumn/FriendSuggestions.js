import React, { useState } from 'react'

export default function FriendSuggestions(props) {
    
    const [sugs, setSugs] = useState(props.frs)

    const items = sugs.map((s, i) => {
        return (
            <>
                <option value={s} />
            </>
        )
    })
   
    return (
        <div className="form-group">
            <input id="status" className="form-control" list='statuses' name="status" autoComplete='off' onChange={props.handleNewFriendAdded} />
            <datalist id="statuses">
                { items }
            </datalist>
        </div>
    )



}
