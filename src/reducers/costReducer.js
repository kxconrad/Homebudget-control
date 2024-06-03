export const costReducer = (monthCosts, action) => {
    switch (action.type) {
        case 'added': {
            const newState = [
                ...monthCosts,
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