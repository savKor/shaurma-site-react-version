import { createSlice } from '@reduxjs/toolkit'
import { userFullInfo } from '../../user-information'

export const counterSlice = createSlice({
  name: 'storage',

  initialState: {
    modalStatus: false,
    storageUser: userFullInfo.user,
    idOfChosenShaurma: undefined,
    shaurmaOrdered: undefined,
    shaurmaList: undefined,
    additiveList: undefined,
  },

  reducers: {
    updateShaurmaList: (state, action) => {
      state.shaurmaList = action.payload
    },

    updateStorageUser: (state, action) => {
      state.storageUser = action.payload
    },

    updateIdOfChosenShaurma: (state, action) => {
      state.idOfChosenShaurma = action.payload
    },

    updateShaurmaOrdered: (state, action) => {
      state.shaurmaOrdered = action.payload
    },

    updateAdditiveList: (state, action) => {
      state.additiveList = action.payload
    },

    updateModalStatus: (state, action) => {
      state.modalStatus = action.payload
    },
  },
})

export const {
  updateShaurmaList,
  updateStorageUser,
  updateIdOfChosenShaurma,
  updateShaurmaOrdered,
  updateAdditiveList,
  updateModalStatus,
} = counterSlice.actions

export const incrementAsync = (action, fn) => (dispatch) => {
  setTimeout(() => {
    dispatch(fn(action))
  }, 1000)
}

export const selectState = (state) => state.storage

export default counterSlice.reducer
