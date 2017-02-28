import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import {isLoaded as isLoadCities, load as loadCities} from '../../redux/modules/cities';
import {connect} from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import {push} from 'react-router-redux';

const dataSourceConfig = {
  text: 'name',
  value: 'id',
};

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    console.log('loading');
    const promises = [];

    if (!isLoadCities(getState())) {
      promises.push(dispatch(loadCities()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    data: state.cities.data,
    loadedCities: state.cities.loaded
  }),
  {pushState: push})
export default class Home extends React.Component {
  static propTypes = {
    // react-router-redux
    pushState: React.PropTypes.func.isRequired,
    // cities
    data: React.PropTypes.array,
    loadedCities: React.PropTypes.bool.isRequired
  };
  state = {
    searchText: '',
  };
  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };
  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };
  render() {
    return (
      <div className="col s12" style={{marginTop: '60px'}}>
        <div className="container">
          <h1>Skredderbakte kaker fra lokale bakere</h1>
          <AutoComplete
            floatingLabelText="Same text, different values"
            searchText={this.state.searchText}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
            filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
            openOnFocus
            dataSource={this.props.data}
            maxSearchResults={10}
            dataSourceConfig={dataSourceConfig}
          />
          <RaisedButton onTouchTap={() => this.props.pushState(`/cities/${this.state.searchText}`)} label={'SØK'}/>
        </div>
      </div>
    );
  }
}
