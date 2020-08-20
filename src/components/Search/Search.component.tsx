import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { params } from '../../store/types';
import { getParamValue } from '../../utils/uri';

interface ISearch extends RouteComponentProps<params> {

}

const Search = (props : ISearch) => {
    return <div style={{ marginTop: '500px' }}>Search Component - {getParamValue(props.location,'search_query')}</div>
}

export default withRouter(Search);