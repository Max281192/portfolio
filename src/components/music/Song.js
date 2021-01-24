import React from 'react';

const Song = ({song, songs, setSongs, setCurrentSong, id}) => {
    //EVENT LISTENER
    const songSelectHandler = () => {
        setCurrentSong(song);
        // add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
    };


    return(
        <div
            className={`song ${song.active ? "selected" : ""}`}
            onClick={songSelectHandler}
        >
            <img src={song.cover} alt="cover"/>
            <div className="song-name">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    )
}

export default Song;