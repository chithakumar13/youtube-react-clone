import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { params, SearchResult } from '../../store/types';
import { getParamValue } from '../../utils/uri';
import { connect } from 'react-redux';
import { IVideoState } from '../../store/interfaces/IVideoState';
import { SearchVideos } from '../../store/action-creators/action-creator';

interface ISearch extends RouteComponentProps<params> {
    searchResults: SearchResult[];
    youtubeClientLoaded: boolean;
    searchVideo(query: string, nextPageToken: string | null): void
}

const Search = (props: ISearch) => {

    console.log(JSON.stringify(props.searchResults));
    
    const userQuery: string | null = getParamValue(props.location, 'search_query')

    useEffect(() => {
        if (props.youtubeClientLoaded && userQuery) {
            props.searchVideo(userQuery, null)
        }
    }, [props.youtubeClientLoaded, userQuery])

    return <div style={{ marginTop: '500px' }}>Search Component - {userQuery}</div>
}

const mapStateToProps = (state: IVideoState) => {
    return {
        searchResults: state.searchResults,
        youtubeClientLoaded: state.isYoutubeClientLoaded
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        searchVideo: (query: string, nextPageToken: string | null) => dispatch(SearchVideos(query, nextPageToken))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));