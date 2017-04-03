import React from 'react'
import { connect } from 'react-redux'

import Stations from '../components/Stations'

const convertSongstoStations = function(songArray) {
  const stations = {}
  songArray.forEach(song => {
    if (!stations.hasOwnProperty(song.genre)) {
      stations[song.genre] = [song]
    } else {
      stations[song.genre].push(song)
    }
  })
  return stations
}

const mapStateToProps = state => {
  return {
    stations: convertSongstoStations(state.songs)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)


export default StationsContainer
