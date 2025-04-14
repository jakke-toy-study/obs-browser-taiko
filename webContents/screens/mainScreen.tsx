import React, { useEffect, useRef, useState } from "react"
import { EffectLayerWrapper, EffectLayerWrapperHandle } from "./effects/effectLayerWrapper";
import {ProfileMessage} from './items/profileMessage';

const PORT = 5765;

export const MainScreen: React.FC = () => {
  const [currentWebSocket, setWebSocket] = useState<WebSocket>();
  const [profileMessage, setProfileMessage] = useState<string>("Hello");
  const effectWrapperRef = useRef<EffectLayerWrapperHandle>(null);

  const connectToWebSocket = () => {
    const socket = new WebSocket(`ws://localhost:${PORT}`);

    socket.onopen = () => {
      console.log("WebSocket 연결됨");
      socket.send(JSON.stringify({ type: "PING", payload: "Hello server!" }));
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("서버로부터 수신:", message);

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
          console.warn("알 수 없는 메시지 타입:", message.type);
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket 오류:", err);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
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
        <ProfileMessage message={profileMessage} /> 
      </div>
      {/* <RandomSongEffectCore /> */}
      <EffectLayerWrapper ref={effectWrapperRef} />
    </div>
  );
};