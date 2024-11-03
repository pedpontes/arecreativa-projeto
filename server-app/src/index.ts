import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;
import routes from './routes/routes';
import next from "next"
import path from 'path';

const server = next({dev: false, conf: {distDir: path.join(__dirname, '../.next')}});
const handle = server.getRequestHandler();

server.prepare().then(() => {
    app.use("/api", cors({
        origin: "http://localhost:3001"
    }), express.json(), routes);
    
    app.all("*", (req, res) => {
        return handle(req, res);
    });

    app.listen(PORT, () => {
        console.log(`> Server is running at http://localhost:${PORT}`);
    });
    
}).catch((err) => {
    console.error(err.stack);
    process.exit(1);
});



