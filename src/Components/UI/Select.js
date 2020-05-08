import React from 'react'
import {NativeSelect} from "@material-ui/core";
import './Select.css'
const Select = (props)=>
    <NativeSelect onChange={props.onChange} id={props.id} className="select-item" value={props.value}>
            { props.option.map(opt =><option key={opt} value={opt}>{opt}</option>)}
    </NativeSelect>

export default Select