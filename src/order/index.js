import { useContext, useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { ListOfShaurmaCards } from './shaurma/user-shaurma-list'
import { ContextShaurmaOrder } from '../Order'
import { addOrderToDatabase } from '../api/fetch-order'

export function OrderForm() {
  const [coordinates, setCoonrdinates] = useState()
  const { shaurmaOrdered } = useContext(ContextShaurmaOrder)

  const mapContainer = useRef(null)
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmFmY3J1IiwiYSI6ImNrendxaGwzMzAyYTMydXJ2aHB3dzJ4OWoifQ.wj9FjHmT9tlzBVeZXdx9Sw'
  const map = useRef(null)
  const [lng] = useState(-70.9)
  const [lat] = useState(42.35)
  const [zoom] = useState(9)

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

  async function handleOrderButton() {
    if (coordinates !== undefined && shaurmaOrdered.length !== 0) {
      debugger
      addOrderToDatabase({ shaurmaOrdered, coordinates })
    } else {
      alert('Укажите полностью данные')
    }
  }
  useEffect(() => console.log(coordinates))
  return (
    <main id="main-form">
      <div className="container">
        <ul id="card-list-of-order" className="g-3">
          <ListOfShaurmaCards />
        </ul>
      </div>
      <div id="map-content">
        <div ref={mapContainer} id="map" className="map-container" />
      </div>
      <div className="d-grid gap-2">
        <button
          id="order"
          className="btn btn-primary"
          type="button"
          onClick={handleOrderButton}
        >
          Оформить заказ
        </button>
      </div>
    </main>
  )
}
