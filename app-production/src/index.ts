import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;
import routes from './middlewares/routes';




app.use(cors({origin: "https://localhost:3001"}), express.json(), routes);




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


