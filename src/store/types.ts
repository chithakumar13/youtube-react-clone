export type VideoResponse = gapi.client.Response<gapi.client.youtube.VideoListResponse>

export type Video = gapi.client.youtube.Video

export type VideoCategoryResponse = gapi.client.Response<gapi.client.youtube.VideoCategoryListResponse>

export type VideoCategory = gapi.client.youtube.VideoCategory

export type VideoByCategory = { [Id : string] : Video[]}

