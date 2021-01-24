import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompactDisc} from "@fortawesome/free-solid-svg-icons";

const Launcher = ({libraryStatus,
                  setLibraryStatus,
                  isPlaying
}) => {

    return(
        <button className={`launcher ${libraryStatus ? 'launcher-active' : ''} ${isPlaying ? 'launcher-rotate' : ''}`} onClick={() => setLibraryStatus(!libraryStatus)}>
            <FontAwesomeIcon
                icon={faCompactDisc}
                className="vinyl"
            />
        </button>
    )
};

export default Launcher;

