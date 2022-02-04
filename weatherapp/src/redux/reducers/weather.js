import { initialState } from '../store'

export default function getWeatherReducer(state = initialState.weather, action) {
    console.log(action, state)

    const { type, payload } = action

    switch ( type ) {
        case "FETCH_WEATHER":
            return {
                ...state, 
                elements: payload,
            }
            default:
                return state
    }
}