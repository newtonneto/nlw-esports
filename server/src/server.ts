import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json({ test: "test 1" });
});

app.listen(3333);
