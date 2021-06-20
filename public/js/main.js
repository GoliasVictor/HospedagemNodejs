export function httpGetAsync(theUrl, success, error) {
    if (error === void 0) { error = function () { }; }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200)
                success === null || success === void 0 ? void 0 : success(xmlHttp.responseText);
            else
                error === null || error === void 0 ? void 0 : error(xmlHttp.status);
        }
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
export function ArrayToDataOptions(arr) {
    return arr.map(function (e) { return "<option value=\"" + e + "\">"; }).join("");
}
var Pessoa = /** @class */ (function () {
    function Pessoa(ID, nome, idade, cpf, rg, data_nasc, sexo, signo, mae, pai, email, senha, cep, endereco, numero, bairro, cidade, estado, telefone_fixo, celular, altura, peso, tipo_sanguineo, cor) {
        this.ID = ID;
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.rg = rg;
        this.data_nasc = data_nasc;
        this.sexo = sexo;
        this.signo = signo;
        this.mae = mae;
        this.pai = pai;
        this.email = email;
        this.senha = senha;
        this.cep = cep;
        this.endereco = endereco;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.telefone_fixo = telefone_fixo;
        this.celular = celular;
        this.altura = altura;
        this.peso = peso;
        this.tipo_sanguineo = tipo_sanguineo;
        this.cor = cor;
    }
    return Pessoa;
}());
export { Pessoa };
