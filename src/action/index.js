import { fetchAdditive } from '../api/fetch-additive-array'
import { fetchShaurma } from '../api/fetch-array'

export async function getShaurma() {
  const shaurmaListFromServer = await fetchShaurma()
  return shaurmaListFromServer
}

export async function getAdditive() {
  const additiveFromServer = await fetchAdditive()
  return additiveFromServer
}

export async function addShaurmanThatInCart() {
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
  return orderInfo
}
