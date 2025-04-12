import React, { useEffect, useState } from "react"
import { RandomBox } from "../components/randomBox/randomBox";
import { Message } from "../components/message/message";

const PORT = 5765;

export const MainScreen: React.FC = () => {
  const [currentWebSocket, setWebSocket] = useState<WebSocket>();
  const [value, setValue] = useState<string>("Hello");

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
          setValue(message.payload);
          break;

        case "SET_TEXT":
          setValue(message.payload);
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

  useEffect(() => {
    // connectToWebSocket();

    return () => {
      currentWebSocket?.close();
    };
  }, []);

  return (
    <div style={{ flexDirection: 'column', flex: 1 }}>
      <div style={{
        borderWidth: 1,
        background: 'white',
        fontWeight: 600,
        borderRadius: 4,
      }}>
        {value}
      </div>
      <div style={{position: 'absolute'}}>
        <Message message="오늘의 목표 : 60가" />
      </div>
      <div style={{position: 'absolute'}}>
        <RandomBox />
      </div>
    </div>
  );
};