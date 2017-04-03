import React, { Component } from 'react';
import { connect } from 'react-redux'

import Lyrics from '../components/Lyrics';

import { searchLyrics } from '../action-creators/lyrics';

class LyricsWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.lookForLyrics(this.state.artistQuery, this.state.songQuery)
    }
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        lyrics={this.props.lyrics} />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    lyrics: state.lyrics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lookForLyrics: (artistQuery, songQuery) => {
      dispatch(searchLyrics(artistQuery, songQuery))
    }
  }
}

const LyricsContainer = connect(mapStateToProps, mapDispatchToProps)(LyricsWrapper)

export default LyricsContainer;
