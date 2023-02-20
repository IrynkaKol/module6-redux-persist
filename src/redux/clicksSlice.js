import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const clicksSlice = createSlice({
    name: 'clicks',
    initialState: {value: 0, a:1, b: 2, c: 3},
    reducers: {
      update: (state, action) => {
        state.value += action.payload
      },
      
    },
  })

  export const { update } = clicksSlice.actions

  const persistConfig = {
    key: 'clicks',
    storage,
    whitelist: ['value'],
  }
  export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer)

  //Selectors
  export const getClicksValue = state => state.clicks.value
