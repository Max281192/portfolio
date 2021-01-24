import React from 'react';

// Importation de composants
import Song from "./Song";

const Playlist = ({songs, setSongs, setCurrentSong, isPlaying}) => {

    return(
        <div className="playlist-container">
            <div className="playlist-songs">
                {songs.map((song) => (
                    <Song
                        song={song}
                        songs={songs}
                        setSongs={setSongs}
                        setCurrentSong={setCurrentSong}
                        isPlaying={isPlaying}
                        key={song.id}
                        id={song.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Playlist;