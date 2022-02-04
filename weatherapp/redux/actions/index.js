export const ADD_TO_CITY = 'ADD_TO_CITY'
export const REMOVE_CITY = 'REMOVE_CITY'

export const SET_WEATHER = 'SET_WEATHER'
export const REMOVE_WEATHER = 'REMOVE_WEATHER'

export const addToCityAction = (data) => ({
    type: ADD_TO_CITY,
    payload: data,
})

export const removeCityAction = (index) => ({
    type: REMOVE_CITY,
    payload: index,
})

export const fetchCity = (url, query) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(url + query)
            if (response.ok) {
                const { city } = await response.json()
                dispatch({
                    type: "ADD_TO_CITY",
                    payload: city,
                });
            } else {
                console.log("error: ", errorMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
