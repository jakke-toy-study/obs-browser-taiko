import ws from 'ws';

const PORT = 5765;

export function startWebSocket() {
  const server = new ws.Server({port: PORT});

  server.on("connection", (socket, request) => {
    console.log("클라이언트 연결됨");

    // 초기 메시지 전송
    socket.send(JSON.stringify({
      type: "INIT",
      payload: "Hello from Electron WebSocket Server"
    }));

    socket.on("message", (message) => {
      console.log("수신된 메시지:", message.toString());
    });

    socket.on("close", () => {
      console.log("클라이언트 연결 종료됨");
    });
  });

  console.log(`WebSocket 서버 실행 중: ws://localhost:${PORT}`);

  return server;
}