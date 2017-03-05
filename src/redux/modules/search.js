const SET_BAKERY = 'SET_BAKERY';
const SET_SIZE_CAKE = 'SET_SIZE_CAKE';
const SET_DELIVERY_METHOD_CAKE = 'SET_DELIVERY_METHOD_CAKE';
const SET_ALLERGEN_CAKE = 'SET_ALLERGEN_CAKE';

const initialState = {
  searchBakery: 'Alle',
  sizeMenuValue: 1,
  deliveryMethodCake: 1,
  allergenCake: 1
};

export default function search(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BAKERY:
      return {
        ...state,
        searchBakery: action.searchBakery
      };
    case SET_SIZE_CAKE:
      return {
        ...state,
        sizeMenuValue: action.sizeMenuValue
      };
    case SET_DELIVERY_METHOD_CAKE:
      return {
        ...state,
        deliveryMethodCake: action.deliveryMethodCake
      };
    case SET_ALLERGEN_CAKE:
      return {
        ...state,
        allergenCake: action.allergenCake
      };
    default:
      return state;
  }
}

export function setBakery(searchBakery) {
  return { type: SET_BAKERY, searchBakery};
}

export function setSizeCake(sizeMenuValue) {
  return { type: SET_SIZE_CAKE, sizeMenuValue};
}

export function setDeliveryMethodCake(deliveryMethodCake) {
  return { type: SET_DELIVERY_METHOD_CAKE, deliveryMethodCake};
}

export function setAllergenCake(allergenCake) {
  return { type: SET_ALLERGEN_CAKE, allergenCake};
}
