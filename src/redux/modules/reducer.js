import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { pagination } from 'violet-paginator';

import appBar from './appBar';
import cities from './cities';
import cakes from './cakes';
import baguettes from './baguettes';
import bakery from './bakery';
import search from './search';
import card from './card';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  pagination,
  appBar,
  cities,
  cakes,
  baguettes,
  bakery,
  search,
  card
});
