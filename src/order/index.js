import { createContext, useContext, useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { ListOfShaurmaCards } from './shaurma/user-shaurma-list'
import { ContextShaurmaList } from '../App'

export const ContextShaurmaOrder = createContext({
  shaurmaOrdered: {},
  setShaurmaOrdered: () => {},
})

export function OrderForm() {
  const [coordinates, setCoonrdinates] = useState()
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)
  const [shaurmaOrdered, setShaurmaOrdered] = useState(addShaurmanInArray)

  const value = { shaurmaOrdered, setShaurmaOrdered }

  const mapContainer = useRef(null)
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmFmY3J1IiwiYSI6ImNrendxaGwzMzAyYTMydXJ2aHB3dzJ4OWoifQ.wj9FjHmT9tlzBVeZXdx9Sw'
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  function addShaurmanInArray() {
    let orderInfo = []
    let shaurmaObject
    for (let i = 0; i < shaurmaList.length; i++) {
      if (shaurmaList[i].inCart === true) {
        shaurmaObject = {
          // объект
          shaurmaId: shaurmaList[i]._id,
          additiveIdList: [],
        }
        orderInfo.push(shaurmaObject)
      }
    }
    return orderInfo
  }

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    })
    let geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      placeholder: 'SEARCH GEOGRAPHY ON MAP',
      marker: {
        color: 'orange',
      },
      mapboxgl: mapboxgl,
    }).on('result', (selected) => {
      setCoonrdinates(selected.result)
    })

    map.current.addControl(geocoder)
  })

  useEffect(() => console.log(coordinates))
  return (
    <main id="main-form">
      <div className="container">
        <ul id="card-list-of-order" className="g-3">
          <ContextShaurmaOrder.Provider value={value}>
            <ListOfShaurmaCards />
          </ContextShaurmaOrder.Provider>
        </ul>
      </div>
      <div id="map-content">
        <div ref={mapContainer} id="map" className="map-container" />
      </div>
      <div className="d-grid gap-2">
        <button id="order" className="btn btn-primary" type="button">
          Оформить заказ
        </button>
      </div>
    </main>
  )
}
