import React from 'react';
import Songs from './Songs';

export default function Station(props) {

  console.log(props)
  const station = props.genre;
  return (
    <div>
      <h3>{ station.name }</h3>
      {/*<Songs {...props} songs={station.songs}/>
      { station.songs && !station.songs.length && <small>No songs.</small> */}
      <hr />
    </div>
  );

}
