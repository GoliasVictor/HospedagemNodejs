import { get } from "http";
import { mainModule } from "process";
import {httpGetAsync , Pessoa}  from "./main.js"; 
const url = new URL(window.location.href);
const ID = url.searchParams.get("ID");
const pessoa = new Pessoa();
const ElMain = document.getElementById("Main")!;
httpGetAsync("Procura/Pessoa?ID=" + ID, (jsonPessoa)=>{
    const JsonObjectPessoa = JSON.parse(jsonPessoa);
    for (var key in JsonObjectPessoa) 
        pessoa[key] = JsonObjectPessoa[key];
    ElMain.innerHTML = `
    <section id="cabecario">
        <h1>${pessoa.ID} - ${pessoa.nome}</h1>
    </section>
    <section id="Corpo">          
        <dl>  
            <dt>Gerais</dt>
                <dd>Nome:  ${pessoa.nome}</dd>
                <dd>Data de Nascimento: ${pessoa.data_nasc} </dd>
            <dt>Identificação</dt>
                <dd>ID: ${pessoa.ID}</dd>
                <dd>RG: ${pessoa.rg}</dd>
                <dd>CPF: ${pessoa.cpf}</dd>
            <dt>Parentes</dt>
                <dd>Mãe: ${pessoa.mae}</dd>
                <dd>Pai: ${pessoa.pai}</dd>
            <dt>Localização</dt>
                <dd>CEP: ${pessoa.cep} </dd>
                <dd>Endereço: ${pessoa.endereco}, ${pessoa.bairro},${pessoa.cidade}</dd>
                <dd>Estado: ${pessoa.estado}</dd>
            <dt>Contato</dt>
                <dd>Telefone Fixo: ${pessoa.telefone_fixo}</dd>
                <dd>Celular: ${pessoa.celular} </dd>
                <dd>Email: ${pessoa.email}</dd>
            <dt>Saude</dt> 
                <dd>Idade: ${pessoa.idade}Anos</dd>
                <dd>Altura: ${pessoa.altura}</dd>
                <dd>Peso: ${pessoa.peso}</dd>
                <dd>Tipo Sanguineo: ${pessoa.tipo_sanguineo}</dd>
        </dl> 
    </section> 
    `;     
});     
 