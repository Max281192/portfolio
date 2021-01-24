import React from 'react';

const Infos = ({currentSong}) => {

    return(
        <div className="infos-container">
            <img src={currentSong.cover} alt="cover"/>
            <div className="infos-name">
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    )
}

export default Infos;

