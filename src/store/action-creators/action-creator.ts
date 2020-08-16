import { ActionTypes } from "../interfaces/IAction"
import { getVideos } from "../api/api"
import { VideoResponse } from "../types"

export const YoutubeClientLoaded = () => {
    return {
        type : ActionTypes.YoutubeClientLoaded
    }
}

export const LoadPopularVideos = () => {
    return (dispatch : any) => {
        getVideos().then((data : VideoResponse) => {
            dispatch({
                type : ActionTypes.LoadPopularVideos,
                payload : data.result.items
            })
        })
    }
}