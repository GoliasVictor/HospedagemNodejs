import {httpGetAsync, ArrayToDataOptions}  from "./main.js";
 
const DataListNomes =  document.getElementById("Nomes")!;
const InputNome = <HTMLInputElement>document.getElementById("Nome")!;
const BotaoProcurar = document.getElementById("BtnProcura")!;
function ProcurarPessoas(){
    httpGetAsync("Procura/Pessoas?Nome=" + InputNome.value, (jsonPessoas)=>{
        const Pessoas = JSON.parse(jsonPessoas);
        DataListNomes.innerHTML = ArrayToDataOptions(Pessoas.map((p: { Nome: any; }) => p.Nome));
    })
}
function ObterDados(){
    const SUCCESS = (ID: string) => {
        window.location.href = "/Pessoa?ID=" + ID;
    }
    const ERRO = () => {
        alert("Pessoa não está registrada");
    }
    httpGetAsync("Procura/IDPessoa?Nome=" + InputNome.value,SUCCESS,ERRO);
}

InputNome.addEventListener("input",ProcurarPessoas);
BotaoProcurar.addEventListener("click",ObterDados);