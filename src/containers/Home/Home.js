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
  handleClickCity = () => {
    if (this.state.searchText.length !== 0) {
      this.props.pushState(`/Alle/${this.state.searchText}`);
    }
  };
  render() {
    const styleSass = require('./Home.scss');
    return (
      <div className="col s12">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1>Skredderbakte kaker fra lokale bakere</h1>
              <AutoComplete
                className={styleSass.inputs}
                floatingLabelText="Same text, different values"
                searchText={this.state.searchText}
                onUpdateInput={this.handleUpdateInput}
                onNewRequest={searchText => this.handleClickCity(searchText)}
                filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                openOnFocus
                dataSource={this.props.data}
                maxSearchResults={10}
                dataSourceConfig={dataSourceConfig}
              />
              <RaisedButton onTouchTap={this.handleClickCity} label={'SØK'}/>
            </div>
            <div className="col s12" style={{marginTop: '30px'}}>
              <div className="row" style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
                {this.props.data &&
                  this.props.data.map((item, index) => {
                    return <div style={{margin: '5px'}} key={index}><RaisedButton onTouchTap={() => {this.props.pushState(`/Alle/${item.name}`);}} label={item.name}/></div>;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
