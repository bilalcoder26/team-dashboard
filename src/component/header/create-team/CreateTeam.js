import React from 'react'
import { useDispatch } from "react-redux";

import * as actionTypes from '../../../store/actions';


function CreateTeam() {

    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({type:actionTypes.ADDTEAM, val:evt.target.optName.value});

    }
    
    return (
        <form className="create-team-form form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-4">
                    <label htmlFor="inlineFormInputName2">Select Type</label>
                    <select className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" required>
                        <option value="" disabled hidden>Choose Any...</option>
                        <option value="Team">Team</option>
                    </select>
                </div>
                <div className="col-4">
                    <label htmlFor="inlineFormInputGroupUsername2">Team Name</label>
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" name="optName" placeholder="Team Name" required/>
                </div>
                <div className="col-3">
                    <button id="btn-create-team" type="submit" className="btn btn-warning mb-2 ">Create</button>
                </div>
            </div> 
        </form>
    )
}

export default CreateTeam;
