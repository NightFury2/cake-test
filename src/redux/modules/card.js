// Id
const ADD_CAKE_INFO_TO_PRICE = 'ADD_CAKE_INFO_TO_PRICE';


const SET_CAKE_SIZE_ID = 'SET_CAKE_SIZE_ID';
const SET_CAKE_FILLING_ID = 'SET_CAKE_FILLING_ID';
const SET_CAKE_MOTIVE_PRICE = 'SET_CAKE_MOTIVE_PRICE';
const SET_CAKE_TEXT_PRICE = 'SET_CAKE_TEXT_PRICE';
const SET_CAKE_EXTRA_PRICE = 'SET_CAKE_EXTRA_PRICE';
const SET_CAKE_MESSAGE_BAKERY = 'SET_CAKE_MESSAGE_BAKERY';
const SET_CAKE_COUNT = 'SET_CAKE_COUNT';
const SET_CAKE_DEFAULT = 'SET_CAKE_DEFAULT';
// Step
const SET_CAKE_SIZE_STEP = 'SET_CAKE_SIZE_STEP';
const SET_CAKE_FILLING_STEP = 'SET_CAKE_FILLING_STEP';
const SET_CAKE_MOTIVE_STEP = 'SET_CAKE_MOTIVE_STEP';
const SET_CAKE_TEXT_STEP = 'SET_CAKE_TEXT_STEP';

const initialState = {
  cakeSizeId: 0,
  cakeFillingId: 0,
  count: 1,
  listCakePrice: [],
  cakeMotivePrice: {
    files: [],
    price: 0
  },
  cakeTextPrice: {
    text: '',
    price: 0
  },
  extraFillPrice: {
    cakeExtensionId: 0,
    name: '',
    price: 0
  },
  messageBakery: {
    text: ''
  },
  step: {
    cakeSizeStep: true,
    cakeFillingStep: false,
    cakeHasText: false,
    cakeHasMotive: false
  }
};

export default function cakes(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CAKE_DEFAULT:
      return {
        ...state,
        cakeSizeId: initialState.cakeSizeId,
        cakeFillingId: initialState.cakeFillingId,
        count: initialState.count,
        cakeMotivePrice: initialState.cakeMotivePrice,
        cakeTextPrice: initialState.cakeTextPrice,
        extraFillPrice: initialState.extraFillPrice,
        messageBakery: initialState.messageBakery,
        step: initialState.step
      };
    case ADD_CAKE_INFO_TO_PRICE:
      return {
        ...state,
        listCakePrice: action.listCakePrice
      };
    // set Id
    case SET_CAKE_SIZE_ID:
      return {
        ...state,
        cakeSizeId: action.cakeSizeId
      };
    case SET_CAKE_FILLING_ID:
      return {
        ...state,
        cakeFillingId: action.cakeFillingId
      };
    case SET_CAKE_MOTIVE_PRICE:
      return {
        ...state,
        cakeMotivePrice: action.cakeMotivePrice
      };
    case SET_CAKE_TEXT_PRICE:
      return {
        ...state,
        cakeTextPrice: action.cakeTextPrice
      };
    case SET_CAKE_EXTRA_PRICE:
      return {
        ...state,
        extraFillPrice: action.extraFillPrice
      };
    case SET_CAKE_MESSAGE_BAKERY:
      return {
        ...state,
        messageBakery: action.messageBakery
      };
    case SET_CAKE_COUNT:
      return {
        ...state,
        count: action.count
      };
    // set Step
    case SET_CAKE_SIZE_STEP:
      return {
        ...state,
        step: {
          ...state.step,
          cakeSizeStep: action.isSizeStep
        }
      };
    case SET_CAKE_FILLING_STEP:
      return {
        ...state,
        step: {
          ...state.step,
          cakeFillingStep: action.isFillingStep
        }
      };
    case SET_CAKE_MOTIVE_STEP:
      return {
        ...state,
        step: {
          ...state.step,
          cakeHasMotive: action.isMotiveStep
        }
      };
    case SET_CAKE_TEXT_STEP:
      return {
        ...state,
        step: {
          ...state.step,
          cakeHasText: action.isTextStep
        }
      };
    default:
      return state;
  }
}
// id
export function setCakeSizeId(cakeSizeId) {
  return {type: SET_CAKE_SIZE_ID, cakeSizeId};
}

export function setCakeDefault() {
  return {type: SET_CAKE_DEFAULT};
}

export function addToListCakePrice(listCakePrices, cakeInfo) {
  const listCakePrice = listCakePrices.push(cakeInfo);
  return {type: SET_CAKE_DEFAULT,  listCakePrice};
}

export function setCakeFillingId(cakeFillingId) {
  return {type: SET_CAKE_FILLING_ID, cakeFillingId};
}

export function setCakeMotivePrice(cakeMotivePrice) {
  return {type: SET_CAKE_MOTIVE_PRICE, cakeMotivePrice};
}
export function setCakeExtaFillPrice(extraFillPrice) {
  return {type: SET_CAKE_EXTRA_PRICE, extraFillPrice};
}
export function setCakeCount(count) {
  return {type: SET_CAKE_COUNT, count};
}
export function setCakeMessageBakery(messageBakery) {
  return {type: SET_CAKE_MESSAGE_BAKERY, messageBakery};
}
export function setCakeTextPrice(cakeTexBytPrice, price) {
  const cakeTextPrice = cakeTexBytPrice.length > 0 ? {text: cakeTexBytPrice, price: price} : {text: '', price: 0};
  return {type: SET_CAKE_TEXT_PRICE, cakeTextPrice};
}
// steps
export function setCakeSizeStep(isSizeStep) {
  return {type: SET_CAKE_SIZE_STEP, isSizeStep};
}

export function setCakeFillingStep(isFillingStep) {
  return {type: SET_CAKE_FILLING_STEP, isFillingStep};
}

export function setCakeMotiveStep(isMotiveStep) {
  return {type: SET_CAKE_MOTIVE_STEP, isMotiveStep};
}

export function setCakeTextStep(isTextStep) {
  return {type: SET_CAKE_TEXT_STEP, isTextStep};
}

