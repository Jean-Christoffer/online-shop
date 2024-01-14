import 'dotenv/config'
import express from "express";
import router from './routes/index.mjs';
import morgan from 'morgan'
import bodyParser from "body-parser";

//midelware
const app = express()
app.use(morgan("combined"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//port
const PORT = process.env.PORT || 3100

//routes
app.use(router)

app.get('/', (req, res) => {
  res.send("Hello I am working my friend Supabase <3");
});

app.get('*', (req, res) => {
  res.send("Hello again I am working my friend to the moon and behind <3");
});
//listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  