import { VideoResponse } from "../types"

export const getVideos = () : Promise<VideoResponse> => {
    return (gapi.client as any).youtube.videos.list({
        "part": [
            "snippet",
            "statistics",
            "contentDetails"
        ],
        "chart": "mostPopular",
        "regionCode": "IN",
        "maxResults": 14,
    })
}