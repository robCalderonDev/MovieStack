import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,  // Al hacer login, se guarda el usuario
            };

        case types.logout:
            return {
                logged: false,    // Se marca el estado como no logueado
                user: null,       // Se limpia el usuario
            };

        default:
            return state;
    }
};
