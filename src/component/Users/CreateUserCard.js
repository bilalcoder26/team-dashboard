import React from 'react';
import { useDispatch } from "react-redux";

import * as actionTypes from '../../store/actions';

function CreateUserCard() {
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({type:actionTypes.ADDUSER, val:{userName:evt.target.username.value, userDesc:evt.target.description.value}});
    }

    return (
        <div className="card card-create-user">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea name="description" className="form-control" id="exampleInputPassword1" cols="30" rows="5" defaultValue="" required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-warning col-12">Create User  +</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUserCard
