import { ADD_TO_CITY, REMOVE_CITY } from '../actions/index'
import { initialState } from '../store'

// export default function cityReducer(state = initialState.city, action) {
//     console.log(action, state)

//     const { type, payload } = action

//     switch (type) {
//         case ADD_TO_CITY:
//             return { 
//                 ...state,
//                 elements: [...state.elements, payload],
//             }
//         case REMOVE_CITY:
//             return {
//                 ...state,
//                 elements: state.elements.filter((city) => city !== payload),
//             };
//             default:
//                 return state;
//     }
// }

export default function getCityReducer(state = intialState.jobs, action) {
    console.log(action, state)

    const { type, payload } = action

    switch ( type ) {
        case "FETCH_CITY":
            return {
                ...state, 
                elements: payload,
            }
            default:
                return state
    }
}