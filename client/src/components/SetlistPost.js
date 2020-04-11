import React from "react";
import { Song } from "./Song";

export function SetlistPost(props) {
    const { post } = props;

    return (
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">{post.title}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">{post.description}</p>
            <ul className="list-group">
                {post.songs.map((song, i) => <li key={i} className="list-group-item"><Song order={i} song={song}/></li>)}
            </ul>
            {post.postAuthor.length > 0 ? <p>Post by {post.postAuthor}</p>: ""}
          </div>
        </div>
    )
}