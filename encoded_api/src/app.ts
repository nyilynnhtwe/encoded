import express, { Application, Request, Response } from "express";
import apiRouter from "./routes";
import cors from "cors";

const app : Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT : number = 8000;


app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!')
  })

app.use("/api",apiRouter)
  
  app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT} !`)
  })