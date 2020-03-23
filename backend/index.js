const express = require("express");

const app = express();

app.get("/", (require, response) => {
  return response.send({
    event: "Semana OmniStack 11.0",
    aluno: "Ariel Ribeiro"
  });
});

app.listen(3333);
