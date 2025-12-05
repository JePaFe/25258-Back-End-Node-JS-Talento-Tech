import "dotenv/config";
import express from "express";
import authRouter from "./src/routes/auth.router.js";
import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();
app.use(express.json());

app.use("/api", authRouter);

app.use(auth);

app.get("/", auth, (req, res) => {
  res.send("API ...");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
