import { storageUserFullInfo } from '../storage/storage'

let context = {
  modalStatus: false,
  storageUser: undefined,
}

export class Storage {
  constructor(data) {
    this.data = data
    this.observers = {}
  }

  subscribe(key, fn) {
    if (this.observers[key] === undefined) {
      this.observers[key] = [fn]
      getContextValue(key)
    } else {
      this.observers[key].push(fn)
      console.log(this.observers)
      getContextValue(key)
    }
  }

  unsubscribe(key) {
    delete this.observers[key]
  }

  setValue(key, val) {
    context[key] = val
    const data = { key: key, val: val }
    this.notification(data)
  }

  notification(data) {
    Object.keys(this.observers).forEach((observer) => {
      if (observer === data.key) {
        this.observers[observer].forEach((observer) => {
          observer(data.val)
        })
      }
    })
  }
}

export const storage = new Storage()

function getContextValue(key) {
  const data = context[key]
  debugger
  return data
}
