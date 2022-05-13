import { createContext } from 'react'

export const ContextShaurmaOrder = createContext({
  shaurmaOrdered: {},
  setShaurmaOrdered: () => {},
})

export const ContextUser = createContext({
  storageUser: {},
  setStorage: () => {},
})

export const ContextShaurmaList = createContext({
  shaurmaList: {},
  setShaurmaList: () => {},
})

export const ContextShaurmaId = createContext({
  idOfChosenShauma: null,
  setShaurmaList: () => {},
})

export const ContextAdditiveList = createContext({
  additiveList: [],
  setAdditiveList: () => {},
})
