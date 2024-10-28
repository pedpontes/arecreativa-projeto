import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;
import routes from './middlewares/routes';
import next from "next"
import path from 'path';

//FIXME: Erro ao encontrar o arquivo build .next, verifique o caminho correto: 

const server = next({dev: false, conf: {distDir: path.join(__dirname, '../.next')}});
const handle = server.getRequestHandler();

server.prepare().then(() => {
    app.use("/api", cors(), express.json(), routes);
    
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



