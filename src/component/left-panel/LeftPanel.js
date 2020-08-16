import React from 'react'
import TeamList from '../teams/TeamList'

function LeftPanel() {
    return (
        <div className="panel panel-left">
                
            <h5>Teams</h5>    
             
            <TeamList />
        
        </div>
    )
}

export default LeftPanel;
