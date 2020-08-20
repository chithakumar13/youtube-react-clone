import { Video, VideoByCategory, VideoCategory, SearchResult } from "../types";

export interface IVideoState {
    isYoutubeClientLoaded  : boolean;
    videos : Video[];
    videosByCategories : VideoByCategory;
    categories : VideoCategory[];
    videosLoading : boolean;
    searchResults : SearchResult[];
}