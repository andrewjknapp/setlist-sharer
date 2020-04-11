import React, { useState, useEffect } from "react";
import { SetlistPost } from "../SetlistPost";
import "../assets/css/HomePage.css"

export function HomePage() {

    const [posts, setPosts] = useState([
        {
            title: "Easter Service",
            postAuthor: "praise1234",
            description: "Uplifting songs for the Easter Service.",
            songs: [
                {
                    title: "Today is the Day",
                    artist: "Lincoln Brewster",
                    videoLinks: [{
                        name: "Watch this",
                        link: "https://www.youtube.com/watch?v=B300gQkgDS0"}],
                    sheetMusic: [{
                        name: "Main Sheets",
                        link: "http://s3.amazonaws.com/halleonard-pagepreviews/HL_DDS_0000000000359620.png"
                    }],
                    notes: "Remember to mark on measure 39 that the tempo is 100"
                },
                {
                    title: "Today is the Day",
                    artist: "Lincoln Brewster",
                    videoLinks: [{
                        name: "Watch this",
                        link: "https://www.youtube.com/watch?v=B300gQkgDS0"}],
                    sheetMusic: [{
                        name: "Main Sheets",
                        link: "http://s3.amazonaws.com/halleonard-pagepreviews/HL_DDS_0000000000359620.png"
                    }],
                    notes: "Remember to mark on measure 39 that the tempo is 100"
                }
            ],
            tags: ["#uplifting", "#easter", "#praise"]
        },
        {
            title: "Easter Service",
            postAuthor: "",
            description: "Uplifting songs for the Easter Service.",
            songs: [
                {
                    title: "Today is the Day",
                    artist: "Lincoln Brewster",
                    videoLinks: [{
                        name: "Watch this",
                        link: "https://www.youtube.com/watch?v=B300gQkgDS0"}],
                    sheetMusic: [{
                        name: "Main Sheets",
                        link: "http://s3.amazonaws.com/halleonard-pagepreviews/HL_DDS_0000000000359620.png"
                    }],
                    notes: "Remember to mark on measure 39 that the tempo is 100"
                }
            ],
            tags: ["#uplifting", "#easter", "#praise"]
        }
    ])

    // useEffect(()=>{
    //     setPosts([])
    // }, []);

    return (
        <article>
            {posts.length > 0 ? posts.map((post, i)=><section key={i}><SetlistPost post={post}/></section>) : <p>No posts found</p>}
        </article>
    )
}