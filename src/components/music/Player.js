import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown} from "@fortawesome/free-solid-svg-icons";

const Player = ({
                    isPlaying,
                    setIsPlaying,
                    audioRef,
                    songs,
                    currentSong,
                    setCurrentSong,
                    setSongs,
                    volume,
                    setVolume,
                }) => {

    // Event
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const skipSongHandler = (direction) => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id); // je retrouve l'index du son en cours

        let newIndex = currentIndex + direction; // Je calcule mon nouvel index avec la direction

        if(newIndex < 0){ // je fais un if statement au cas ou je serais au bout de la songs
            newIndex = songs.length - 1;
        }else if(newIndex >= songs.length){
            newIndex = 0;
        }

        setCurrentSong(songs[newIndex]); // je définie le nouveau son qui joue

        const newSongs = songs.map((song) => { // Je modifie le surlignage du son en cours
            if (song.id === songs[newIndex].id) {
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
    }

    const volumeHandler = (e) => {
        setVolume((Math.round(e.target.value)) / 10);
        audioRef.current.volume = volume;
    }

    return(
        <div className="player-controls">
            <div className="icons">
                <FontAwesomeIcon
                    icon={faBackward}
                    className="icon skip-backward"
                    onClick={() => skipSongHandler(-1)}
                />
                <FontAwesomeIcon
                    icon={!isPlaying ? faPlay : faPause}
                    className="icon play"
                    onClick={playSongHandler}
                />
                <FontAwesomeIcon
                    icon={faForward}
                    className="icon skip-forward"
                    onClick={() => skipSongHandler(1)}
                />
            </div>

            <div className="volume-control">
                <FontAwesomeIcon
                    icon={faVolumeDown}
                    className="icon-volume"
                />
                <input
                    type="range"
                    min={0}
                    max={10}
                    onChange={volumeHandler}
                    onClick={volumeHandler}
                />
                <FontAwesomeIcon
                    icon={faVolumeUp}
                    className="icon-volume"
                />
            </div>

        </div>
    )
}

export default Player;

