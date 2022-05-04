import { storage } from '../storage'
import {
  enableEventOpenModalOfShaurma,
  enableAdditiveAddOrDeleteOnShaurmaList,
  getShaurma,
  createAdditivesForModal,
  enableDeleteShaurma,
  markShaurmaItemDeletedFromOrder,
} from './shaurma/user-shaurma-list'

const fullInfoAboutOrderedShaurma = [] // массив в котором хранятся все данные для составления заказа

export function createOrderForm(shaurmaList) {
  const listOfShaurma = getShaurma(shaurmaList)
  return (
    <main id="main-form">
      <div class="container">
        <ul id="card-list-of-order" class="g-3">
          {listOfShaurma}
        </ul>
      </div>
      <div id="map-content">
        <div id="map"></div>
      </div>
      <div class="d-grid gap-2">
        <button id="order" class="btn btn-primary" type="button">
          Оформить заказ
        </button>
      </div>
    </main>
  )
}
