import express from "express";
import cors from "cors";
import data from "./data/demoData.json" assert { type: "json" };

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => res.json(data));

app.listen(5000, () => console.log("Server running on port 5000"));