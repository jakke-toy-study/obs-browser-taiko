import { Server } from "http";
import { startOverlayServer } from "../webServer/server";
import ws from 'ws';
import { startWebSocket } from "../webSocket/webSocketServer";

export class AppController {
    webServer: Server;
    webSocket: ws.Server;
    
    private constructor() {
        this.webServer = startOverlayServer();
        this.webSocket = startWebSocket();
    }

    static instance: AppController;

    broadcast(type: string, payload: any) {
        const message = JSON.stringify({ type, payload });
    
        this.webSocket.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
            client.send(message);
            }
        });
    }

    static initiate() {
        AppController.instance = new AppController();
    }
}