import React from 'react'
import UserCard from './user/UserCard'
import _ from 'lodash';

function UserList(props) {
    return (
        _.isEmpty(props.team)||props.team.usersList.length<=0?"":
        props.team.usersList.map((elem,index)=>(
            <UserCard id={index} key={index} username={elem.userName} userdesc={elem.userDesc}/>
        ))
    )
}

export default UserList
