import React from 'react';
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "./Feed.css";

function Feed() {
    return <div className="feed">
        <StoryReel/>
        <MessageSender/>

        <Post
            profilePic="https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"
            image="https://resi.ze-robot.com/dl/ul/ultraviolet-4k-wallpaper-2560%C3%971600.jpg"
            username="john_doe"
            message="This is an awesome clone!"
            timestamp="Server time: NOW"
        />
        <Post
            profilePic="https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"
            username="john_doe"
            message="This is an awesome clone!"
            timestamp="Server time: NOW"
        />
    </div>
}

export default Feed;
