import { useEffect, useState } from 'react'
import { storage } from '../storage'

export function useStorageAndSetData(key, fn) {
  const [storageData, setStorageData] = useState()
  async function handleChangeChoosenShaurmaId(data) {
    setStorageData(data)
  }

  async function setAdditive() {
    const dataFromServer = await fn
    setStorageData(dataFromServer)
  }

  useEffect(() => {
    setAdditive()
    storage.subscribe(key, handleChangeChoosenShaurmaId)
    return () => {
      storage.unsubscribe(key)
    }
  }, [])

  return storageData
}

export function useStorageData(stateData, key) {
  const [storageData, setStorageData] = useState(stateData)
  async function handleChangeChoosenShaurmaId(data) {
    setStorageData(data)
  }

  useEffect(() => {
    storage.subscribe(key, handleChangeChoosenShaurmaId)
    return () => {
      storage.unsubscribe(key)
    }
  }, [])

  return storageData
}
