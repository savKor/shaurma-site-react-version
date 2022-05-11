import { useContext } from 'react'
import { deleteShaurmaInUserCart } from '../../../../../../../api/fetch-cart'
import { ContextShaurmaList } from '../../../../../../../App'
import { fetchShaurma } from '../../../../../../../api/fetch-array'

export function ShaurmaCardInCart({
  idOfCard,
  nameOfShaurma,
  costOfShaurma,
  idOfShaurma,
}) {
  const { setShaurmaList } = useContext(ContextShaurmaList)

  const splitId = idOfShaurma.split('_')
  const shaurmaId = splitId[1]

  async function deleteFromCart() {
    await deleteShaurmaInUserCart({ shaurmaId })
    const shaurmaFromServer = await fetchShaurma()
    setShaurmaList(shaurmaFromServer)
  }

  return (
    <div id={idOfCard} className="card mb-1" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            id="image-shaurma"
            src={
              process.env.PUBLIC_URL +
              'Depositphotos_73527551_l-2015-pic905-895x505-54479.jpg'
            }
            className="card-img-top"
            alt="..."
          ></img>
        </div>
        <div id="shaurma-info" className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nameOfShaurma}</h5>
            <p className="card-text">Цена: {costOfShaurma}</p>
            <button
              type="button"
              className="delete-from-cart btn btn-primary"
              id={idOfShaurma}
              onClick={deleteFromCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
