import 'dotenv/config'
import express from "express";
import router from './routes/index.mjs';
import morgan from 'morgan'
import bodyParser from "body-parser";
import cors from "cors"

//midelware
const app = express()
app.use(cors())
app.use(morgan("combined"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//port
const PORT = process.env.PORT || 3100

//routes
app.use(router)

app.get('/', (req, res) => {
  res.send("Hello from express!");
});

app.get('*', (req, res) => {
  res.send("Hello from further back");
});
//listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  