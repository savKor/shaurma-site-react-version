import { useEffect, useState } from 'react'
import { storage } from '../contex/storage'

export function useUser() {
  const [storageUser, setStorageUser] = useState(storage.data.storageUser)

  async function handleChangeUser(data) {
    setStorageUser(data)
  }

  useEffect(() => {
    storage.subscribe('storageUser', handleChangeUser)
  }, [])

  return storageUser
}

export function useAdditive() {
  const [additiveList, setAdditiveList] = useState(storage.data.additiveList)

  async function handleChangeInAdditive(data) {
    setAdditiveList(data)
  }

  useEffect(() => {
    storage.subscribe('additiveList', handleChangeInAdditive)
  })

  return additiveList
}

export function useOrder() {
  const [shaurmaOrdered, setShaurmaOrdered] = useState(
    storage.data.shaurmaOrdered,
  )

  async function handleChangeChoosenShaurmaId(data) {
    setShaurmaOrdered(data)
  }

  useEffect(() => {
    storage.subscribe('shaurmaOrdered', handleChangeChoosenShaurmaId)
  }, [])

  return shaurmaOrdered
}

export function useContextData(chosenContext, string) {
  const [contextData, setContextData] = useState()
  setContextData(chosenContext)
  async function handleChangeChoosenShaurmaId(data) {
    setContextData(data)
  }

  useEffect(() => {
    storage.subscribe(string, handleChangeChoosenShaurmaId)
  }, [])

  return contextData
}
