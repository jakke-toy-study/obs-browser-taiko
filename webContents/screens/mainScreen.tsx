import React, { useEffect, useRef, useState } from "react"
import { EffectLayerWrapper, EffectLayerWrapperHandle } from "./effects/effectLayerWrapper";
import {ProfileMessage} from './items/profileMessage';
import { SongPaper } from "./effects/randomSong/randomBox/songPaper";

const PORT = 5765;

export const MainScreen: React.FC = () => {
  const [currentWebSocket, setWebSocket] = useState<WebSocket>();
  const [profileMessage, setProfileMessage] = useState<string>("Hello");
  const effectWrapperRef = useRef<EffectLayerWrapperHandle>(null);

  const connectToWebSocket = () => {
    const socket = new WebSocket(`ws://localhost:${PORT}`);

    socket.onopen = () => {
      console.log("WebSocket Connected");
      socket.send(JSON.stringify({ type: "PING", payload: "Hello server!" }));
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Message from server:", message);

      switch (message.type) {
        case "INIT":
          setProfileMessage(message.payload);
          break;

        case "SET_TEXT":
          setProfileMessage(message.payload);
          break;
        
        case "PLAY_EFFECT":
          playEffect(message.payload);
          break;

        default:
          console.warn("Unknown message:", message.type);
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket Error:", err);
    };

    socket.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    setWebSocket(socket);
  };

  // Effect controller
  const playEffect = (id: string) => {
    effectWrapperRef.current?.play(id);
  }

  useEffect(() => {
    connectToWebSocket();

    return () => {
      currentWebSocket?.close();
    };
  }, []);

  return (
    <div>
      <div style={{ flexDirection: 'column', flex: 1 }}>
        {/* <ProfileMessage message={profileMessage} />  */}
      </div>
      <EffectLayerWrapper ref={effectWrapperRef} />
      {/* <SongPaper genre={"Game Music"} songName="Synthesis." artistName="tn-shi, 山神カルタ" level={{course: 'ura', level: 10}} /> */}
    </div>
  );
};