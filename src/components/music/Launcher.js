import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic, faLanguage, faMoon} from "@fortawesome/free-solid-svg-icons";

const Launcher = ({libraryStatus,
                  setLibraryStatus,
                  isPlaying
}) => {

    return(
        <div className={`launcher ${libraryStatus ? 'launcher-active' : ''}`}>
            <button>
                <FontAwesomeIcon
                    icon={faLanguage}
                    className="icon-sidebar language"
                    size="2x"
                />
            </button>
            <button className={`${isPlaying ? 'launcher-rotate' : ''}`} onClick={() => setLibraryStatus(!libraryStatus)}>
                <FontAwesomeIcon
                    icon={faMusic}
                    className="icon-sidebar vinyl"
                    size="2x"
                />
            </button>
            <button>
                <FontAwesomeIcon
                    icon={faMoon}
                    className="icon-sidebar moon"
                    size="2x"
                />
            </button>
        </div>
    )
};

export default Launcher;

