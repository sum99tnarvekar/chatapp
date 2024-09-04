const initialState = {
    name: '',
    message: '',
};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_MESSAGE':
            return { ...state, message: action.payload };
        default:
            return state;
    }
};

export default inputReducer;
