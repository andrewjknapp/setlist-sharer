import React, { Fragment } from "react";
import "./assets/css/Song.css"

export function Song(props) {

    const { song, order } = props;

    const videoLinks = createListItems(song.videoLinks);
    const sheetMusic = createListItems(song.sheetMusic)

    function createListItems(arr) {
        return arr.map((item, i) => {
            return (
                <li key={i}>
                    <a target="_blank" rel="noopener noreferrer" href={item.link}>{item.name}</a>
                </li>
            )
        })
    }

    return (
        <Fragment>
            <p className="songTitle">#{order + 1}: {song.title}</p>
            <p className="songArtist">Artist: {song.artist}</p>
            <p className="songDescription">{song.notes}</p>
            <hr/>
            <p className="listTitle">Sheet Music Links</p>
            <ul className="listLinks">
                {sheetMusic}
            </ul>  
            <hr/>
            <p className="listTitle">Video{videoLinks.length > 1 ? "s" : ""}:</p>
            <ul className="listLinks">
                {videoLinks}
            </ul>

        </Fragment>
            
       
    )
} 