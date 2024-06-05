export const costReducer = (allCosts, action) => {
  switch (action.type) {
    case 'added': {
      const newState = [
        ...allCosts,
        {
          id: action.id,
          month: action.month,
          value: action.value,
          category: action.category
        }
      ];
      return newState;
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
};