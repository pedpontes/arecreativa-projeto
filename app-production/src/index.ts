import express from 'express';
const app = express();
const PORT = 3000;
import routes from './middlewares/routes';




app.use(express.json(), routes);




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});









