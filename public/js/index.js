import { httpGetAsync, ArrayToDataOptions } from "./main.js";
var DataListNomes = document.getElementById("Nomes");
var InputNome = document.getElementById("Nome");
var BotaoProcurar = document.getElementById("BtnProcura");
function ProcurarPessoas() {
    httpGetAsync("Procura/Pessoas?Nome=" + InputNome.value, function (jsonPessoas) {
        var Pessoas = JSON.parse(jsonPessoas);
        DataListNomes.innerHTML = ArrayToDataOptions(Pessoas.map(function (p) { return p.Nome; }));
    });
}
function ObterDados() {
    var SUCCESS = function (ID) {
        window.location.href = "/Pessoa?ID=" + ID;
    };
    var ERRO = function () {
        alert("Pessoa não está registrada");
    };
    httpGetAsync("Procura/IDPessoa?Nome=" + InputNome.value, SUCCESS, ERRO);
}
InputNome.addEventListener("input", ProcurarPessoas);
BotaoProcurar.addEventListener("click", ObterDados);
