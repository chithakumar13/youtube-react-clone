import { Video, VideoByCategory, VideoCategory } from "../types";

export interface IVideoState {
    isYoutubeClientLoaded  : boolean;
    videos : Video[];
    videosByCategories : VideoByCategory;
    categories : VideoCategory[];
    videosLoading : boolean;
}