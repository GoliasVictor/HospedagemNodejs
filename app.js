const express = require("express");
const fs = require('fs');
const app = express();

const Pessoas = JSON.parse( fs.readFileSync(__dirname+"/Pessoas.json", 'utf8'));
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/src/index.html");
});  
app.get("/Pessoa", function (req, res) {
    const ID = req.query.ID; 
    if(typeof ID === "string")
        res.sendFile(__dirname + "/src/pessoa.html");
    else
        res.sendStatus(404);    
});   
app.get("/Procura/Pessoa",function (req,res){
    if(req.query.ID){
        const ID = req.query.ID;  
        const Pessoa = Pessoas.find(p => p.ID == ID); 
        if(Pessoa)
            res.json(Pessoa);
        else 
            res.sendStatus(404); 
    }
    else 
        res.sendStatus(404);
})
app.get("/Procura/IDPessoa",function (req,res){
    if(req.query.Nome){
        const Nome = req.query.Nome.toLowerCase();  
        const Pessoa = Pessoas.find(p => p.nome.toLowerCase() == Nome);
        if(Pessoa)
            res.json(Pessoa.ID);
        else 
            res.sendStatus(404); 
    }
    else 
        res.sendStatus(404);
})
app.get("/Procura/Pessoas", function (req, res) {
    if(req.query.Nome){
        const Nome = req.query.Nome.toLowerCase(); 
        const PessoasFiltradas = Pessoas.filter(P => P.nome.toLowerCase().includes(Nome))
                                        .map(p => ({Nome:p.nome, ID: p.ID}))
                                        .sort((a,b) => a.Nome.toLowerCase().indexOf(Nome)  -  b.Nome.toLowerCase().indexOf(Nome))
                                        .splice(0,5);  
        res.json(PessoasFiltradas);
    
    } else {
        res.status(404);
    }

    
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
 