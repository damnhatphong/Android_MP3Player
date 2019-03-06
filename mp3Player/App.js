import React, { Component } from 'react';
import Player from './app/Player';

export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://dl.fazmusics.in/Ali/music/aban/hot%20100%20.7%20nov%202015(128)/Twenty%20One%20Pilots%20-%20Stressed%20Out.mp3",
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl:'https://freesound.org/people/nicStage/sounds/462582/',
    //audioUrl: 'http://srv2.dnupload.com/Music/Album/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20(320)/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20128/05%20Love%20Yourself.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'http://dl2.shirazsong.org/dl/music/94-10/CD%201%20-%20Best%20of%202015%20-%20Top%20Downloads/03.%20Drake%20-%20Hotline%20Bling%20.mp3',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}

// import Header from './app/Header';
// import AlbumArt from './app/AlbumArt';
// import TrackDetails from './app/TrackDetails';
// import SeekBar from './app/SeekBar';
// import Controls from './app/Controls';
// import {View} from 'react-native';
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header message="Playing from Charts" />
//         <AlbumArt url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
//         <TrackDetails title="Stressed Out"
//           artist="Twenty One Pilots" />
//         <SeekBar trackLength={204} currentPosition={156} />
//         <Controls />
//       </View>
//     );
//   }
// }

// const styles={
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(4,4,4)',
//   },
// }