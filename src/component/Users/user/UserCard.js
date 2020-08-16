import React from 'react'
import { useDispatch } from "react-redux";

import * as actionTypes from '../../../store/actions';  


    
function UserCard(props) {

    const dispatch = useDispatch();

    return (
        <div className="card card-delete-user">

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={props.username} disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea name="description" className="form-control" id="exampleInputPassword1" cols="10" rows="4" 
                        value={props.userdesc} disabled/>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger col-12" onClick={()=>{dispatch({type:actionTypes.DELETEUSER, val:props.id})}}>Delete User  -</button>
                </div>
        </div>
    )
}

export default UserCard
