import React, { Fragment } from "react";

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
            <p className="listTitle">Sheet Music Links</p>
            <ul>
                {sheetMusic}
            </ul>  
            <br/>
            <p className="listTitle">Video{videoLinks.length > 1 ? "s" : ""}:</p>
            <ul>
                {videoLinks}
            </ul>
            <br/>

        </Fragment>
            
       
    )
} 