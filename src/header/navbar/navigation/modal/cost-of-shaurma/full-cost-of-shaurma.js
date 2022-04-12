function getListOfCostsOfShaurma(shaurmaList) {
  const costOfEveryShaurma = []

  for (let i = 0; i < shaurmaList.length; i++) {
    if (shaurmaList[i].inCart === true) {
      const costOfShaurma = shaurmaList[i].cost
      costOfEveryShaurma[i] = costOfShaurma
    } else {
      costOfEveryShaurma[i] = 0
    }
  }

  return costOfEveryShaurma
}

function createFullCostOfShaurma(shaurmaList) {
  const costOfEveryShaurma = getListOfCostsOfShaurma(shaurmaList)
  let fullCost = 0

  for (let i = 0; i < costOfEveryShaurma.length; i++) {
    fullCost += costOfEveryShaurma[i]
  }

  return fullCost
}

export function getShaurmaCost(shaurmaList) {
  const fullCost = createFullCostOfShaurma(shaurmaList)
  const statusOfFullCostInCart = createStatusOfCostInCart(fullCost)
  return statusOfFullCostInCart
}

function createStatusOfCostInCart(fullCost) {
  if (fullCost !== 0) {
    return (
      <p>
        Вся стоимость: <var id="fullCost">${fullCost}</var> rub
      </p>
    )
  }
  return (
    <p>
      Вся стоимость: <var id="fullCost">0</var>
    </p>
  )
}

export function markCostThatNewShaurmaAddedInCart(shaurmaId, shaurmaList) {
  const costShaurma = Number(document.getElementById('fullCost').innerHTML)
  let fullCost = 0
  for (let i = 0; i < shaurmaList.length; i++) {
    if (shaurmaList[i]._id === shaurmaId) {
      fullCost = costShaurma + shaurmaList[i].cost
    }
  }
  const newCost = createStatusOfCostInCart(fullCost)
  document.getElementById('fullCostOfShaurma').innerHTML = { newCost }
}

export function markCostThatWereDeletedFromCart(shaurmaId, shaurmaList) {
  const countShaurma = Number(document.getElementById('fullCost').innerHTML)
  let fullCost = 0
  for (let i = 0; i < shaurmaList.length; i++) {
    if (shaurmaList[i]._id === shaurmaId) {
      fullCost = countShaurma - shaurmaList[i].cost
    }
  }
  const newCost = createStatusOfCostInCart(fullCost)
  document.getElementById('fullCostOfShaurma').innerHTML = { newCost }
}
