import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk' 

const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    city: {
        elements: [],
    }, 
    weather: {
        elements: [],
    },
}

const mainReducer = combineReducers({
    city: cityReducer,
    weather: weatherReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
            onError: (error) => {
                console.log('encryption error', Error)
            }
        })
    ]
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

export let configureStore = createStore(
    persistedReducer,
    initialState,
    composeThatAlwaysWorks(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)

