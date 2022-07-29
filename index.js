const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('<span style="color: green">Hello World</span>');
    console.log("teste");
});

const PORT = process.env.PORT || 5000;

// CRIANDO O SERVIDOR PARA RODAR NA PORTA 3000
app.listen(PORT, ()=>{
    console.log("SERVIDO RODANDO" + PORT);
})