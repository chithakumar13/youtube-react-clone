import { VideoResponse, VideoCategoryResponse, SearchResponse } from "../types"

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

export const searchVideo = (query: string, nextPageToken: string | null, maxResults: number = 14): Promise<SearchResponse> => {
    return (gapi.client as any).youtube.search.list({
        "part": [
            "snippet",
            "id",
        ],
        "q": query,
        "regionCode": "IN",
        "maxResults": maxResults,
        "pageToken": nextPageToken,
        "type": "video"
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