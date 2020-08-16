import React from 'react';
import { useDispatch } from "react-redux";

import * as actionTypes from '../../../store/actions';  

function Team(props) {

    const dispatch = useDispatch();

    return (
        <div className="info-strip">
            <div className="info-strip-body" onClick={()=>{dispatch({type:actionTypes.SELECTTEAM, val:props.team})}}>
                {props.team}
            </div>
            <div className="info-strip-end"></div>
        </div>
    )
}

export default Team;
