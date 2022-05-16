import { fetchAdditive } from '../action/fetch-additive-array'
import { fetchShaurma } from '../action/fetch-array'
import { userFullInfo } from '../user-information'

async function getShaurma() {
  const shaurmaListFromServer = await fetchShaurma()
  storage.setValue('shaurmaList', shaurmaListFromServer)
}

async function getAdditive() {
  const additiveFromServer = await fetchAdditive()
  debugger
  storage.setValue('additiveList', additiveFromServer)
}

async function addShaurmanThatInCart() {
  const shaurmaListFromServer = await fetchShaurma()
  let orderInfo = []
  let shaurmaObject
  debugger
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
  storage.setValue('shaurmaOrdered', orderInfo)
}

export class Storage {
  constructor() {
    this.data = {
      modalStatus: false,
      storageUser: userFullInfo.user,
      idOfChosenShaurma: undefined,
      shaurmaOrdered: addShaurmanThatInCart(),
      shaurmaList: getShaurma(),
      additiveList: getAdditive(),
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
