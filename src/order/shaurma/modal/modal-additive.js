import { useState, createContext, useEffect, useContext } from 'react'

import { fetchAdditive } from '../../../api/fetch-additive-array'
import { ListOfAdditiveCards } from './additive-for-shaurma/additive'
import { ContextShaurmaId } from '../user-shaurma-list'

export const ContextAdditiveList = createContext({
  additiveList: [],
  setAdditiveList: () => {},
})

export function ModalAdditive(props) {
  const { setIdOfChosenShauma } = useContext(ContextShaurmaId)
  const [additiveList, setAdditiveList] = useState()

  const contextValueOfAdditive = { additiveList, setAdditiveList }

  async function closeModal() {
    setIdOfChosenShauma(undefined)
  }

  useEffect(() => {
    async function getAdditive() {
      const additiveFromServer = await fetchAdditive()
      setAdditiveList(additiveFromServer)
      debugger
    }

    getAdditive()
  }, [])

  if (additiveList !== undefined) {
    return (
      <div
        className="modal fade"
        id="additiveModal"
        aria-labelledby="additiveModalLabel"
        aria-hidden="true"
      >
        <div id="modal-dialog" className="modal-dialog modal-dialog-scrollable">
          <div id="modal-content" className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Добавляй своё
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div id="additives-to-choose-from" className="modal-body">
              <ContextAdditiveList.Provider value={contextValueOfAdditive}>
                <ListOfAdditiveCards></ListOfAdditiveCards>
              </ContextAdditiveList.Provider>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      className="modal fade"
      id="additiveModal"
      aria-labelledby="additiveModalLabel"
      aria-hidden="true"
    >
      <div id="modal-dialog" className="modal-dialog modal-dialog-scrollable">
        <div id="modal-content" className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Добавляй своё
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div id="additives-to-choose-from" className="modal-body">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  )
}
