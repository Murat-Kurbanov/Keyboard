const initialState = {
    password: '1111',
    code: '',
    stars: '',
    isright: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_NUMBER':
            if(state.code.length >= 4) return state;

            return {
                ...state,
                code: state.code + action.value,
                stars: state.stars + '*'
            };

        case 'REMOVE_NUMBER':
            if (!state.stars.includes('*') && state.stars !== '') {
                return {
                    ...state,
                    code: '',
                    stars: '',
                    isright: false
                }
            }
            const newCode = state.stars.substr(0, state.stars.length - 1);
            const newStars = state.code.substr(0, state.code.length - 1);

            return {
                ...state,
                stars: newCode,
                code: newStars,
                isright: false
            };

        case 'CORRECT_PASSWORD':
            if (state.code === state.password) {
                return {
                    ...state,
                    isright: true,
                    stars: 'Access Granted'
                }
            } else {
                return {
                    ...state,
                    stars: 'Access Denied'
                }
            };

            return state;
        default:
            return state;
    }
};



export default reducer;