const LOAD_CITIES = 'LOAD_CITIES';
const LOAD_CITIES_SUCCESS = 'LOAD_CITIES_SUCCESS';
const LOAD_CITIES_FAIL = 'LOAD_CITIES_FAIL';

const initialState = {
  loaded: false
};

export default function notification(state = initialState, action = {}) {
  switch (action.type) {
      // load
    case LOAD_CITIES:
      return {
        ...state,
        loadingCities: true
      };
    case LOAD_CITIES_SUCCESS:
      return {
        ...state,
        loadingCities: false,
        loaded: true,
        data: action.result,
        errorLoadCities: null
      };
    case LOAD_CITIES_FAIL:
      return {
        ...state,
        loadingCities: false,
        loaded: false,
        data: null,
        errorLoadCities: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.sities && globalState.sities.loaded;
}

export function load() {
  return {
    types: [LOAD_CITIES, LOAD_CITIES_SUCCESS, LOAD_CITIES_FAIL],
    promise: (client) => client.get('/city/all')
  };
}
