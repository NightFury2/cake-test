const LOAD_BAGUETTES = 'LOAD_BAGUETTES';
const LOAD_BAGUETTES_SUCCESS = 'LOAD_BAGUETTES_SUCCESS';
const LOAD_BAGUETTES_FAIL = 'LOAD_BAGUETTES_FAIL';

const initialState = {
  loaded: false
};

export default function baguettes(state = initialState, action = {}) {
  switch (action.type) {
      // load
    case LOAD_BAGUETTES:
      return {
        ...state,
        loadingBaguettes: true
      };
    case LOAD_BAGUETTES_SUCCESS:
      return {
        ...state,
        loadingBaguettes: false,
        loaded: true,
        data: action.result,
        errorLoadBaguettes: null
      };
    case LOAD_BAGUETTES_FAIL:
      return {
        ...state,
        loadingBaguettes: false,
        loaded: false,
        data: null,
        errorLoadBaguettes: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.baguettes && globalState.baguettes.loaded;
}

export function load(city, count, type) {
  return {
    types: [LOAD_BAGUETTES, LOAD_BAGUETTES_SUCCESS, LOAD_BAGUETTES_FAIL],
    promise: (client) => client.get(`/search?city=${city}&count=${count}&type=${type}`)
  };
}
