import { VideoResponse, VideoCategoryResponse } from "../types"

export const getVideos = (): Promise<VideoResponse> => {
    return getVideoByFilter();
}

export const getVideosByCategory = (categoryId: string): Promise<VideoResponse> => {
    return getVideoByFilter(categoryId);
}


export const getVideoCategories = (): Promise<VideoCategoryResponse> => {
    return (gapi.client as any).youtube.videoCategories.list({
        "part": [
            "snippet",
        ],
        "regionCode": "IN",
    })
}

const getVideoByFilter = (categoryId: string = "", maxSize: number = 14): Promise<VideoResponse> => {
    return (gapi.client as any).youtube.videos.list({
        "part": [
            "snippet",
            "statistics",
            "contentDetails"
        ],
        "chart": "mostPopular",
        "regionCode": "IN",
        "maxResults": maxSize,
        "videoCategoryId": categoryId
    })
}