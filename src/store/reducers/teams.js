import * as actionTypes from '../actions';
import _ from 'lodash';

const initialState = {
    teams: [],
    currTeam:{}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADDTEAM:
            return {
                ...state,
                teams: state.teams.concat({teamName: action.val, usersList:[]})
            }
        case actionTypes.SELECTTEAM:
            const teamObj = state.teams.find(obj=>(obj.teamName===state.currTeam.teamName));
            return {
                ...state,
                currTeam: {teamName: action.val, usersList: teamObj?teamObj.usersList:[]}
            }
        case actionTypes.ADDUSER:
            let users = _.cloneDeep(state.currTeam.usersList).concat(action.val);
            let teams = _.cloneDeep(state.teams);
            let team = {teamName: state.currTeam.teamName, usersList: users};
            teams[teams.findIndex(obj=>(obj.teamName===state.currTeam.teamName))]=team;
            return {
                ...state,
                currTeam: team,
                teams: teams
            }
        case actionTypes.DELETEUSER:
            let newUsers = _.cloneDeep(state.currTeam.usersList)
            newUsers.splice(action.val,1);
            teams = state.teams
            team = {teamName: state.currTeam.teamName, usersList: newUsers};
            alert(teams.findIndex(obj=>(obj.teamName===state.currTeam.teamName)));
            teams[teams.findIndex(obj=>(obj.teamName===state.currTeam.teamName))]=team;
            return {
                ...state,
                currTeam: team,
                teams:teams
                
            }
        default:
            break;
    }
    return state;
};

export default reducer;