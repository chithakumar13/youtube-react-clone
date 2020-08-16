import { IVideoState } from "../interfaces/IVideoState";
import { IAction, ActionTypes } from "../interfaces/IAction";

let initialState: IVideoState = {
    isYoutubeClientLoaded: false,
    videos: [],
}

export const YoutubeReducer = (currentState: IVideoState = initialState, action: IAction) => {
    if (action.type === ActionTypes.YoutubeClientLoaded) {
        let state = { ...currentState };
        state.isYoutubeClientLoaded = true;
        return state;
    }
    else if (action.type === ActionTypes.LoadPopularVideos) {
        let state = { ...currentState };
        state.videos = action.payload;
        return state;
    }
    return currentState;
}