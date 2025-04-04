import React from 'react'
import "./Mappage.css";
import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

function Mappage() {
  const mapRef = useRef()
  const mapContainerRef = useRef()
  useEffect(() => {
    mapboxgl.accessToken = ''
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [10.9427421, 76.9497504],
      zoom: 10.12
    });
    

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
    <div id="map-container" ref={mapContainerRef}></div>
    </>
  )
}

export default Mappage