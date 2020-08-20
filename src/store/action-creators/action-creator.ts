import { ActionTypes } from "../interfaces/IAction"
import { getVideos, getVideoCategories, getVideosByCategory, searchVideo } from "../api/api"
import { VideoResponse, VideoCategoryResponse, VideoCategory, VideoByCategory, SearchResponse } from "../types"

export const YoutubeClientLoaded = () => {
    return {
        type: ActionTypes.YoutubeClientLoaded
    }
}

export const VideosLoading = () => {
    return {
        type: ActionTypes.VideosLoading
    }
}


export const LoadPopularVideos = () => {
    return (dispatch: any) => {
        getVideos().then((data: VideoResponse) => {
            dispatch({
                type: ActionTypes.LoadPopularVideos,
                payload: data.result.items
            })
        })
    }
}

export const GetCategories = () => {
    return (dispatch: any) => {
        getVideoCategories().then((data: VideoCategoryResponse) => {
            dispatch({
                type: ActionTypes.LoadCategories,
                payload: data.result.items?.filter((item) => item.snippet?.assignable)
            })
        })
    }
}

export const GetVideosByCategories = (videoCategories: VideoCategory[]) => {
    return (dispatch: any) => {
        let promises: Promise<VideoResponse>[] = [];

        videoCategories.forEach((item: VideoCategory) => {
            promises.push(getVideosByCategory(item.id!));
        })

        Promise.all(promises).then((data: VideoResponse[]) => {

            let result: VideoByCategory = {};

            data.forEach((item: VideoResponse, index: number) => {
                if (item.result.items!.length > 0) {
                    result[videoCategories[index].snippet?.title!] = item.result.items!;
                }
            })

            dispatch({
                type: ActionTypes.LoadVideosByCategories,
                payload: result
            })
        })
    }
}


export const SearchVideos = (query: string, nextPageToken: string  | null) => {
    return (dispatch: any) => {
        searchVideo(query, nextPageToken).then((data: SearchResponse) => {
            dispatch({
                type: ActionTypes.SearchVideos,
                payload: data.result.items
            })
        })
    }
}