import { connect } from 'react-redux'

import Station from '../components/Station'
import { convertSong } from '../utils'
import { toggleSong } from '../action-creators/player'

const filterSongs = function(songsArray, genre) {
  return songsArray.filter(song => song.genre === genre).map(convertSong)

}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: filterSongs(state.songs, ownProps.routeParams.genre),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list))
    }
  }
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station)

export default StationContainer
