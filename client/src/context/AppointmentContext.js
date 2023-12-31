import { createContext, useReducer } from 'react';

export const AppointmentContext = createContext();

export const appointmentReducer = (state, action) => {
    switch (action.type) {
        case 'SET_APPOINTMENT':
            return {
                appointments: action.payload
            }
        case 'CREATE_APPOINTMENT':
            return {
                appointments: [action.payload, ...state.appointments]
            }
        case 'DELETE_APPOINTMENT':
            return {
                appointments: state.appointments.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export const AppointmentContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appointmentReducer, {
        appointments: []
    })

    return (
        <AppointmentContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppointmentContext.Provider>
    )
}