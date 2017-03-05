const LOAD_CAKES = 'LOAD_CAKES';
const LOAD_CAKES_SUCCESS = 'LOAD_CAKES_SUCCESS';
const LOAD_CAKES_FAIL = 'LOAD_CAKES_FAIL';
const LOAD_CAKE = 'LOAD_CAKE';
const LOAD_CAKE_SUCCESS = 'LOAD_CAKE_SUCCESS';
const LOAD_CAKE_FAIL = 'LOAD_CAKE_FAIL';

const initialState = {
  loadedCakes: false,
  loadedCake: false
};

export default function cakes(state = initialState, action = {}) {
  switch (action.type) {
      // load cakes
    case LOAD_CAKES:
      return {
        ...state,
        loadingCakes: true
      };
    case LOAD_CAKES_SUCCESS:
      return {
        ...state,
        loadingCakes: false,
        loadedCakes: true,
        data: action.result,
        errorLoadCakes: null
      };
    case LOAD_CAKES_FAIL:
      return {
        ...state,
        loadingCakes: false,
        loadedCakes: false,
        data: null,
        errorLoadCakes: action.error
      };
    // load cake
    case LOAD_CAKE:
      return {
        ...state,
        loadingCake: true
      };
    case LOAD_CAKE_SUCCESS:
      return {
        ...state,
        loadingCake: false,
        loadedCake: true,
        cake: action.result,
        errorLoadCake: null
      };
    case LOAD_CAKE_FAIL:
      return {
        ...state,
        loadingCake: false,
        loadedCake: false,
        cake: null,
        errorLoadCake: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.cakes && globalState.cakes.loaded;
}

export function load(city, count, type) {
  return {
    types: [LOAD_CAKES, LOAD_CAKES_SUCCESS, LOAD_CAKES_FAIL],
    promise: (client) => client.get(`/search?city=${city}&count=${count}&type=${type}`)
  };
}

export function loadCake(cakeId) {
  return {
    types: [LOAD_CAKE, LOAD_CAKE_SUCCESS, LOAD_CAKE_FAIL],
    promise: (client) => client.get(`/search/get-cake?id=${cakeId}`)
  };
}
