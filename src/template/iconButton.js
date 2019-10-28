import React from 'react'
import If from '../util/if'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default props=>(
    <If teste={!props.hide}>
        <button className={'btn btn-'+props.estilo} onClick={props.onClick} hidden={props.hidden}>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    </If>
)