import { ADD_ITEM, REMOVE_ITEM } from "../actionType";

const initialState = {
  items: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const key = Math.random();
      return {
        ...state,
        items: [
          ...state.items,
          {
            item: action.item + key,
            key: key,
          },
        ],
      };
    }
    case REMOVE_ITEM: {
      const filteredData = state.items.filter(
        (item) => item.key !== action.key
      );
      return {
        ...state,
        items: filteredData,
      };
    }
    default: {
      return state;
    }
  }
};

export default itemsReducer;
