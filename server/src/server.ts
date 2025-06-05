import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import itemRouter from "./routes/item.route";

dotenv.config();

const app = express();
const port: string = process.env.PORT || "8000";

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(itemRouter);

app.listen(port, () => {
  console.log("server is on", port);
});
