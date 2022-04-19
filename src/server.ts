import express from "express";

const app = express();  

app.get("/", (request, response) => {
    return response.json({ message: "hello twiin!"});
});

app.listen(3000, () => console.log("server is running!"));