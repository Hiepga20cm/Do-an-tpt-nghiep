import express from "express";
import * as http from "http";
import * as dotenv from "dotenv";
import * as bodyparser from "body-parser";
import cors from "cors";
import fs from "fs";
import path from "path";
import helmet from "helmet";
import { CommonRoutesConfig } from "./common/common.routes.config";
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Array<CommonRoutesConfig> = [];
dotenv.config();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(express.static(__dirname + "/attachment"));

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(`Server running at http://localhost:${port}`);
});
const port: any = process.env.PORT;
export default server.listen(port, process.env.IP, () => {
  console.log(`Server running at http://localhost:${port},${process.env.IP}`);
  routes.forEach((route: CommonRoutesConfig) => {
    console.log(`Routes configured for ${route.getName()}`);
  });
});
