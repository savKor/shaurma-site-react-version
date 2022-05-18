import { userFullInfo } from '../user-information'

export class Storage {
  constructor() {
    this.data = {
      modalStatus: false,
      storageUser: userFullInfo.user,
      idOfChosenShaurma: undefined,
      shaurmaOrdered: undefined,
      shaurmaList: undefined,
      additiveList: undefined,
    }
    this.observers = {}
  }

  subscribe(key, fn) {
    if (this.observers[key] === undefined) {
      this.observers[key] = [fn]
      console.log(this.observers)
    } else {
      this.observers[key].push(fn)
      console.log(this.observers)
    }
  }

  unsubscribe(key) {
    console.log(key)
    delete this.observers[key]
  }

  setValue(key, val) {
    this.data[key] = val
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
