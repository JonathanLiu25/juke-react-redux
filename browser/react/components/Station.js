import React from 'react';
import Songs from './Songs';

export default function Station(props) {

  const genre = props.genre;
  const songs = props.songs;
  const isPlaying = props.isPlaying;
  const currentSong = props.currentSong;
  const toggleOne = props.toggleOne;

  return (
    <div>
      <h3>{ genre }</h3>
        <Songs
          songs={songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne}
        />
      <hr />
    </div>
  );

}
