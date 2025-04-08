import express from 'express';
import path from 'path';
import { createServer } from 'http';

const PORT = 2765;

export function startOverlayServer() {
    const app = express();
    const server = createServer(app);

    const overlayPath = path.join(__dirname, "../../../dist/webContents");

    app.use('/', express.static(overlayPath));

    server.listen(PORT, () => {
        console.log(`Overlay server running at http://localhost:${PORT}`);
    });

    return server;
}