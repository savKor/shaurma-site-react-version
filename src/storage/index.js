import { fetchShaurma } from '../api/fetch-array'
import { userFullInfo } from '../user-information'

async function addShaurmanThatInCart() {
  const shaurmaListFromServer = await fetchShaurma()
  let orderInfo = []
  let shaurmaObject
  for (let i = 0; i < shaurmaListFromServer.length; i++) {
    if (shaurmaListFromServer[i].inCart === true) {
      shaurmaObject = {
        // объект
        shaurmaId: shaurmaListFromServer[i]._id,
        additiveIdList: [],
      }
      orderInfo.push(shaurmaObject)
    }
  }
  console.log(orderInfo)
  storage.setValue('shaurmaOrdered', orderInfo)
}

export class Storage {
  constructor() {
    this.data = {
      modalStatus: false,
      storageUser: userFullInfo.user,
      idOfChosenShaurma: undefined,
      shaurmaOrdered: addShaurmanThatInCart(),
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
