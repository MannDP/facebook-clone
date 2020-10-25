import React, {useEffect, useState} from 'react';
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(db
        .collection('posts')
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        }), [])

    return <div className="feed">
        <StoryReel/>
        <MessageSender/>

        {posts.map(({id, data}) => {
            return <Post
                key={id}
                profilePic={data.profilePic}
                image={data.image}
                message={data.message}
                username={data.username}
                timestamp={data.timestamp}/>
        })}
    </div>
}

export default Feed;
