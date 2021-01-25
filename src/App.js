import React, { useState, useRef } from 'react';

// Importation du style
import './styles/app.scss';

// Importation de la songs (data.js)
import data from './data';

// Importation de composants
    // MUSIC
import Infos from "./components/music/Infos";
import Launcher from "./components/music/Launcher";
import Player from "./components/music/Player";
import Playlist from "./components/music/Playlist";

    //OTHER
import Title from "./components/Title";

function App() {
    // Ref
    const audioRef = useRef(null);

    // State
    const [libraryStatus, setLibraryStatus] = useState(false); // sidebar fermée / ouverte (fermée par défaut)
    const [songs, setSongs] = useState(data()); // tableau de tous les sons
    const [currentSong, setCurrentSong] = useState(songs[0]); // définie le son qui joue
    const [isPlaying, setIsPlaying] = useState(false); // définie si un son joue ou non (non par défaut)
    const [volume, setVolume] = useState(1);



    //Events
    const autoPlayHandler = () => {
        if (isPlaying) {
            audioRef.current.play();
        }
    };

    const songEndHandler = () => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id); // 0, 1, 2, 3, 4, ...
        let newIndex = currentIndex + 1; // -1, 0, 1, 2, 3 ...

        // Fonction qui permet de boucler dans l'array songs
        if (newIndex < 0) {
            newIndex = songs.length - 1;
            // console.log(newIndex)
        } else if (newIndex >= songs.length) {
            newIndex = 0;
        }

        setCurrentSong(songs[newIndex]);
    };

    return (
        <div className="App">
            <Title />
            <Launcher
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
                isPlaying={isPlaying}
            />

            <div className={`lateral-panel ${libraryStatus ? "active-panel" : ""}`}>
                <Infos
                    currentSong={currentSong}
                />
                <Player
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    audioRef={audioRef}
                    songs={songs}
                    setSongs={setSongs}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    volume={volume}
                    setVolume={setVolume}

                />
                <Playlist
                    songs={songs}
                    setSongs={setSongs}
                    setCurrentSong={setCurrentSong}
                    isPlayling={isPlaying}
                />
            </div>

            <audio
                onLoadedData={autoPlayHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
            />

        </div>
    );
}

export default App;
