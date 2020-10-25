import React, {useState} from 'react';
import "./MessageSender.css";
import {Avatar} from "@material-ui/core";
import {
    InsertEmoticon as InsertEmoticonIcon,
    PhotoLibrary as PhotoLibraryIcon,
    Videocam as VideocamIcon
} from "@material-ui/icons";

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // some clever db logic

        setInput("");
        setImageUrl("");
    }

    return <div className="messageSender">
        <div className="messageSender__top">
            <Avatar/>
            <form>
                <input className="messageSender__input" placeholder="What's on your mind?" value={input}
                       onChange={e => setInput(e.target.value)}/>
                <input placeholder="Image URL (Optional)" value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
            </form>
        </div>

        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideocamIcon style={{color: "red"}}/>
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color: "green"}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color: "orange"}}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
}

export default MessageSender;