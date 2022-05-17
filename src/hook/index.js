import { useEffect, useState } from 'react'
import { storage } from '../storage'

export function useStorageAndSetData(key, fn) {
  const [additiveData, setAdditiveData] = useState()
  async function handleChangeChoosenShaurmaId(data) {
    setAdditiveData(data)
  }

  async function setAdditive() {
    const additiveFromServer = await fn
    setAdditiveData(additiveFromServer)
  }

  useEffect(() => {
    setAdditive()
    storage.subscribe(key, handleChangeChoosenShaurmaId)
    return () => {
      storage.unsubscribe(key)
    }
  }, [])

  return additiveData
}

export function useStorageData(stateData, key) {
  const [contextData, setContextData] = useState(stateData)
  async function handleChangeChoosenShaurmaId(data) {
    setContextData(data)
  }

  useEffect(() => {
    storage.subscribe(key, handleChangeChoosenShaurmaId)
    return () => {
      storage.unsubscribe(key)
    }
  }, [])

  return contextData
}
