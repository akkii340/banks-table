import React from 'react'
import './BlockEdge.css'
const BlockEdge =(props)=>{
    return(
        <div className="edge-container">
            {props.children}
        </div>
    )
}

export default React.memo(BlockEdge)