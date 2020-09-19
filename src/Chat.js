import React, { useState, useEffect } from "react";
import "./Chat.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useParams } from "react-router-dom";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);
  useEffect(() => {
    // Run this when the sidebar comp changes
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(
          snapshot.docs.map((doc) => {
            if (doc.data()) {
              return doc.data();
            }
          })
        )
      );
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name} </strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {/* {roomMessages.filter(data=>data.message.length !== 0)} */}
        {roomMessages?.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
            key={message}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}
export default Chat;
