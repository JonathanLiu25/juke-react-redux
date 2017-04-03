import React, { Component } from 'react';
import { connect } from 'react-redux'
import AUDIO from '../audio';
import store from '../store';
import { previous, next, setProgress, toggleSong } from '../action-creators/player';
import Player from '../components/Player';

class PlayerContainer extends Component {

  constructor() {
    super();
    this.state = store.getState().player;
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {

    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
    });

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().player);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  next() {
    store.dispatch(next());
  }

  prev() {
    store.dispatch(previous());
  }

  toggle() {
    store.dispatch(
      toggleSong(this.state.currentSong, this.state.currentSongList)
    );
  }

  render() {
    return <Player
      {...this.state}
      next={this.next}
      prev={this.prev}
      toggle={this.toggle}
    />;
  }

}


// AUDIO.addEventListener('ended', this.next);
// AUDIO.addEventListener('timeupdate', () => {
//   store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
// });


// const mapStateToProps = (state) => Object.assign({}, state)

// const mapDispatchToProps = (dispatch) => {
//   return {
//     next: () => {
//       dispatch(next())
//     },
//     prev: () => {
//       dispatch(previous())
//     },
//     toggle: (song, list) => {
//       dispatch(toggleSong(song, list))
//     },
//     setProgress: (currentTime, duration) => {
//       dispatch(setProgress(currentTime / duration))
//     }
//   }
// }

// const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player)


export default PlayerContainer;
