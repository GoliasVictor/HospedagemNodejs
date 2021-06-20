export function httpGetAsync(theUrl :string, success:(responseText:string)=>void, error:(statusErro:number)=>void = ()=>{} )
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 ){
            if(xmlHttp.status == 200)
                success?.(xmlHttp.responseText);
            else 
                error?.(xmlHttp.status);
        } 
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
export function  ArrayToDataOptions(arr:string[]):string 
{
   return arr.map((e:string) => `<option value="${e}">`).join("");
}

export class Pessoa{
    [k: string]: any;
    ID              :string | undefined ; 
    nome            :string | undefined ; 
    idade           :string | undefined ; 
    cpf             :string | undefined ; 
    rg              :string | undefined ; 
    data_nasc       :string | undefined ; 
    sexo            :string | undefined ; 
    signo           :string | undefined ; 
    mae             :string | undefined ; 
    pai             :string | undefined ; 
    email           :string | undefined ; 
    senha           :string | undefined ;
    cep             :string | undefined ; 
    endereco        :string | undefined ; 
    numero          :string | undefined ;
    bairro          :string | undefined ; 
    cidade          :string | undefined ; 
    estado          :string | undefined ; 
    telefone_fixo   :string | undefined ; 
    celular         :string | undefined ; 
    altura          :string | undefined ; 
    peso            :string | undefined ; 
    tipo_sanguineo  :string | undefined ; 
    cor             :string | undefined ; 
    constructor(
        ID              ?:string,
        nome            ?:string,
        idade           ?:string,
        cpf             ?:string,
        rg              ?:string,
        data_nasc       ?:string,
        sexo            ?:string,
        signo           ?:string,
        mae             ?:string,
        pai             ?:string,
        email           ?:string,
        senha           ?:string,
        cep             ?:string,
        endereco        ?:string,
        numero          ?:string,
        bairro          ?:string,
        cidade          ?:string,
        estado          ?:string,
        telefone_fixo   ?:string,
        celular         ?:string,
        altura          ?:string,
        peso            ?:string,
        tipo_sanguineo  ?:string,
        cor             ?:string,
    )
    {
        this.ID             = ID             ;
        this.nome           = nome           ;
        this.idade          = idade          ;
        this.cpf            = cpf            ;
        this.rg             = rg             ;
        this.data_nasc      = data_nasc      ;
        this.sexo           = sexo           ;
        this.signo          = signo          ;
        this.mae            = mae            ;
        this.pai            = pai            ;
        this.email          = email          ;
        this.senha          = senha          ;
        this.cep            = cep            ;
        this.endereco       = endereco       ;
        this.numero         = numero         ;
        this.bairro         = bairro         ;
        this.cidade         = cidade         ;
        this.estado         = estado         ;
        this.telefone_fixo  = telefone_fixo  ;
        this.celular        = celular        ;
        this.altura         = altura         ;
        this.peso           = peso           ;
        this.tipo_sanguineo = tipo_sanguineo ;
        this.cor            = cor            ;
    }
 }