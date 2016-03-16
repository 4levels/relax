import actionTypes from 'actions';
import filter from 'lodash.filter';

const defaultState = {
  data: {
    items: [],
    count: 0
  },
  errors: null
};

export default function menusReducer (state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.graphql: {
      const data = {};
      let hasData = false;
      if (action.data.menus) {
        data.items = action.data.menus;
        hasData = true;
      }
      if (action.data.menusCount || action.data.menusCount === 0) {
        data.count = action.data.menusCount.count || 0;
        hasData = true;
      }
      if (hasData) {
        return Object.assign({}, state, {
          data,
          errors: action.errors
        });
      }
      return state;
    }
    case actionTypes.removeMenu:
      return Object.assign({}, state, {
        data: {
          items: filter(state.data.items, (menuIt) => (menuIt._id !== action.data.removeMenu._id)),
          count: state.data.count - 1
        },
        errors: action.errors
      });
    case actionTypes.duplicateMenu:
      return Object.assign({}, state, {
        data: {
          items: [...state.data.items, action.data.duplicateMenu],
          count: state.data.count
        },
        errors: action.errors
      });
    default:
      return state;
  }
}
