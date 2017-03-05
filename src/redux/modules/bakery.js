const LOAD_BAKERY = 'LOAD_BAKERY';
const LOAD_BAKERY_SUCCESS = 'LOAD_BAKERY_SUCCESS';
const LOAD_BAKERY_FAIL = 'LOAD_BAKERY_FAIL';

const initialState = {
  loaded: false
};

export default function bakery(state = initialState, action = {}) {
  switch (action.type) {
      // load
    case LOAD_BAKERY:
      return {
        ...state,
        loadingBakery: true
      };
    case LOAD_BAKERY_SUCCESS:
      return {
        ...state,
        loadingBakery: false,
        loaded: true,
        data: action.result,
        errorLoadBakery: null
      };
    case LOAD_BAKERY_FAIL:
      return {
        ...state,
        loadingBakery: false,
        loaded: false,
        data: null,
        errorLoadBakery: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.bakery && globalState.bakery.loaded;
}

export function load(city) {
  return {
    types: [LOAD_BAKERY, LOAD_BAKERY_SUCCESS, LOAD_BAKERY_FAIL],
    promise: (client) => client.get(`/bakery/city-bakeries?cityName=${city}`)
  };
}
