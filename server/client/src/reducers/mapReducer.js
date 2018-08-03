import {MAP_LOADED} from '../actions/mapActions'

const initialState = {
    mapURL: ''
}
export default function(state = initialState, action){
    switch(action.type){
        case MAP_LOADED:
            return {
                ...state,
                mapURL: action.payload.data
            }
        default:
            return state

    }
}