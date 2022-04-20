import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "hello twiin!" });
});

app.post("/colecao", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(3000, () => console.log("server is running!"));
