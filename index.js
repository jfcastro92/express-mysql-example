import express from "express";
import dogBBreedsRouter from './routes/dogBreeds.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
);

app.get("/", (req, res) => {
  res.json({ message: "API using Express, MySQL and Javascript" });
});

app.use("/dogBreeds", dogBBreedsRouter);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`MySQL Express API running on http://localhost:${port}`);
});