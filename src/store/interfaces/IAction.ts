export interface IAction {
    type : ActionTypes,
    payload : any
}

export enum ActionTypes{
    YoutubeClientLoaded
}