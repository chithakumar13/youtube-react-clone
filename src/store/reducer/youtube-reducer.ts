import { IVideoState } from "../interfaces/IVideoState";
import { IAction, ActionTypes } from "../interfaces/IAction";

let initialState  : IVideoState={
    isYoutubeClientLoaded : false
}

export const YoutubeReducer = (currentState : IVideoState = initialState , action : IAction) => {
    if(action.type === ActionTypes.YoutubeClientLoaded){
        let state = {...currentState};
        state.isYoutubeClientLoaded = true;
        return state;
    }

    return currentState;
}