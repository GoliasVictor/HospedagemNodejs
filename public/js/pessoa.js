import { httpGetAsync, Pessoa } from "./main.js";
var url = new URL(window.location.href);
var ID = url.searchParams.get("ID");
var pessoa = new Pessoa();
var ElMain = document.getElementById("Main");
httpGetAsync("Procura/Pessoa?ID=" + ID, function (jsonPessoa) {
    var JsonObjectPessoa = JSON.parse(jsonPessoa);
    for (var key in JsonObjectPessoa)
        pessoa[key] = JsonObjectPessoa[key];
    ElMain.innerHTML = "\n    <section id=\"cabecario\">\n        <h1>" + pessoa.ID + " - " + pessoa.nome + "</h1>\n    </section>\n    <section id=\"Corpo\">          \n        <dl>  \n            <dt>Gerais</dt>\n                <dd>Nome:  " + pessoa.nome + "</dd>\n                <dd>Data de Nascimento: " + pessoa.data_nasc + " </dd>\n            <dt>Identifica\u00E7\u00E3o</dt>\n                <dd>ID: " + pessoa.ID + "</dd>\n                <dd>RG: " + pessoa.rg + "</dd>\n                <dd>CPF: " + pessoa.cpf + "</dd>\n            <dt>Parentes</dt>\n                <dd>M\u00E3e: " + pessoa.mae + "</dd>\n                <dd>Pai: " + pessoa.pai + "</dd>\n            <dt>Localiza\u00E7\u00E3o</dt>\n                <dd>CEP: " + pessoa.cep + " </dd>\n                <dd>Endere\u00E7o: " + pessoa.endereco + ", " + pessoa.bairro + "," + pessoa.cidade + "</dd>\n                <dd>Estado: " + pessoa.estado + "</dd>\n            <dt>Contato</dt>\n                <dd>Telefone Fixo: " + pessoa.telefone_fixo + "</dd>\n                <dd>Celular: " + pessoa.celular + " </dd>\n                <dd>Email: " + pessoa.email + "</dd>\n            <dt>Saude</dt> \n                <dd>Idade: " + pessoa.idade + "Anos</dd>\n                <dd>Altura: " + pessoa.altura + "</dd>\n                <dd>Peso: " + pessoa.peso + "</dd>\n                <dd>Tipo Sanguineo: " + pessoa.tipo_sanguineo + "</dd>\n        </dl> \n    </section> \n    ";
});
