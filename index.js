import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/health", (req, res) => {
  res.status(200).send("Success!");
});
