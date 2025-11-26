import express from "express";
import authRouter from "./src/routes/auth.router.js";
import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();
app.use(express.json());

// app.use(auth)

app.get("/", auth, (req, res) => {
  res.send("API ...");
});

app.use("/api", authRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
