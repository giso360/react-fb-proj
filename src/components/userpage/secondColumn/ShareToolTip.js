import React from 'react'
import ReactTooltip from 'react-tooltip'

export default function ShareToolTip() {
    return (
        <ReactTooltip place='right' effect='float' display='block' id="shareToolTip" border={true}>
            You can share the post only once !!!
            You cannot undo shares !!!!!
        </ReactTooltip>
    )
}
