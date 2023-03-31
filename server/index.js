import express from "express";
import cors from "cors";

import { dataSet } from "./sampleData.js";

const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:5174",
};

app.use(cors(corsOptions));

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json(dataSet);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
