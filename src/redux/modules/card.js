// Id
const ADD_CAKE_INFO_TO_PRICE = 'ADD_CAKE_INFO_TO_PRICE';

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
  cakePriceLists: [],
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
        cakePriceLists: [],
        step: initialState.step
      };
    case ADD_CAKE_INFO_TO_PRICE:
      return {
        ...state,
        cakePriceLists: action.cakePriceList
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


// Add New Cake
export function addNewCakeToPriceList(cakePriceLists, newCake) {
  const cakePriceList = cakePriceLists.push(newCake);
  return {type: SET_CAKE_DEFAULT,  cakePriceList};
}

// Add CakeSize
export function addCakeSizeToCake(cakePriceLists, cakeSize) {
  // TODO
  // return {type: SET_CAKE_DEFAULT};
}

// Add CakeFilling
export function addCakeFillingToCake(cakePriceLists, cakeFilling) {
  // TODO
  // return {type: SET_CAKE_DEFAULT};
}

// Add CakeMotive
export function addCakeMotiveToCake(cakePriceLists, cakeMotive) {
  // TODO
  // return {type: SET_CAKE_DEFAULT};
}

// Add CakeText
export function addCakeTextToCake(cakePriceLists, cakeText) {
  // TODO
  // return {type: SET_CAKE_DEFAULT};
}

// Add CakeExtension
export function addCakeExtensionToCake(cakePriceLists, cakeExtension) {
  // TODO
  // return {type: SET_CAKE_DEFAULT};
}

// Add CakeMessageBakery
export function addCakeMessageBakeryToCake(cakePriceLists, cakeMessageBakery) {
  // TODO
  // return {type: SET_CAKE_DEFAULT};
}

// Add CakeCount
export function addCakeCountBakeryToCake(cakePriceLists, cakeCount) {
  // TODO
  // return {type: SET_CAKE_DEFAULT};
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

