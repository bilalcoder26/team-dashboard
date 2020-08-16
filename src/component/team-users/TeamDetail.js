import React from 'react'
import CreateUserCard from '../Users/CreateUserCard'
import UserList from '../Users/UserList'
import { useSelector } from "react-redux";


    
function TeamDetail() {
    const team = useSelector(state => state.team.currTeam);

    return (
        <div className="panel panel-right">  
          <h3>{team.teamName||"Select a team"}</h3>
          <hr/>
          <div className="fl-container card-items"> 
            {team.teamName?<CreateUserCard/>:""}
            <UserList team={team}/>
          </div>
        </div>
    )
}

export default TeamDetail;
